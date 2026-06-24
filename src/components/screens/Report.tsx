'use client';

import type { Scenario, StepResult, GlossaryMap, Quality } from '@/types';

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
  results: StepResult[];
  glossary: GlossaryMap;
  restart: () => void;
  goCatalog: () => void;
}

export default function Report({ scenario, results, glossary, restart, goCatalog }: Props) {
  const total = results.reduce((a, r) => a + r.points, 0);
  const max = results.reduce((a, r) => a + r.max, 0) || 1;
  const pct = Math.round((total / max) * 100);
  const criticalCount = results.filter(r => r.critical).length;

  let level: string, levelColor: string, levelBg: string;
  if (criticalCount > 0 && pct < 60) {
    level = 'Da rivedere'; levelColor = '#b03a2e'; levelBg = '#fbecea';
  } else if (pct >= 85) {
    level = 'Eccellente'; levelColor = '#2f6b4f'; levelBg = '#eef5f0';
  } else if (pct >= 70) {
    level = 'Buono'; levelColor = '#2f6b4f'; levelBg = '#eef5f0';
  } else if (pct >= 55) {
    level = 'Da consolidare'; levelColor = '#8a6a1f'; levelBg = '#fbf6ea';
  } else {
    level = 'Da rivedere'; levelColor = '#b03a2e'; levelBg = '#fbecea';
  }

  const keywords = (scenario.keywords || []).map(k => ({ term: k, def: glossary[k] || '' }));

  const downloadReport = () => {
    const lines: string[] = [];
    lines.push('LOVEGIVER TRAINING LAB — REPORT FORMATIVO');
    lines.push('==========================================');
    lines.push('');
    lines.push(`Scenario ${scenario.num}: ${scenario.title}`);
    lines.push('Corsista: Sara Rossi');
    lines.push(`Data: ${new Date().toLocaleDateString('it-IT')}`);
    lines.push('');
    lines.push(`Obiettivo formativo: ${scenario.objective}`);
    lines.push('');
    lines.push(`PUNTEGGIO: ${total}/${max} (${pct}%) — Esito: ${level}`);
    lines.push(`Errori critici: ${criticalCount}`);
    lines.push('');
    lines.push('SUGGERIMENTI DI MIGLIORAMENTO');
    (scenario.suggestions || []).forEach((s, i) => lines.push(`  ${i + 1}. ${s}`));
    lines.push('');
    lines.push('PAROLE CHIAVE: ' + (scenario.keywords || []).join(', '));
    const blob = new Blob([lines.join('\n')], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `report-lovegiver-scenario-${scenario.num}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  };

  const getCertificate = () => {
    alert("Attestato disponibile con l'accesso Premium. Nel prodotto reale: PDF firmato con esito, data e crediti formativi.");
  };

  const ringColor = `conic-gradient(${levelColor} ${pct * 3.6}deg, #ece5da 0deg)`;

  return (
    <div style={{ maxWidth: 980, margin: '0 auto', padding: '40px 48px 70px' }}>
      <div style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: '#9aa49f', fontWeight: 600 }}>
        Valutazione finale · Scenario 0{scenario.num}
      </div>
      <h1 className="font-serif-display" style={{ fontWeight: 700, fontSize: 30, margin: '8px 0 0', lineHeight: 1.2 }}>
        {scenario.title}
      </h1>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.3fr', gap: 20, marginTop: 24 }}>
        {/* Score ring */}
        <div style={{
          background: '#fff', border: '1px solid #e7ded2', borderRadius: 18, padding: 26,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', textAlign: 'center',
        }}>
          <div style={{
            position: 'relative', width: 148, height: 148, borderRadius: '50%',
            background: ringColor,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{
              width: 116, height: 116, borderRadius: '50%', background: '#fff',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
            }}>
              <div className="font-serif-display" style={{ fontSize: 38, fontWeight: 700, color: '#21302d', lineHeight: 1 }}>
                {pct}%
              </div>
              <div style={{ fontSize: 12, color: '#9aa49f', marginTop: 2 }}>{total} / {max} punti</div>
            </div>
          </div>
          <div style={{ marginTop: 18, fontWeight: 700, fontSize: 14 }}>
            <span style={{ background: levelBg, color: levelColor, padding: '7px 16px', borderRadius: 100 }}>
              {level}
            </span>
          </div>
          <div style={{ fontSize: 12.5, color: '#7a857f', marginTop: 14 }}>
            Errori critici rilevati: <strong style={{ color: '#21302d' }}>{criticalCount}</strong>
          </div>
        </div>

        {/* Turn-by-turn review */}
        <div style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 18, padding: 24 }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: '#9aa49f' }}>
            Andamento turno per turno
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 13, marginTop: 14 }}>
            {results.map((r, i) => {
              const q = QUALITY_MAP[r.quality] || QUALITY_MAP.partial;
              const steps = scenario.steps || [];
              const st = steps[r.stepIndex];
              const feedbackText = r.type === 'free' ? (r.ai ? r.ai.intro : '') : (r.feedback || '');
              return (
                <div key={i} style={{ display: 'flex', gap: 11, alignItems: 'flex-start' }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', flexShrink: 0, marginTop: 5, background: q.fg }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10 }}>
                      <div style={{ fontSize: 11, fontWeight: 700, color: q.fg, letterSpacing: '.04em', textTransform: 'uppercase' }}>
                        Turno {i + 1} · {q.label}
                      </div>
                      <div style={{ fontSize: 11.5, color: '#9aa49f', fontWeight: 600 }}>{ptsLabel(r)}</div>
                    </div>
                    <div style={{ fontSize: 13, color: '#3c4742', lineHeight: 1.5, marginTop: 3 }}>{feedbackText}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Errors & suggestions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 20 }}>
        <div style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 18, padding: 24 }}>
          <div style={{ fontSize: 14.5, fontWeight: 700, color: '#a8623a' }}>Errori critici da evitare</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 13 }}>
            {(scenario.criticalErrorsInfo || []).map((e, i) => (
              <div key={i} style={{ display: 'flex', gap: 9, fontSize: 13.5, color: '#3c4742', lineHeight: 1.55 }}>
                <span style={{ color: '#b03a2e', fontWeight: 700 }}>!</span>
                <span>{e}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 18, padding: 24 }}>
          <div style={{ fontSize: 14.5, fontWeight: 700, color: '#2f6b4f' }}>Suggerimenti di miglioramento</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 9, marginTop: 13 }}>
            {(scenario.suggestions || []).map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: 9, fontSize: 13.5, color: '#3c4742', lineHeight: 1.55 }}>
                <span style={{ color: '#2f6b4f', fontWeight: 700 }}>→</span>
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Glossary keywords */}
      <div style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 18, padding: 24, marginTop: 20 }}>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '.05em', textTransform: 'uppercase', color: '#9aa49f' }}>
          Parole chiave collegate al glossario
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 11, marginTop: 14 }}>
          {keywords.map((k, i) => (
            <div key={k.term} style={{
              display: 'flex', gap: 13, alignItems: 'baseline',
              paddingBottom: 11,
              borderBottom: i < keywords.length - 1 ? '1px solid #f1ebe1' : 'none',
            }}>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: '#1f4d46', minWidth: 200, textTransform: 'capitalize' }}>
                {k.term}
              </div>
              <div style={{ fontSize: 13, color: '#6c7a75', lineHeight: 1.55 }}>{k.def}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Actions */}
      <div style={{ display: 'flex', gap: 12, marginTop: 26, flexWrap: 'wrap' }}>
        <button
          onClick={downloadReport}
          style={{
            background: '#1f4d46', color: '#fff', fontWeight: 600, fontSize: 14.5,
            padding: '14px 24px', borderRadius: 11,
            display: 'flex', alignItems: 'center', gap: 9,
          }}
        >
          <span style={{ fontSize: 16 }}>↓</span> Scarica il report
        </button>
        <button
          onClick={getCertificate}
          style={{
            background: '#caa07a', color: '#3a2417', fontWeight: 700,
            fontSize: 14.5, padding: '14px 24px', borderRadius: 11,
          }}
        >
          Genera attestato
        </button>
        <button
          onClick={restart}
          style={{
            background: '#fff', color: '#1f4d46', fontWeight: 600,
            fontSize: 14.5, padding: '14px 24px', borderRadius: 11,
            border: '1px solid #d9d0c4',
          }}
        >
          Ripeti lo scenario
        </button>
        <button
          onClick={goCatalog}
          style={{
            background: 'transparent', color: '#6c7a75', fontWeight: 600,
            fontSize: 14.5, padding: '14px 18px', borderRadius: 11,
          }}
        >
          Altri scenari
        </button>
      </div>
    </div>
  );
}
