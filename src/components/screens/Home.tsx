'use client';

interface Props {
  goCatalog: () => void;
  startDemo: () => void;
}

export default function Home({ goCatalog, startDemo }: Props) {
  return (
    <div style={{ maxWidth: 1060, margin: '0 auto', padding: '54px 56px 80px' }}>

      {/* Hero */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.15fr .85fr', gap: 46, alignItems: 'center' }}>
        <div>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#e7efeb', color: '#1f4d46', fontSize: 12, fontWeight: 600,
            letterSpacing: '.04em', padding: '6px 13px', borderRadius: 100,
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1f4d46' }} />
            Simulatore formativo interattivo
          </div>
          <h1 className="font-serif-display" style={{
            fontWeight: 700, fontSize: 46, lineHeight: 1.08,
            margin: '20px 0 0', letterSpacing: '-.015em',
          }}>
            Allenarsi alle conversazioni che contano davvero.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.62, color: '#52605b', margin: '20px 0 0', maxWidth: '30em' }}>
            Casi realistici su affettività, sessualità, consenso, autonomia e disabilità. Dialoghi simulati, scelte con feedback immediato e una valutazione finale che misura la qualità della tua risposta professionale.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 30 }}>
            <button
              onClick={goCatalog}
              style={{
                background: '#1f4d46', color: '#fff', fontWeight: 600, fontSize: 15,
                padding: '14px 24px', borderRadius: 11, boxShadow: '0 10px 22px -12px rgba(31,77,70,.8)',
              }}
            >
              Esplora gli scenari
            </button>
            <button
              onClick={startDemo}
              style={{
                background: '#fff', color: '#1f4d46', fontWeight: 600, fontSize: 15,
                padding: '14px 22px', borderRadius: 11, border: '1px solid #d9d0c4',
              }}
            >
              Prova la demo gratuita
            </button>
          </div>
          <div style={{ display: 'flex', gap: 26, marginTop: 34 }}>
            <div>
              <div className="font-serif-display" style={{ fontSize: 26, fontWeight: 700, color: '#1f4d46' }}>5</div>
              <div style={{ fontSize: 12.5, color: '#7a857f' }}>scenari iniziali</div>
            </div>
            <div style={{ width: 1, background: '#ddd4c8' }} />
            <div>
              <div className="font-serif-display" style={{ fontSize: 26, fontWeight: 700, color: '#1f4d46' }}>12+</div>
              <div style={{ fontSize: 12.5, color: '#7a857f' }}>termini di glossario</div>
            </div>
            <div style={{ width: 1, background: '#ddd4c8' }} />
            <div>
              <div className="font-serif-display" style={{ fontSize: 26, fontWeight: 700, color: '#1f4d46' }}>6</div>
              <div style={{ fontSize: 12.5, color: '#7a857f' }}>profili professionali</div>
            </div>
          </div>
        </div>

        {/* Preview card */}
        <div style={{
          background: '#fff', border: '1px solid #e7ded2', borderRadius: 20,
          padding: 22, boxShadow: '0 24px 50px -30px rgba(40,30,20,.5)',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: '#9aa49f', fontWeight: 600 }}>
              Anteprima scenario
            </div>
            <div style={{ fontSize: 11, color: '#2f6b4f', background: '#eef5f0', padding: '4px 9px', borderRadius: 100, fontWeight: 600 }}>
              Demo
            </div>
          </div>
          <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 10 }}>
            <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start' }}>
              <div style={{
                width: 30, height: 30, borderRadius: '50%', background: '#b5654a',
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 12, fontWeight: 600, flexShrink: 0,
              }}>M</div>
              <div style={{ background: '#f4efe8', borderRadius: '4px 14px 14px 14px', padding: '11px 13px', fontSize: 13.5, lineHeight: 1.5, color: '#3c4742' }}>
                «Questo discorso della ragazza è una fantasia. Luca non ha bisogno di queste cose.»
              </div>
            </div>
            <div style={{ display: 'flex', gap: 9, alignItems: 'flex-start', flexDirection: 'row-reverse' }}>
              <div style={{
                width: 30, height: 30, borderRadius: '50%', background: '#1f4d46',
                color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11, fontWeight: 600, flexShrink: 0,
              }}>Tu</div>
              <div style={{ background: '#1f4d46', color: '#fff', borderRadius: '14px 4px 14px 14px', padding: '11px 13px', fontSize: 13.5, lineHeight: 1.5 }}>
                «Capisco che la preoccupi. Mi racconta cosa la spaventa di più?»
              </div>
            </div>
            <div style={{ background: '#eef5f0', border: '1px solid #cfe3d6', borderRadius: 12, padding: '11px 13px' }}>
              <div style={{ fontSize: 11, fontWeight: 700, color: '#2f6b4f', letterSpacing: '.03em' }}>RISPOSTA EFFICACE · +20</div>
              <div style={{ fontSize: 12.5, color: '#3c4742', lineHeight: 1.5, marginTop: 4 }}>
                Accogli l&apos;emozione senza giudicarla e apri uno spazio di ascolto.
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div style={{ marginTop: 64 }}>
        <h2 className="font-serif-display" style={{ fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: '#9aa49f', fontWeight: 600, margin: 0 }}>
          Come funziona
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18, marginTop: 18 }}>
          {[
            { n: '01', title: 'Scegli un caso', desc: 'Contesto, personaggi e obiettivo formativo chiari fin dall\'inizio.' },
            { n: '02', title: 'Rispondi nel dialogo', desc: 'Scelte multiple e risposte libere, turno dopo turno.' },
            { n: '03', title: 'Ricevi feedback', desc: 'Riscontro immediato e segnalazione degli errori critici.' },
            { n: '04', title: 'Report e attestato', desc: 'Punteggio, suggerimenti e report scaricabile a fine percorso.' },
          ].map(s => (
            <div key={s.n} style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 15, padding: 20 }}>
              <div className="font-serif-display" style={{ fontSize: 22, color: '#c06a48', fontWeight: 700 }}>{s.n}</div>
              <div style={{ fontWeight: 600, fontSize: 15, marginTop: 8 }}>{s.title}</div>
              <div style={{ fontSize: 13, color: '#6c7a75', lineHeight: 1.55, marginTop: 5 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Topics */}
      <div style={{ marginTop: 34, display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' }}>
        <span style={{ fontSize: 13, color: '#7a857f', marginRight: 4 }}>Temi trattati:</span>
        {['Affettività', 'Sessualità', 'Consenso', 'Autonomia', 'Disabilità'].map(t => (
          <span key={t} style={{
            background: '#fff', border: '1px solid #e2d9cd', color: '#3c4742',
            fontSize: 13, padding: '7px 14px', borderRadius: 100,
          }}>{t}</span>
        ))}
      </div>

      {/* Pricing */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 46 }}>
        <div style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 18, padding: 26 }}>
          <div style={{ fontWeight: 600, fontSize: 13, color: '#7a857f', letterSpacing: '.06em', textTransform: 'uppercase' }}>Demo gratuita</div>
          <div className="font-serif-display" style={{ fontSize: 30, fontWeight: 700, marginTop: 6 }}>€0</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'flex', flexDirection: 'column', gap: 9 }}>
            {['1 scenario completo', 'Feedback e report di base', 'Accesso al glossario'].map(item => (
              <li key={item} style={{ fontSize: 14, color: '#3c4742', display: 'flex', gap: 9 }}>
                <span style={{ color: '#2f6b4f' }}>✓</span> {item}
              </li>
            ))}
          </ul>
          <button
            onClick={startDemo}
            style={{
              marginTop: 20, width: '100%', background: '#eef0ec', color: '#1f4d46',
              fontWeight: 600, fontSize: 14, padding: 12, borderRadius: 11, border: '1px solid #d9d0c4',
            }}
          >
            Inizia la demo
          </button>
        </div>

        <div style={{ background: '#1f4d46', color: '#fff', borderRadius: 18, padding: 26, position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -30, right: -30, width: 130, height: 130, borderRadius: '50%', background: 'rgba(202,160,122,.25)' }} />
          <div style={{ fontWeight: 600, fontSize: 13, color: '#d8b79c', letterSpacing: '.06em', textTransform: 'uppercase' }}>Accesso Premium</div>
          <div className="font-serif-display" style={{ fontSize: 30, fontWeight: 700, marginTop: 6 }}>Tutti i percorsi</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: '16px 0 0', display: 'flex', flexDirection: 'column', gap: 9 }}>
            {['5 scenari completi + nuovi rilasci', 'Valutazione AI delle risposte libere', 'Attestato finale e dashboard docente'].map(item => (
              <li key={item} style={{ fontSize: 14, color: 'rgba(255,255,255,.9)', display: 'flex', gap: 9 }}>
                <span style={{ color: '#d8b79c' }}>✓</span> {item}
              </li>
            ))}
          </ul>
          <button
            onClick={goCatalog}
            style={{
              marginTop: 20, width: '100%', background: '#caa07a', color: '#3a2417',
              fontWeight: 700, fontSize: 14, padding: 12, borderRadius: 11,
            }}
          >
            Attiva Premium
          </button>
        </div>
      </div>

      {/* Architecture summary */}
      <div style={{ marginTop: 64, paddingTop: 34, borderTop: '1px solid #ddd4c8' }}>
        <h2 className="font-serif-display" style={{ fontSize: 13, letterSpacing: '.14em', textTransform: 'uppercase', color: '#9aa49f', fontWeight: 600, margin: 0 }}>
          Progetto &amp; architettura · sintesi
        </h2>
        <p style={{ fontSize: 14, color: '#6c7a75', margin: '8px 0 0', maxWidth: '46em', lineHeight: 1.6 }}>
          Sintesi del lavoro di impianto alla base del prototipo. Stack di riferimento: Next.js · TypeScript · Tailwind · Supabase · OpenAI · export PDF.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 20 }}>

          <div style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 15, padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14.5, color: '#1f4d46' }}>Sitemap</div>
            <ul style={{ listStyle: 'none', padding: 0, margin: '13px 0 0', display: 'flex', flexDirection: 'column', gap: 7 }}>
              {[
                { label: 'Home / landing', indent: false },
                { label: 'Area corsista', indent: false },
                { label: 'Catalogo scenari', indent: false },
                { label: 'Scenario interattivo', indent: true },
                { label: 'Valutazione + report', indent: true },
                { label: 'Dashboard docente', indent: false },
              ].map(item => (
                <li key={item.label} style={{
                  fontSize: 13, color: '#3c4742',
                  paddingLeft: item.indent ? 14 : 0,
                  borderLeft: item.indent ? '2px solid #e2d9cd' : 'none',
                }}>{item.label}</li>
              ))}
              <li style={{ fontSize: 13, color: '#9aa49f' }}>
                Glossario · Attestati <span style={{ fontSize: 11 }}>(roadmap)</span>
              </li>
            </ul>
          </div>

          <div style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 15, padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14.5, color: '#1f4d46' }}>User flow</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 13 }}>
              {[
                { text: 'Catalogo → apre uno scenario', green: false },
                { text: 'Dialogo: scelte / risposta libera', green: false },
                { text: 'Feedback immediato per turno', green: false },
                { text: 'Report + attestato + statistiche docente', green: true },
              ].map((item, i) => (
                <div key={i}>
                  <div style={{ fontSize: 13, color: '#3c4742', background: item.green ? '#eef5f0' : '#f4efe8', padding: '8px 11px', borderRadius: 8 }}>
                    {item.text}
                  </div>
                  {i < 3 && <div style={{ textAlign: 'center', color: '#c06a48', fontSize: 14, lineHeight: '.6' }}>↓</div>}
                </div>
              ))}
            </div>
          </div>

          <div style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 15, padding: 20 }}>
            <div style={{ fontWeight: 700, fontSize: 14.5, color: '#1f4d46' }}>Modello dati</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 13 }}>
              {[
                { entity: 'User', rest: '· ruolo, lingua, piano' },
                { entity: 'Scenario', rest: '· contesto, obiettivo, keyword' },
                { entity: 'Step', rest: '· tipo, prompt, scelte' },
                { entity: 'Attempt', rest: '· risposte, punteggio' },
                { entity: 'GlossaryTerm', rest: '· termine, def.' },
                { entity: 'Certificate', rest: '· esito, data' },
              ].map(item => (
                <div key={item.entity} style={{ fontFamily: 'ui-monospace,monospace', fontSize: 11.5, color: '#3c4742' }}>
                  <span style={{ color: '#c06a48' }}>{item.entity}</span>{item.rest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
