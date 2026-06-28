'use client';

import Link from 'next/link';

export default function EntiPage() {
  const email = 'info@lovegiver.it';

  return (
    <div style={{ background: '#f1ece4', minHeight: '100vh' }}>

      {/* Nav */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 50,
        background: 'rgba(241,236,228,.92)', backdropFilter: 'blur(12px)',
        borderBottom: '1px solid #ddd4c8',
        padding: '0 48px', height: 60,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <div style={{
            width: 30, height: 30, borderRadius: 8,
            background: 'linear-gradient(150deg,#caa07a,#c06a48)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <div style={{ width: 10, height: 10, borderRadius: '50%', border: '2px solid #fff' }} />
          </div>
          <span style={{ fontWeight: 700, fontSize: 16, color: '#1f4d46', fontFamily: 'Georgia, serif' }}>LoveGiver Campus</span>
        </Link>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <Link href="/" style={{ fontSize: 14, fontWeight: 500, color: '#52605b', textDecoration: 'none', padding: '8px 16px' }}>
            ← Torna alla home
          </Link>
          <a href={`mailto:${email}`} style={{
            fontSize: 14, fontWeight: 600, color: '#fff', background: '#1f4d46',
            padding: '9px 20px', borderRadius: 10, textDecoration: 'none',
            boxShadow: '0 4px 12px -4px rgba(31,77,70,.5)',
          }}>
            Scrivici
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 1080, margin: '0 auto', padding: '80px 48px 64px' }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 8,
          background: '#e7efeb', color: '#1f4d46', fontSize: 12, fontWeight: 600,
          letterSpacing: '.06em', padding: '6px 14px', borderRadius: 100, marginBottom: 24,
        }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#2f6b4f' }} />
          Per enti e organizzazioni
        </div>
        <h1 style={{
          fontFamily: 'Georgia, serif', fontSize: 52, fontWeight: 700, lineHeight: 1.06,
          letterSpacing: '-.02em', margin: '0 0 24px', color: '#1a2e2a', maxWidth: '14em',
        }}>
          Formazione professionale su affettività e relazione d'aiuto — per tutta la tua équipe.
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.7, color: '#52605b', maxWidth: '42em', margin: 0 }}>
          LoveGiver Campus offre due modi per supportare scuole, cooperative, servizi, università e enti formativi: la piattaforma in autonomia per i tuoi professionisti, e percorsi di formazione in presenza con i nostri docenti.
        </p>
      </section>

      {/* Due offerte */}
      <section style={{ background: '#fff', borderTop: '1px solid #e7ded2', borderBottom: '1px solid #e7ded2', padding: '72px 48px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: '#9aa49f', fontWeight: 600, marginBottom: 12 }}>
              Come possiamo lavorare insieme
            </div>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 34, fontWeight: 700, margin: 0 }}>
              Due percorsi, uno scopo.
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28 }}>

            {/* Piattaforma */}
            <div style={{ border: '2px solid #1f4d46', borderRadius: 22, padding: '36px 32px' }}>
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: '#e7efeb', color: '#1f4d46', fontSize: 11, fontWeight: 700,
                letterSpacing: '.06em', padding: '5px 12px', borderRadius: 100, marginBottom: 20,
                textTransform: 'uppercase',
              }}>
                Piattaforma
              </div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 26, fontWeight: 700, margin: '0 0 14px', color: '#1a2e2a' }}>
                LoveGiver Campus per la tua organizzazione
              </h3>
              <p style={{ fontSize: 15, color: '#52605b', lineHeight: 1.7, margin: '0 0 28px' }}>
                Porta la piattaforma dentro il tuo ente. I tuoi professionisti si allenano in autonomia, al proprio ritmo, su scenari costruiti appositamente per chi lavora con le persone.
                Tu hai accesso alla dashboard: vedi chi ha completato cosa, i punteggi medi, gli errori ricorrenti.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {[
                  { title: 'Accesso per l\'intera équipe', desc: 'Licenze multiple con un unico punto di gestione.' },
                  { title: 'Dashboard per il coordinatore', desc: 'Progressi, punteggi e completamenti in tempo reale.' },
                  { title: 'Attestati nominativi', desc: 'Ogni partecipante riceve un attestato al completamento del percorso.' },
                  { title: 'Scenari personalizzabili', desc: 'Per organizzazioni con esigenze specifiche, possiamo costruire scenari su misura.' },
                  { title: 'Nuovi scenari inclusi', desc: 'Il catalogo cresce: ogni nuovo rilascio è disponibile senza costi aggiuntivi.' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{ color: '#2f6b4f', fontWeight: 700, fontSize: 16, marginTop: 1, flexShrink: 0 }}>✓</span>
                    <div>
                      <div style={{ fontSize: 14.5, fontWeight: 600, color: '#1a2e2a' }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: '#7a857f', marginTop: 2 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href={`mailto:${email}?subject=Richiesta accesso piattaforma per enti&body=Buongiorno,%0D%0A%0D%0ASono interessato/a alla piattaforma LoveGiver Campus per la mia organizzazione.%0D%0A%0D%0ANome ente:%0D%0ATipo di organizzazione:%0D%0ANumero di professionisti:%0D%0A%0D%0AIn attesa di un riscontro, saluto cordialmente.`} style={{
                display: 'block', textAlign: 'center', background: '#1f4d46', color: '#fff',
                fontWeight: 700, fontSize: 15, padding: '14px', borderRadius: 12,
                textDecoration: 'none', boxShadow: '0 8px 20px -8px rgba(31,77,70,.6)',
              }}>
                Richiedi accesso per il tuo ente →
              </a>
            </div>

            {/* Formazione in presenza */}
            <div style={{ background: '#1f4d46', borderRadius: 22, padding: '36px 32px', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: -50, right: -50, width: 200, height: 200, borderRadius: '50%', background: 'rgba(202,160,122,.15)' }} />
              <div style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                background: 'rgba(202,160,122,.2)', color: '#caa07a', fontSize: 11, fontWeight: 700,
                letterSpacing: '.06em', padding: '5px 12px', borderRadius: 100, marginBottom: 20,
                textTransform: 'uppercase',
              }}>
                Formazione in presenza
              </div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: 26, fontWeight: 700, margin: '0 0 14px', color: '#fff' }}>
                Un percorso formativo con i nostri docenti
              </h3>
              <p style={{ fontSize: 15, color: 'rgba(255,255,255,.75)', lineHeight: 1.7, margin: '0 0 28px' }}>
                Per chi vuole andare oltre la piattaforma. I docenti LoveGiver vengono presso la tua sede — o organizzano incontri online — per condurre workshop, simulazioni guidate e sessioni di supervisione con la tua équipe.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 32 }}>
                {[
                  { title: 'Workshop tematici', desc: 'Da 3 a 8 ore su affettività, consenso, disabilità e autonomia.' },
                  { title: 'Simulazioni guidate in gruppo', desc: 'I docenti conducono gli scenari dal vivo, con discussione e supervisione.' },
                  { title: 'Percorsi su misura', desc: 'Il contenuto viene adattato al contesto specifico del tuo ente.' },
                  { title: 'In presenza o online', desc: 'Flessibilità totale di formato e calendario.' },
                  { title: 'Attestati di partecipazione', desc: 'Documentazione per tutti i partecipanti.' },
                ].map(item => (
                  <div key={item.title} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <span style={{ color: '#caa07a', fontWeight: 700, fontSize: 16, marginTop: 1, flexShrink: 0 }}>✓</span>
                    <div>
                      <div style={{ fontSize: 14.5, fontWeight: 600, color: '#fff' }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,.55)', marginTop: 2 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a href={`mailto:${email}?subject=Richiesta formazione in presenza&body=Buongiorno,%0D%0A%0D%0ASono interessato/a a un percorso di formazione in presenza con i docenti LoveGiver.%0D%0A%0D%0ANome ente:%0D%0ATipo di organizzazione:%0D%0ANumero di partecipanti previsti:%0D%0APeriodo indicativo:%0D%0A%0D%0AIn attesa di un riscontro, saluto cordialmente.`} style={{
                display: 'block', textAlign: 'center', background: '#caa07a', color: '#3a2417',
                fontWeight: 700, fontSize: 15, padding: '14px', borderRadius: 12,
                textDecoration: 'none',
              }}>
                Richiedi un incontro conoscitivo →
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* A chi si rivolge */}
      <section style={{ maxWidth: 1080, margin: '0 auto', padding: '72px 48px' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: '#9aa49f', fontWeight: 600, marginBottom: 12 }}>
            Chi ci sceglie
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 34, fontWeight: 700, margin: 0 }}>
            Pensato per chi forma i professionisti.
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
          {[
            { icon: '◎', title: 'Scuole e istituti', desc: 'Formazione continua per docenti su educazione affettiva e sessuale, con scenari adatti ai diversi ordini scolastici.' },
            { icon: '◈', title: 'Cooperative e servizi sociali', desc: 'Aggiornamento professionale per operatori che lavorano con persone con disabilità, anziani o in contesti di vulnerabilità.' },
            { icon: '◇', title: 'ASL e consultori', desc: 'Strumenti per équipe multidisciplinari che affrontano tematiche di salute sessuale, consenso e autonomia.' },
            { icon: '◉', title: 'Università e accademie', desc: 'Integrazione nei corsi di laurea in scienze dell\'educazione, psicologia, assistenza sociale e professioni sanitarie.' },
            { icon: '◫', title: 'Enti di formazione', desc: 'Per chi eroga corsi ECM o percorsi di aggiornamento professionale e cerca contenuti strutturati e verificati.' },
            { icon: '◑', title: 'Associazioni e ONG', desc: 'Per realtà del terzo settore che lavorano su diritti, inclusione e salute sessuale e riproduttiva.' },
          ].map(card => (
            <div key={card.title} style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 16, padding: '24px 22px' }}>
              <div style={{ fontSize: 22, color: '#c06a48', marginBottom: 12 }}>{card.icon}</div>
              <div style={{ fontWeight: 700, fontSize: 15, color: '#1a2e2a', marginBottom: 8 }}>{card.title}</div>
              <p style={{ fontSize: 13.5, color: '#52605b', lineHeight: 1.6, margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Come funziona il percorso */}
      <section style={{ background: '#fff', borderTop: '1px solid #e7ded2', borderBottom: '1px solid #e7ded2', padding: '72px 48px' }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 64, alignItems: 'center' }}>
            <div>
              <div style={{ fontSize: 12, letterSpacing: '.12em', textTransform: 'uppercase', color: '#9aa49f', fontWeight: 600, marginBottom: 16 }}>
                Il percorso tipo
              </div>
              <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 32, fontWeight: 700, margin: '0 0 20px', color: '#1a2e2a' }}>
                Come si integra in un percorso formativo strutturato.
              </h2>
              <p style={{ fontSize: 15, color: '#52605b', lineHeight: 1.7, margin: 0 }}>
                LoveGiver Campus non è un corso da fare e dimenticare. È uno strumento che si affianca alla formazione esistente, la arricchisce con pratica simulata e lascia traccia misurabile dei progressi.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {[
                { n: '01', title: 'Accesso e orientamento', desc: 'Il coordinatore configura i gruppi, assegna i percorsi tematici e imposta la sequenza degli scenari.' },
                { n: '02', title: 'Allenamento autonomo', desc: 'I professionisti completano gli scenari in autonomia, con feedback immediato e report individuale.' },
                { n: '03', title: 'Sessione in presenza (opzionale)', desc: 'Un docente LoveGiver conduce una sessione di supervisione sui temi emersi dagli errori ricorrenti.' },
                { n: '04', title: 'Verifica e attestazione', desc: 'Il coordinatore scarica i report aggregati. Ogni partecipante riceve il proprio attestato nominativo.' },
              ].map((step, i) => (
                <div key={step.n} style={{ display: 'flex', gap: 20, paddingBottom: i < 3 ? 24 : 0 }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%', background: '#1f4d46',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontFamily: 'Georgia, serif', fontSize: 13, fontWeight: 700, color: '#fff', flexShrink: 0,
                    }}>{step.n}</div>
                    {i < 3 && <div style={{ width: 2, flex: 1, background: '#e7ded2', marginTop: 8 }} />}
                  </div>
                  <div style={{ paddingBottom: i < 3 ? 8 : 0 }}>
                    <div style={{ fontWeight: 700, fontSize: 15, color: '#1a2e2a', marginBottom: 4 }}>{step.title}</div>
                    <p style={{ fontSize: 13.5, color: '#52605b', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA finale */}
      <section style={{ maxWidth: 1080, margin: '0 auto', padding: '72px 48px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 38, fontWeight: 700, margin: '0 0 16px', color: '#1a2e2a' }}>
          Parliamone.
        </h2>
        <p style={{ fontSize: 17, color: '#52605b', margin: '0 auto 36px', maxWidth: '38em', lineHeight: 1.65 }}>
          Ogni organizzazione ha esigenze diverse. Scrivici e troviamo insieme la soluzione più adatta — che si tratti della piattaforma, della formazione in presenza, o di entrambe.
        </p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href={`mailto:${email}?subject=Informazioni per enti`} style={{
            background: '#1f4d46', color: '#fff', fontWeight: 700, fontSize: 16,
            padding: '16px 32px', borderRadius: 13, textDecoration: 'none',
            boxShadow: '0 12px 28px -10px rgba(31,77,70,.6)',
          }}>
            Scrivici a {email}
          </a>
          <Link href="/" style={{
            background: '#fff', color: '#1f4d46', fontWeight: 600, fontSize: 16,
            padding: '16px 28px', borderRadius: 13, border: '1px solid #d9d0c4',
            textDecoration: 'none',
          }}>
            Torna alla home
          </Link>
        </div>
        <p style={{ fontSize: 13, color: '#9aa49f', marginTop: 18 }}>
          Rispondiamo entro 24 ore nei giorni lavorativi.
        </p>
      </section>

      {/* Footer */}
      <footer style={{ borderTop: '1px solid #ddd4c8', padding: '28px 48px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 22, height: 22, borderRadius: 6, background: 'linear-gradient(150deg,#caa07a,#c06a48)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 7, height: 7, borderRadius: '50%', border: '1.5px solid #fff' }} />
          </div>
          <span style={{ fontWeight: 700, fontSize: 14, color: '#3c4742', fontFamily: 'Georgia, serif' }}>LoveGiver Campus</span>
        </div>
        <span style={{ fontSize: 13, color: '#9aa49f' }}>© {new Date().getFullYear()} LoveGiver · campus.lovegiver.it</span>
      </footer>

    </div>
  );
}
