'use client';

import type { Scenario, StepResult, Quality } from '@/types';

const QUALITY_MAP: Record<Quality, { label: string; bg: string; bd: string; fg: string }> = {
  good:     { label: 'Risposta efficace',      bg: '#eef5f0', bd: '#cfe3d6', fg: '#2f6b4f' },
  partial:  { label: 'Parzialmente efficace',  bg: '#fbf6ea', bd: '#ecdfbf', fg: '#8a6a1f' },
  poor:     { label: 'Da rivedere',            bg: '#fbf0ea', bd: '#f0d8c6', fg: '#a8623a' },
  critical: { label: 'Errore critico',         bg: '#fbecea', bd: '#f1cdc7', fg: '#b03a2e' },
};

function ptsLabel(r: StepResult) {
  if (r.type === 'free') return `+${r.points} / ${r.max}`;
  return r.points > 0 ? `+${r.points}` : '+0';
}

interface Props {
  scenario: Scenario;
  step: number;
  results: StepResult[];
  feedback: StepResult | null;
  freeText: string;
  setFreeText: (v: string) => void;
  onChoose: (idx: number) => void;
  onSubmitFree: () => void;
  onContinue: () => void;
  goCatalog: () => void;
}

export default function ScenarioPlayer({
  scenario, step, results, feedback, freeText, setFreeText,
  onChoose, onSubmitFree, onContinue, goCatalog,
}: Props) {
  const steps = scenario.steps || [];
  const curStep = steps[step];
  const isNarr = curStep?.type === 'narration';
  const isDlg = curStep?.type === 'dialogue';
  const isFree = curStep?.type === 'free';
  const answered = !!feedback;
  const isLast = step >= steps.length - 1;
  const continueLabel = isLast ? 'Concludi e vai al report' : 'Continua il dialogo';
  const progressPct = Math.round(((answered ? step + 1 : step) / steps.length) * 100);

  const speakerOf = (speakerName?: string) => {
    const found = scenario.characters.find(c => c.name === speakerName);
    return found || scenario.characters[0] || { name: 'Personaggio', initials: '•', color: '#6c7a75', role: '' };
  };

  // Build transcript
  const transcript: Array<{
    id: string;
    kind: 'note' | 'char' | 'user' | 'feedback';
    text?: string;
    name?: string;
    initials?: string;
    color?: string;
    result?: StepResult;
  }> = [];

  for (let i = 0; i <= step && i < steps.length; i++) {
    const st = steps[i];
    if (st.type === 'narration') {
      transcript.push({ id: 'n' + i, kind: 'note', text: st.text });
    } else {
      const sp = speakerOf(st.speaker);
      transcript.push({ id: 'c' + i, kind: 'char', text: st.prompt, name: sp.name, initials: sp.initials, color: sp.color });
      const r = results.find(x => x.stepIndex === i);
      if (r) {
        transcript.push({ id: 'u' + i, kind: 'user', text: r.type === 'free' ? r.text : r.choiceText });
        transcript.push({ id: 'f' + i, kind: 'feedback', result: r });
      }
    }
  }

  return (
    <div style={{ maxWidth: 980, margin: '0 auto', padding: '30px 48px 60px' }}>
      <button
        onClick={goCatalog}
        style={{ fontSize: 13, color: '#6c7a75', fontWeight: 500, display: 'flex', alignItems: 'center', gap: 6 }}
      >
        ← Torna al catalogo
      </button>

      {/* Scenario header */}
      <div style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 18, padding: '24px 26px', marginTop: 14 }}>
        <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 20 }}>
          <div>
            <div className="font-serif-display" style={{ fontSize: 12, letterSpacing: '.1em', textTransform: 'uppercase', color: '#c06a48', fontWeight: 700 }}>
              Scenario 0{scenario.num} · {scenario.difficulty}
            </div>
            <h1 className="font-serif-display" style={{ fontWeight: 700, fontSize: 25, lineHeight: 1.2, margin: '7px 0 0' }}>
              {scenario.title}
            </h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 }}>
            {scenario.characters.filter(c => c.name !== 'Tu').map(c => (
              <div key={c.name} title={c.role} style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
                <div style={{
                  width: 32, height: 32, borderRadius: '50%', background: '#f4efe8',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 600, color: '#3c4742',
                }}>{c.initials}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 16 }}>
          <div style={{ background: '#faf6f0', borderRadius: 12, padding: '14px 16px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#9aa49f' }}>Contesto</div>
            <p style={{ fontSize: 13.5, color: '#3c4742', lineHeight: 1.6, margin: '7px 0 0' }}>{scenario.context}</p>
          </div>
          <div style={{ background: '#eef5f0', borderRadius: 12, padding: '14px 16px' }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.06em', textTransform: 'uppercase', color: '#2f6b4f' }}>Obiettivo formativo</div>
            <p style={{ fontSize: 13.5, color: '#3c4742', lineHeight: 1.6, margin: '7px 0 0' }}>{scenario.objective}</p>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 18 }}>
          <div style={{ flex: 1, height: 7, background: '#ece5da', borderRadius: 100, overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progressPct}%`, background: '#1f4d46', borderRadius: 100, transition: 'width .4s ease' }} />
          </div>
          <div style={{ fontSize: 12, color: '#7a857f', fontWeight: 500, whiteSpace: 'nowrap' }}>
            Turno {Math.min(step + 1, steps.length)} / {steps.length}
          </div>
        </div>
      </div>

      {/* Transcript */}
      <div style={{ marginTop: 22, display: 'flex', flexDirection: 'column', gap: 16 }}>
        {transcript.map(m => {
          if (m.kind === 'note') {
            return (
              <div key={m.id} style={{ textAlign: 'center', padding: '4px 0' }}>
                <div className="font-serif-display" style={{
                  display: 'inline-block', maxWidth: '80%',
                  background: '#efe8dd', color: '#5a6258',
                  fontStyle: 'italic', fontSize: 14, lineHeight: 1.6,
                  padding: '12px 18px', borderRadius: 13,
                }}>
                  {m.text}
                </div>
              </div>
            );
          }

          if (m.kind === 'char') {
            return (
              <div key={m.id} className="animate-fade-up" style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
                <div style={{
                  width: 34, height: 34, borderRadius: '50%',
                  background: m.color, color: '#fff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12.5, fontWeight: 600, flexShrink: 0,
                }}>{m.initials}</div>
                <div style={{ maxWidth: '74%' }}>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#7a857f', margin: '0 0 4px 3px' }}>{m.name}</div>
                  <div style={{
                    background: '#fff', border: '1px solid #ece3d6',
                    borderRadius: '4px 16px 16px 16px',
                    padding: '13px 16px', fontSize: 14.5, lineHeight: 1.6, color: '#3c4742',
                  }}>
                    {m.text}
                  </div>
                </div>
              </div>
            );
          }

          if (m.kind === 'user') {
            return (
              <div key={m.id} className="animate-fade-up" style={{ display: 'flex', justifyContent: 'flex-end' }}>
                <div style={{
                  maxWidth: '74%', background: '#1f4d46', color: '#fff',
                  borderRadius: '16px 4px 16px 16px',
                  padding: '13px 16px', fontSize: 14.5, lineHeight: 1.6,
                }}>
                  {m.text}
                </div>
              </div>
            );
          }

          if (m.kind === 'feedback' && m.result) {
            const r = m.result;
            const q = QUALITY_MAP[r.quality] || QUALITY_MAP.partial;
            return (
              <div key={m.id} className="animate-fade-up" style={{
                background: q.bg, border: `1px solid ${q.bd}`,
                borderRadius: 13, padding: '14px 16px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.05em', color: q.fg, textTransform: 'uppercase' }}>
                    {q.label}
                  </div>
                  <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.05em', color: q.fg, opacity: .85, textTransform: 'uppercase' }}>
                    {ptsLabel(r)}
                  </div>
                </div>
                {r.feedback && (
                  <div style={{ fontSize: 13.5, color: '#3c4742', lineHeight: 1.6, marginTop: 7 }}>{r.feedback}</div>
                )}
                {r.type === 'free' && r.ai && (
                  <div style={{ marginTop: 8 }}>
                    <div style={{ fontSize: 12.5, color: '#5a6864', fontStyle: 'italic', lineHeight: 1.55 }}>{r.ai.intro}</div>
                    <div style={{ marginTop: 10 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#2f6b4f', letterSpacing: '.04em', textTransform: 'uppercase' }}>Punti di forza</div>
                      {r.ai.strengths.map((p, i) => (
                        <div key={i} style={{ fontSize: 13, color: '#3c4742', lineHeight: 1.55, display: 'flex', gap: 8, marginTop: 5 }}>
                          <span style={{ color: '#2f6b4f' }}>＋</span><span>{p}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 10 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: '#a8623a', letterSpacing: '.04em', textTransform: 'uppercase' }}>Come migliorare</div>
                      {r.ai.improve.map((p, i) => (
                        <div key={i} style={{ fontSize: 13, color: '#3c4742', lineHeight: 1.55, display: 'flex', gap: 8, marginTop: 5 }}>
                          <span style={{ color: '#a8623a' }}>→</span><span>{p}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          }

          return null;
        })}
      </div>

      {/* Input area */}
      <div style={{ marginTop: 22 }}>
        {isDlg && !answered && (
          <div style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 16, padding: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: '#9aa49f' }}>
              La tua risposta
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 13 }}>
              {(curStep.choices || []).map((c, i) => (
                <button
                  key={i}
                  onClick={() => onChoose(i)}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = '#1f4d46';
                    e.currentTarget.style.boxShadow = '0 6px 16px -10px rgba(31,77,70,.6)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = '#e2d9cd';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    background: '#fff', border: '1.5px solid #e2d9cd',
                    borderRadius: 13, padding: '14px 17px',
                    fontSize: 14.5, lineHeight: 1.5, color: '#3c4742',
                    transition: 'border-color .15s, box-shadow .15s',
                  }}
                >
                  {c.text}
                </button>
              ))}
            </div>
          </div>
        )}

        {isFree && !answered && (
          <div style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 16, padding: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: '#9aa49f' }}>
              Risposta libera
            </div>
            <textarea
              value={freeText}
              onChange={e => setFreeText(e.target.value)}
              placeholder={curStep.placeholder || 'Scrivi la tua risposta…'}
              rows={4}
              onFocus={e => { e.target.style.borderColor = '#1f4d46'; }}
              onBlur={e => { e.target.style.borderColor = '#e2d9cd'; }}
              style={{
                width: '100%', marginTop: 12,
                border: '1.5px solid #e2d9cd', borderRadius: 12,
                padding: '14px 16px', fontSize: 14.5, lineHeight: 1.6,
                color: '#3c4742', resize: 'vertical', outline: 'none',
                fontFamily: "'Public Sans', sans-serif",
                transition: 'border-color .15s',
              }}
            />
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 12 }}>
              <div style={{ fontSize: 12, color: '#9aa49f' }}>
                Verrà analizzata dal modello (simulazione): tono, contenuti e parole chiave.
              </div>
              <button
                onClick={onSubmitFree}
                style={{
                  background: '#1f4d46', color: '#fff', fontWeight: 600,
                  fontSize: 14, padding: '11px 22px', borderRadius: 11,
                  opacity: freeText.trim() ? 1 : 0.5,
                }}
              >
                Invia risposta
              </button>
            </div>
          </div>
        )}

        {(isNarr || ((isDlg || isFree) && answered)) && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <button
              onClick={onContinue}
              className="animate-fade-up"
              style={{
                background: '#1f4d46', color: '#fff', fontWeight: 600,
                fontSize: 14, padding: '13px 28px', borderRadius: 11,
              }}
            >
              {continueLabel}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
