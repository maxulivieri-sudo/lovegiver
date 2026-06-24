'use client';

import type { Scenario } from '@/types';

interface Props {
  scenarios: Scenario[];
  startScenario: (id: string) => void;
}

export default function Catalog({ scenarios, startScenario }: Props) {
  return (
    <div style={{ maxWidth: 1060, margin: '0 auto', padding: '46px 56px 80px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: '#9aa49f', fontWeight: 600 }}>
            Catalogo scenari
          </div>
          <h1 className="font-serif-display" style={{ fontWeight: 700, fontSize: 34, margin: '8px 0 0', letterSpacing: '-.01em' }}>
            Scegli un caso da affrontare
          </h1>
          <p style={{ fontSize: 15, color: '#6c7a75', margin: '10px 0 0', maxWidth: '42em', lineHeight: 1.6 }}>
            Ogni scenario simula una situazione reale con contesto, personaggi e un obiettivo formativo preciso. Nella demo è giocabile lo Scenario 01; gli altri sono in anteprima.
          </p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 30 }}>
        {scenarios.map(s => {
          const avail = s.status === 'available';
          const numLabel = `Scenario ${s.num < 10 ? '0' + s.num : s.num}`;
          const nonPlayerChars = (s.characters || []).filter(c => c.name !== 'Tu');

          return (
            <div
              key={s.id}
              style={{
                background: '#fff', border: '1px solid #e7ded2', borderRadius: 18,
                padding: 24, display: 'flex', flexDirection: 'column',
                opacity: avail ? 1 : 0.92,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div className="font-serif-display" style={{ fontSize: 13, letterSpacing: '.1em', textTransform: 'uppercase', color: '#c06a48', fontWeight: 700 }}>
                  {numLabel}
                </div>
                <span style={{
                  background: avail ? '#eef5f0' : '#f3ece2',
                  color: avail ? '#2f6b4f' : '#9a7a52',
                  fontSize: 11.5, fontWeight: 600, padding: '5px 11px', borderRadius: 100,
                }}>
                  {avail ? 'Demo gratuita' : 'Premium'}
                </span>
              </div>

              <div className="font-serif-display" style={{ fontSize: 21, fontWeight: 700, lineHeight: 1.2, marginTop: 12, color: '#21302d' }}>
                {s.title}
              </div>
              <p style={{ fontSize: 13.5, color: '#6c7a75', lineHeight: 1.6, margin: '10px 0 0' }}>{s.context}</p>

              <div style={{
                display: 'flex', alignItems: 'center', gap: 14, marginTop: 16,
                padding: '12px 0', borderTop: '1px solid #efe8dd', borderBottom: '1px solid #efe8dd',
              }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  {nonPlayerChars.map((c, i) => (
                    <div
                      key={c.name}
                      title={c.role}
                      style={{
                        width: 28, height: 28, borderRadius: '50%',
                        background: '#e7efeb', border: '1.5px solid #fff',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: 11, fontWeight: 600, color: '#1f4d46',
                        marginLeft: i > 0 ? -6 : 0,
                      }}
                    >
                      {c.initials}
                    </div>
                  ))}
                </div>
                <div style={{ fontSize: 12, color: '#7a857f' }}>{s.difficulty} · {s.duration}</div>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 14 }}>
                {(s.keywords || []).map(k => (
                  <span key={k} style={{
                    fontSize: 11.5, color: '#5a6864', background: '#f4efe8',
                    padding: '4px 10px', borderRadius: 7,
                  }}>{k}</span>
                ))}
              </div>

              <button
                onClick={() => startScenario(s.id)}
                style={{
                  marginTop: 18, width: '100%', fontWeight: 600, fontSize: 14,
                  padding: 12, borderRadius: 11,
                  background: avail ? '#1f4d46' : '#fff',
                  color: avail ? '#fff' : '#9a7a52',
                  border: avail ? 'none' : '1px solid #e2d9cd',
                }}
              >
                {avail ? 'Avvia scenario' : 'Sblocca con Premium'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
