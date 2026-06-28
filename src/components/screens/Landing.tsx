'use client';

interface Props {
  onLogin: () => void;
  onSignup: () => void;
}

export default function Landing({ onLogin, onSignup }: Props) {
  return (
    <div style={{ background: '#f1ece4', minHeight: '100vh', fontFamily: 'inherit' }}>

      {/* Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(241,236,228,.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #ddd4c8',
        padding: '0 48px', height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: 'linear-gradient(150deg,#caa07a,#c06a48)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', border: '2px solid #fff' }} />
          </div>
          <span className="font-serif-display" style={{ fontWeight: 700, fontSize: 16, color: '#1f4d46' }}>LoveGiver Campus</span>
        </div>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <button onClick={onLogin} style={{ fontSize: 14, fontWeight: 600, color: '#3c4742', background: 'none', cursor: 'pointer', padding: '8px 16px' }}>
            Accedi
          </button>
          <button onClick={onSignup} style={{
            fontSize: 14, fontWeight: 600, color: '#fff', background: '#1f4d46',
            padding: '9px 20px', borderRadius: 10, cursor: 'pointer',
            boxShadow: '0 4px 12px -4px rgba(31,77,70,.5)',
          }}>
            Inizia gratis
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 1080, margin: '0 auto', padding: '80px 48px 70px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#e7efeb', color: '#1f4d46', fontSize: 12, fontWeight: 600,
              letterSpacing: '.06em', padding: '6px 14px', borderRadius: 100, marginBottom: 24,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2f6b4f' }} />
              Simulatore formativo interattivo
            </div>
            <h1 className="font-serif-display" style={{
              fontSize: 52, fontWeight: 700, lineHeight: 1.06,
              letterSpacing: '-.02em', margin: 0, color: '#1a2e2a',
            }}>
              La palestra<br />professionale<br />per chi lavora<br />con le persone.
            </h1>
            <p style={{ fontSize: 18, lineHeight: 1.65, color: '#52605b', margin: '24px 0 0', maxWidth: '32em' }}>
              Scenari realistici su affettività, sessualità, consenso e autonomia.
              Non un quiz da superare — un allenamento per rispondere meglio, ogni volta.
            </p>
            <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
              <button onClick={onSignup} style={{
                background: '#1f4d46', color: '#fff', fontWeight: 700, fontSize: 15,
                padding: '15px 28px', borderRadius: 12, cursor: 'pointer',
                boxShadow: '0 10px 24px -10px rgba(31,77,70,.7)',
              }}>
                Prova la demo gratuita
              </button>
              <button onClick={onLogin} style={{
                background: '#fff', color: '#1f4d46', fontWeight: 600, fontSize: 15,
                padding: '15px 24px', borderRadius: 12, border: '1px solid #d9d0c4', cursor: 'pointer',
              }}>
                Ho già un account
              </button>
            </div>
            <p style={{ fontSize: 13, color: '#9aa49f', marginTop: 14 }}>
              Nessuna carta di credito. Il primo scenario è sempre gratuito.
            </p>
          </div>

          {/* Preview */}
          <div style={{
            background: '#fff', border: '1px solid #e7ded2', borderRadius: 22,
            padding: 24, boxShadow: '0 32px 64px -32px rgba(40,30,20,.4)',
          }}>
            <div style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: '#9aa49f', fontWeight: 600, marginBottom: 16 }}>
              Anteprima scenario
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div style={{ display: 'flex', gap: 9 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#b5654a', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>M</div>
                <div style={{ background: '#f4efe8', borderRadius: '4px 14px 14px 14px', padding: '11px 14px', fontSize: 13.5, lineHeight: 1.5, color: '#3c4742', maxWidth: '80%' }}>
                  «Questo discorso della ragazza è una fantasia. Mio figlio non ha bisogno di queste cose.»
                </div>
              </div>
              <div style={{ display: 'flex', gap: 9, flexDirection: 'row-reverse' }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: '#1f4d46', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 700, flexShrink: 0 }}>Tu</div>
                <div style={{ background: '#1f4d46', color: '#fff', borderRadius: '14px 4px 14px 14px', padding: '11px 14px', fontSize: 13.5, lineHeight: 1.5, maxWidth: '80%' }}>
                  «Capisco che la preoccupi. Può raccontarmi cosa la spaventa di più?»
                </div>
              </div>
              <div style={{ background: '#eef5f0', border: '1px solid #cfe3d6', borderRadius: 12, padding: '11px 14px', marginTop: 4 }}>
                <div style={{ fontSize: 11, fontWeight: 700, color: '#2f6b4f', letterSpacing: '.04em' }}>RISPOSTA EFFICACE · +20 punti</div>
                <div style={{ fontSize: 12.5, color: '#3c4742', lineHeight: 1.5, marginTop: 4 }}>Accogli l'emozione senza giudicarla e apri uno spazio di ascolto autentico.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Non è un quiz */}
      <section style={{ background: '#1f4d46', color: '#fff', padding: '72px 48px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: '#d8b79c', fontWeight: 600, marginBottom: 16 }}>
                Perché è diverso
              </div>
              <h2 className="font-serif-display" style={{ fontSize: 38, fontWeight: 700, lineHeight: 1.1, margin: 0 }}>
                Non è un quiz.<br />È una palestra.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,.75)', margin: '20px 0 0' }}>
                I quiz testano se ricordi una definizione. LoveGiver Campus ti mette davanti a una persona reale — un genitore in difficoltà, un ragazzo che non trova le parole, un'équipe divisa — e ti chiede come rispondi adesso.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.7, color: 'rgba(255,255,255,.75)', margin: '16px 0 0' }}>
                Ogni scelta ha conseguenze. Ogni errore ha un nome. Il feedback non è un voto: è una spiegazione di cosa ha funzionato e perché.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { icon: '◎', title: 'Dialogo simulato', desc: 'Turno per turno, come in una conversazione vera. Non tick box.' },
                { icon: '◈', title: 'Feedback immediato', desc: 'Dopo ogni risposta sai cosa hai fatto, cosa avresti potuto fare meglio.' },
                { icon: '◇', title: 'Errori critici segnalati', desc: 'Alcune risposte non sono solo "meno buone" — vanno riconosciute come tali.' },
                { icon: '◉', title: 'Report finale', desc: 'Punteggio, riflessioni, glossario dei termini chiave usati nello scenario.' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
                  <div style={{ fontSize: 20, color: '#caa07a', width: 28, flexShrink: 0, marginTop: 2 }}>{item.icon}</div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: 15, color: '#fff' }}>{item.title}</div>
                    <div style={{ fontSize: 13.5, color: 'rgba(255,255,255,.6)', marginTop: 3, lineHeight: 1.5 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* A chi serve */}
      <section style={{ maxWidth: 1080, margin: '0 auto', padding: '72px 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: '#9aa49f', fontWeight: 600, marginBottom: 12 }}>
            A chi serve
          </div>
          <h2 className="font-serif-display" style={{ fontSize: 36, fontWeight: 700, margin: 0 }}>
            Per chi lavora con le persone ogni giorno.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            {
              title: 'Educatori e insegnanti',
              desc: 'Affrontare le domande degli studenti su sessualità, identità e relazioni con competenza e senza imbarazzo.',
              tags: ['Educazione affettiva', 'Scuola secondaria', 'Formazione docenti'],
            },
            {
              title: 'Operatori socio-sanitari',
              desc: 'Rispondere alle persone con disabilità e alle loro famiglie con rispetto per l\'autonomia e i diritti affettivi.',
              tags: ['Disabilità', 'Consenso', 'Autodeterminazione'],
            },
            {
              title: 'Psicologi e counselor',
              desc: 'Affinare il linguaggio nelle situazioni più delicate: la prima volta, il rifiuto, la violenza, l\'identità di genere.',
              tags: ['Psicologia clinica', 'Counseling', 'Relazione d\'aiuto'],
            },
            {
              title: 'Caregiver e famiglie',
              desc: 'Trovare le parole giuste quando un figlio fa domande difficili, o quando un familiare con disabilità esprime desideri affettivi.',
              tags: ['Genitorialità', 'Cura familiare', 'Comunicazione'],
            },
            {
              title: 'Formatori e supervisori',
              desc: 'Integrare scenari simulati nei percorsi di formazione professionale continua per équipe e gruppi.',
              tags: ['Formazione adulti', 'Supervisione', 'Équipe'],
            },
            {
              title: 'Professionisti in aggiornamento',
              desc: 'Mantenere le competenze relazionali aggiornate, con percorsi brevi completabili in autonomia e a proprio ritmo.',
              tags: ['ECM', 'Aggiornamento', 'Formazione continua'],
            },
          ].map(card => (
            <div key={card.title} style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 18, padding: '24px 22px' }}>
              <div style={{ fontWeight: 700, fontSize: 15.5, color: '#1a2e2a', marginBottom: 10 }}>{card.title}</div>
              <p style={{ fontSize: 13.5, color: '#52605b', lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 16 }}>
                {card.tags.map(tag => (
                  <span key={tag} style={{ fontSize: 11.5, color: '#2f6b4f', background: '#eef5f0', padding: '4px 10px', borderRadius: 100, fontWeight: 500 }}>{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Come entrare */}
      <section style={{ background: '#fff', borderTop: '1px solid #e7ded2', borderBottom: '1px solid #e7ded2', padding: '72px 48px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: '#9aa49f', fontWeight: 600, marginBottom: 12 }}>
              Come entrare
            </div>
            <h2 className="font-serif-display" style={{ fontSize: 36, fontWeight: 700, margin: 0 }}>
              Tre modi per iniziare.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>

            {/* Demo */}
            <div style={{ border: '1px solid #e7ded2', borderRadius: 20, padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>◎</div>
              <div style={{ fontWeight: 700, fontSize: 18, color: '#1a2e2a', marginBottom: 10 }}>Demo gratuita</div>
              <p style={{ fontSize: 14, color: '#52605b', lineHeight: 1.65, margin: 0, flex: 1 }}>
                Accedi subito a uno scenario completo senza registrarti. Dialogo, feedback, report finale e glossario inclusi. Nessuna carta di credito.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['1 scenario completo', 'Feedback immediato', 'Report scaricabile'].map(item => (
                  <li key={item} style={{ fontSize: 13.5, color: '#3c4742', display: 'flex', gap: 8 }}>
                    <span style={{ color: '#2f6b4f', fontWeight: 700 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <button onClick={onSignup} style={{
                marginTop: 28, background: '#1f4d46', color: '#fff', fontWeight: 700,
                fontSize: 14, padding: '13px', borderRadius: 11, cursor: 'pointer',
                boxShadow: '0 6px 16px -6px rgba(31,77,70,.6)',
              }}>
                Inizia la demo →
              </button>
            </div>

            {/* Docente */}
            <div style={{ border: '1px solid #e7ded2', borderRadius: 20, padding: '32px 28px', display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontSize: 28, marginBottom: 16 }}>◫</div>
              <div style={{ fontWeight: 700, fontSize: 18, color: '#1a2e2a', marginBottom: 10 }}>Accesso docente</div>
              <p style={{ fontSize: 14, color: '#52605b', lineHeight: 1.65, margin: 0, flex: 1 }}>
                Per formatori, supervisori e coordinatori che vogliono esplorare la piattaforma prima di proporla a un gruppo. Accesso completo a tutti gli scenari disponibili.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Tutti gli scenari sbloccati', 'Vista dei progressi del gruppo', 'Materiali di supporto'].map(item => (
                  <li key={item} style={{ fontSize: 13.5, color: '#3c4742', display: 'flex', gap: 8 }}>
                    <span style={{ color: '#2f6b4f', fontWeight: 700 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <button onClick={onSignup} style={{
                marginTop: 28, background: '#fff', color: '#1f4d46', fontWeight: 700,
                fontSize: 14, padding: '13px', borderRadius: 11, cursor: 'pointer',
                border: '1.5px solid #1f4d46',
              }}>
                Richiedi accesso docente →
              </button>
            </div>

            {/* Enti */}
            <div style={{ background: '#1f4d46', borderRadius: 20, padding: '32px 28px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -40, right: -40, width: 160, height: 160, borderRadius: '50%', background: 'rgba(202,160,122,.2)' }} />
              <div style={{ fontSize: 28, marginBottom: 16, color: '#caa07a' }}>◈</div>
              <div style={{ fontWeight: 700, fontSize: 18, color: '#fff', marginBottom: 10 }}>Percorso per enti e corsi</div>
              <p style={{ fontSize: 14, color: 'rgba(255,255,255,.75)', lineHeight: 1.65, margin: 0, flex: 1 }}>
                Per scuole, cooperative, ASL e enti di formazione che vogliono integrare LoveGiver Campus in un percorso strutturato per le proprie équipe. Dashboard per corsi, attestati, statistiche aggregate.
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0 0', display: 'flex', flexDirection: 'column', gap: 8 }}>
                {['Gestione corsisti e gruppi', 'Attestati personalizzati', 'Report per équipe', 'Integrazione con calendari formativi'].map(item => (
                  <li key={item} style={{ fontSize: 13.5, color: 'rgba(255,255,255,.85)', display: 'flex', gap: 8 }}>
                    <span style={{ color: '#caa07a', fontWeight: 700 }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              <button style={{
                marginTop: 28, background: '#caa07a', color: '#3a2417', fontWeight: 700,
                fontSize: 14, padding: '13px', borderRadius: 11, cursor: 'pointer',
              }}>
                Contattaci per un preventivo →
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section style={{ maxWidth: 1080, margin: '0 auto', padding: '72px 48px', textAlign: 'center' }}>
        <h2 className="font-serif-display" style={{ fontSize: 40, fontWeight: 700, margin: 0, color: '#1a2e2a' }}>
          Inizia oggi. È gratuito.
        </h2>
        <p style={{ fontSize: 17, color: '#52605b', margin: '16px auto 0', maxWidth: '36em', lineHeight: 1.65 }}>
          Il primo scenario è sempre accessibile senza registrazione. Scopri come ti alleni davvero — non come rispondi a un test.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 36 }}>
          <button onClick={onSignup} style={{
            background: '#1f4d46', color: '#fff', fontWeight: 700, fontSize: 16,
            padding: '16px 32px', borderRadius: 13, cursor: 'pointer',
            boxShadow: '0 12px 28px -10px rgba(31,77,70,.7)',
          }}>
            Crea il tuo account
          </button>
          <button onClick={onLogin} style={{
            background: '#fff', color: '#1f4d46', fontWeight: 600, fontSize: 16,
            padding: '16px 28px', borderRadius: 13, border: '1px solid #d9d0c4', cursor: 'pointer',
          }}>
            Accedi
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #ddd4c8', padding: '28px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(150deg,#caa07a,#c06a48)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', border: '1.5px solid #fff' }} />
          </div>
          <span className="font-serif-display" style={{ fontWeight: 700, fontSize: 14, color: '#3c4742' }}>LoveGiver Campus</span>
        </div>
        <span style={{ fontSize: 13, color: '#9aa49f' }}>© {new Date().getFullYear()} LoveGiver · campus.lovegiver.it</span>
      </footer>

    </div>
  );
}
