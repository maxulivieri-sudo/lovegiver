'use client';

import { useState, useRef, useCallback } from 'react';
import type { Screen, Scenario, StepResult } from '@/types';
import { scenarios, glossary } from '@/data/scenarios';
import Sidebar from './Sidebar';
import Home from './screens/Home';
import Catalog from './screens/Catalog';
import ScenarioPlayer from './screens/ScenarioPlayer';
import Report from './screens/Report';
import Dashboard from './screens/Dashboard';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [activeScenario, setActiveScenario] = useState<Scenario | null>(null);
  const [step, setStep] = useState(0);
  const [results, setResults] = useState<StepResult[]>([]);
  const [freeText, setFreeText] = useState('');
  const [feedback, setFeedback] = useState<StepResult | null>(null);
  const mainRef = useRef<HTMLElement>(null);

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

  const continueStep = useCallback(() => {
    if (!activeScenario?.steps) return;
    const next = step + 1;
    if (next >= activeScenario.steps.length) {
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
  }, [activeScenario, step, scrollTop]);

  const inFlow = screen === 'scenario' || screen === 'report';

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#f1ece4' }}>
      <Sidebar
        screen={screen}
        inFlow={inFlow}
        go={go}
        startDemo={() => startScenario('s1')}
        goCatalog={() => go('catalog')}
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
        {screen === 'dashboard' && <Dashboard />}
      </main>
    </div>
  );
}
