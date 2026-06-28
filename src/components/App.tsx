'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import type { User } from '@supabase/supabase-js';
import type { Screen, Scenario, StepResult } from '@/types';
import { scenarios, glossary } from '@/data/scenarios';
import { supabase } from '@/lib/supabase';
import Sidebar from './Sidebar';
import Auth from './screens/Auth';
import Landing from './screens/Landing';
import Home from './screens/Home';
import Catalog from './screens/Catalog';
import ScenarioPlayer from './screens/ScenarioPlayer';
import Report from './screens/Report';
import Dashboard from './screens/Dashboard';

export default function App() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [authMode, setAuthMode] = useState<'landing' | 'login' | 'signup'>('landing');
  const [screen, setScreen] = useState<Screen>('home');
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);
  const [step, setStep] = useState(0);
  const [results, setResults] = useState<StepResult[]>([]);
  const [freeText, setFreeText] = useState('');
  const [feedback, setFeedback] = useState<StepResult | null>(null);
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      setAuthLoading(false);
    });
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
  }, []);

  const scrollTop = useCallback(() => {
    if (mainRef.current) mainRef.current.scrollTop = 0;
  }, []);

  const go = useCallback((s: Screen) => {
    setScreen(s);
    scrollTop();
  }, [scrollTop]);

  const startScenario = useCallback((id: string) => {
    const s = scenarios.find(x => x.id === id);
    if (!s || s.status !== 'available') { go('catalog'); return; }
    setActiveScenario(s);
    setStep(0);
    setResults([]);
    setFreeText('');
    setFeedback(null);
    setScreen('scenario');
    scrollTop();
  }, [go, scrollTop]);

  const choose = useCallback((idx: number) => {
    if (!activeScenario?.steps) return;
    const st = activeScenario.steps[step];
    if (st.type !== 'dialogue' || !st.choices) return;
    const c = st.choices[idx];
    const maxPts = Math.max(...st.choices.map(x => x.points));
    const res: StepResult = {
      stepIndex: step,
      type: 'dialogue',
      choiceText: c.text,
      quality: c.quality,
      points: c.points,
      max: maxPts,
      feedback: c.feedback,
      critical: !!c.critical,
    };
    setFeedback(res);
    setResults(prev => [...prev.filter(r => r.stepIndex !== step), res]);
  }, [activeScenario, step]);

  const submitFree = useCallback(() => {
    if (!activeScenario?.steps) return;
    const st = activeScenario.steps[step];
    if (st.type !== 'free') return;
    const txt = freeText.trim();
    if (!txt) return;
    const len = txt.length;
    const pts = len > 160 ? 16 : len > 70 ? 13 : 9;
    const res: StepResult = {
      stepIndex: step,
      type: 'free',
      text: txt,
      quality: pts >= 14 ? 'good' : 'partial',
      points: pts,
      max: 20,
      ai: st.aiFeedback,
    };
    setFeedback(res);
    setResults(prev => [...prev.filter(r => r.stepIndex !== step), res]);
  }, [activeScenario, step, freeText]);

  const saveAttempt = useCallback(async (finalResults: StepResult[]) => {
    if (!user || !activeScenario) return;
    const score = finalResults.reduce((s, r) => s + r.points, 0);
    const maxScore = finalResults.reduce((s, r) => s + r.max, 0);
    await supabase.from('attempts').insert({
      user_id: user.id,
      scenario_id: activeScenario.id,
      scenario_title: activeScenario.title,
      score,
      max_score: maxScore,
      results: finalResults,
    });
  }, [user, activeScenario]);

  const continueStep = useCallback(() => {
    if (!activeScenario?.steps) return;
    const next = step + 1;
    if (next >= activeScenario.steps.length) {
      saveAttempt(results);
      setScreen('report');
      setFeedback(null);
      scrollTop();
      return;
    }
    setStep(next);
    setFeedback(null);
    setFreeText('');
    setTimeout(() => {
      if (mainRef.current) mainRef.current.scrollTop = mainRef.current.scrollHeight;
    }, 30);
  }, [activeScenario, step, results, saveAttempt, scrollTop]);

  const handleSignOut = useCallback(async () => {
    await supabase.auth.signOut();
    go('home');
  }, [go]);

  if (authLoading) {
    return (
      <div style={{ minHeight: '100vh', background: '#f1ece4', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ color: '#7a857f', fontSize: 14 }}>Caricamento…</div>
      </div>
    );
  }

  if (!user) {
    if (authMode === 'landing') {
      return (
        <Landing
          onLogin={() => setAuthMode('login')}
          onSignup={() => setAuthMode('signup')}
        />
      );
    }
    return (
      <Auth
        initialMode={authMode === 'signup' ? 'signup' : 'login'}
        onAuth={() => setAuthMode('landing')}
        onBack={() => setAuthMode('landing')}
      />
    );
  }

  const inFlow = screen === 'scenario' || screen === 'report';

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f1ece4' }}>
      <Sidebar
        screen={screen}
        inFlow={inFlow}
        go={go}
        startDemo={() => startScenario('s1')}
        goCatalog={() => go('catalog')}
        user={user}
        onSignOut={handleSignOut}
      />
      <main
        ref={mainRef}
        className="scrollbar-thin"
        style={{ flex: 1, height: '100vh', overflowY: 'auto' }}
      >
        {screen === 'home' && (
          <Home goCatalog={() => go('catalog')} startDemo={() => startScenario('s1')} />
        )}
        {screen === 'catalog' && (
          <Catalog scenarios={scenarios} startScenario={startScenario} />
        )}
        {screen === 'scenario' && activeScenario && (
          <ScenarioPlayer
            scenario={activeScenario}
            step={step}
            results={results}
            feedback={feedback}
            freeText={freeText}
            setFreeText={setFreeText}
            onChoose={choose}
            onSubmitFree={submitFree}
            onContinue={continueStep}
            goCatalog={() => go('catalog')}
          />
        )}
        {screen === 'report' && activeScenario && (
          <Report
            scenario={activeScenario}
            results={results}
            glossary={glossary}
            restart={() => startScenario(activeScenario.id)}
            goCatalog={() => go('catalog')}
          />
        )}
        {screen === 'dashboard' && <Dashboard user={user} />}
      </main>
    </div>
  );
}
