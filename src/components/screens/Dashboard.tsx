'use client';

const courses = [
  { name: 'Affettività e disabilità — base', students: 24, completion: 78, avg: 82, color: '#1f4d46' },
  { name: 'Consenso e autodeterminazione', students: 18, completion: 61, avg: 74, color: '#c06a48' },
  { name: 'Caregiver e famiglie', students: 31, completion: 45, avg: 69, color: '#3a6f8f' },
];

const kpis = [
  { label: 'Corsisti attivi', value: '73', sub: '+12 questa settimana' },
  { label: 'Scenari completati', value: '418', sub: 'ultimi 30 giorni' },
  { label: 'Punteggio medio', value: '76%', sub: '+4% sul mese' },
  { label: 'Errori critici', value: '9%', sub: 'delle sessioni' },
];

const students = [
  { name: 'Marco Bianchi', initials: 'MB', role: 'Educatore', scenario: 'Il genitore iperprotettivo', score: 88, status: 'Completato', statusColor: '#2f6b4f', statusBg: '#eef5f0' },
  { name: 'Giulia Conti', initials: 'GC', role: 'Psicologa', scenario: 'La richiesta esplicita', score: 72, status: 'Completato', statusColor: '#2f6b4f', statusBg: '#eef5f0' },
  { name: 'Ahmed Karimi', initials: 'AK', role: 'Assistente sociale', scenario: 'Cura, controllo e rispetto', score: 0, status: 'In corso', statusColor: '#8a6a1f', statusBg: '#fbf6ea' },
  { name: 'Elena Ferri', initials: 'EF', role: 'Caregiver', scenario: 'Il genitore iperprotettivo', score: 54, status: 'Da rivedere', statusColor: '#b03a2e', statusBg: '#fbecea' },
  { name: 'Davide Lupo', initials: 'DL', role: 'Studente', scenario: "L'équipe in disaccordo", score: 91, status: 'Completato', statusColor: '#2f6b4f', statusBg: '#eef5f0' },
];

const skills = [
  { label: 'Ascolto e accoglienza', val: 84 },
  { label: 'Riconoscimento dei diritti', val: 77 },
  { label: 'Gestione del limite professionale', val: 68 },
  { label: "Sostegno all'autodeterminazione", val: 72 },
];

export default function Dashboard() {
  return (
    <div style={{ maxWidth: 1100, margin: '0 auto', padding: '46px 56px 80px' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24 }}>
        <div>
          <div style={{ fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: '#9aa49f', fontWeight: 600 }}>
            Dashboard docente
          </div>
          <h1 className="font-serif-display" style={{ fontWeight: 700, fontSize: 32, margin: '8px 0 0', letterSpacing: '-.01em' }}>
            Panoramica formativa
          </h1>
        </div>
        <div style={{ display: 'flex', gap: 9 }}>
          <span style={{ background: '#fff', border: '1px solid #e2d9cd', color: '#5a6864', fontSize: 13, fontWeight: 500, padding: '9px 15px', borderRadius: 10 }}>
            Ultimi 30 giorni
          </span>
          <button style={{ background: '#1f4d46', color: '#fff', fontSize: 13, fontWeight: 600, padding: '9px 16px', borderRadius: 10 }}>
            Esporta dati
          </button>
        </div>
      </div>

      {/* KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18, marginTop: 26 }}>
        {kpis.map(k => (
          <div key={k.label} style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 15, padding: 20 }}>
            <div style={{ fontSize: 12.5, color: '#7a857f', fontWeight: 500 }}>{k.label}</div>
            <div className="font-serif-display" style={{ fontSize: 32, fontWeight: 700, color: '#21302d', marginTop: 6, lineHeight: 1 }}>
              {k.value}
            </div>
            <div style={{ fontSize: 12, color: '#2f6b4f', marginTop: 6 }}>{k.sub}</div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 20, marginTop: 20 }}>
        {/* Active courses */}
        <div style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 18, padding: 24 }}>
          <div style={{ fontSize: 14.5, fontWeight: 700 }}>Corsi attivi</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 18 }}>
            {courses.map(c => (
              <div key={c.name}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: 14, fontWeight: 600, color: '#21302d' }}>{c.name}</div>
                  <div style={{ fontSize: 12.5, color: '#7a857f' }}>{c.students} corsisti · media {c.avg}%</div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 11, marginTop: 8 }}>
                  <div style={{ flex: 1, height: 9, background: '#f0eae0', borderRadius: 100, overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${c.completion}%`, background: c.color, borderRadius: 100 }} />
                  </div>
                  <div style={{ fontSize: 12, fontWeight: 600, color: '#5a6864', width: 78, textAlign: 'right' }}>
                    {c.completion}% completato
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 18, padding: 24 }}>
          <div style={{ fontSize: 14.5, fontWeight: 700 }}>Competenze medie</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 15, marginTop: 18 }}>
            {skills.map(s => (
              <div key={s.label}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: 13, color: '#3c4742' }}>{s.label}</div>
                  <div style={{ fontSize: 12.5, fontWeight: 700, color: '#1f4d46' }}>{s.val}%</div>
                </div>
                <div style={{ height: 7, background: '#f0eae0', borderRadius: 100, overflow: 'hidden', marginTop: 6 }}>
                  <div style={{ height: '100%', width: `${s.val}%`, background: '#c06a48', borderRadius: 100 }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Students table */}
      <div style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 18, padding: 24, marginTop: 20 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontSize: 14.5, fontWeight: 700 }}>Attività recente dei corsisti</div>
          <span style={{ fontSize: 12.5, color: '#9aa49f' }}>{students.length} corsisti</span>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: '1.4fr 1fr 1.4fr .7fr .9fr',
          gap: 12, padding: '14px 8px 10px', borderBottom: '1px solid #efe8dd', marginTop: 8,
        }}>
          {['Corsista', 'Ruolo', 'Scenario', 'Punteggio', 'Stato'].map((h, i) => (
            <div key={h} style={{
              fontSize: 11, fontWeight: 700, letterSpacing: '.05em',
              textTransform: 'uppercase', color: '#9aa49f',
              textAlign: i >= 3 ? 'right' : 'left',
            }}>{h}</div>
          ))}
        </div>

        {students.map(st => (
          <div key={st.name} style={{
            display: 'grid', gridTemplateColumns: '1.4fr 1fr 1.4fr .7fr .9fr',
            gap: 12, padding: '13px 8px', borderBottom: '1px solid #f4eee5',
            alignItems: 'center',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div style={{
                width: 32, height: 32, borderRadius: '50%', background: '#e7efeb',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 11.5, fontWeight: 600, color: '#1f4d46', flexShrink: 0,
              }}>{st.initials}</div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: '#21302d' }}>{st.name}</div>
            </div>
            <div style={{ fontSize: 13, color: '#6c7a75' }}>{st.role}</div>
            <div style={{ fontSize: 13, color: '#6c7a75' }}>{st.scenario}</div>
            <div style={{ fontSize: 13.5, fontWeight: 700, color: '#21302d', textAlign: 'right' }}>
              {st.score > 0 ? `${st.score}%` : '—'}
            </div>
            <div style={{ textAlign: 'right' }}>
              <span style={{
                background: st.statusBg, color: st.statusColor,
                fontSize: 11.5, fontWeight: 600, padding: '4px 10px', borderRadius: 100,
              }}>{st.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
