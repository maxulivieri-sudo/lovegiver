'use client';

import { useEffect, useState } from 'react';
import type { User } from '@supabase/supabase-js';
import { supabase, type Attempt } from '@/lib/supabase';

interface Props {
  user: User;
}

export default function Dashboard({ user }: Props) {
  const [attempts, setAttempts] = useState<Attempt[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase
      .from('attempts')
      .select('*')
      .eq('user_id', user.id)
      .order('completed_at', { ascending: false })
      .then(({ data }) => {
        setAttempts(data ?? []);
        setLoading(false);
      });
  }, [user.id]);

  const totalScore = attempts.reduce((s, a) => s + a.score, 0);
  const totalMax = attempts.reduce((s, a) => s + a.max_score, 0);
  const avgPct = totalMax > 0 ? Math.round((totalScore / totalMax) * 100) : 0;

  return (
    <div style={{ maxWidth: 860, margin: '0 auto', padding: '54px 56px 80px' }}>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 8,
        background: '#e7efeb', color: '#1f4d46', fontSize: 12, fontWeight: 600,
        letterSpacing: '.04em', padding: '6px 13px', borderRadius: 100,
      }}>
        <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#1f4d46' }} />
        I miei progressi
      </div>

      <h1 className="font-serif-display" style={{ fontSize: 36, fontWeight: 700, margin: '16px 0 0', letterSpacing: '-.015em' }}>
        Ciao{user.user_metadata?.full_name ? `, ${(user.user_metadata.full_name as string).split(' ')[0]}` : ''}.
      </h1>
      <p style={{ fontSize: 16, color: '#52605b', margin: '8px 0 36px' }}>
        Ecco il tuo percorso formativo su LoveGiver Campus.
      </p>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 36 }}>
        {[
          { label: 'Scenari completati', value: attempts.length },
          { label: 'Punteggio medio', value: `${avgPct}%` },
          { label: 'Punti totali', value: totalScore },
        ].map(stat => (
          <div key={stat.label} style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 16, padding: '22px 24px' }}>
            <div className="font-serif-display" style={{ fontSize: 32, fontWeight: 700, color: '#1f4d46' }}>{stat.value}</div>
            <div style={{ fontSize: 13, color: '#7a857f', marginTop: 4 }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Attempts list */}
      <h2 style={{ fontSize: 15, fontWeight: 700, color: '#3c4742', margin: '0 0 14px' }}>Scenari completati</h2>

      {loading ? (
        <div style={{ color: '#7a857f', fontSize: 14 }}>Caricamento…</div>
      ) : attempts.length === 0 ? (
        <div style={{ background: '#fff', border: '1px solid #e7ded2', borderRadius: 16, padding: '32px 24px', textAlign: 'center' }}>
          <div style={{ fontSize: 15, color: '#3c4742', fontWeight: 500 }}>Nessuno scenario completato ancora.</div>
          <div style={{ fontSize: 13, color: '#7a857f', marginTop: 6 }}>Vai al catalogo per iniziare il tuo primo percorso.</div>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {attempts.map(attempt => {
            const pct = Math.round((attempt.score / attempt.max_score) * 100);
            const date = new Date(attempt.completed_at).toLocaleDateString('it-IT', { day: 'numeric', month: 'long', year: 'numeric' });
            return (
              <div key={attempt.id} style={{
                background: '#fff', border: '1px solid #e7ded2', borderRadius: 14,
                padding: '18px 22px', display: 'flex', alignItems: 'center', gap: 18,
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: 12, flexShrink: 0,
                  background: pct >= 70 ? '#eef5f0' : '#fef9ec',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 18, fontWeight: 700, color: pct >= 70 ? '#1f4d46' : '#b45309',
                }}>
                  {pct}%
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14.5, fontWeight: 600, color: '#3c4742' }}>{attempt.scenario_title}</div>
                  <div style={{ fontSize: 12.5, color: '#7a857f', marginTop: 3 }}>
                    {attempt.score} / {attempt.max_score} punti · {date}
                  </div>
                </div>
                <div style={{
                  fontSize: 12, fontWeight: 600, padding: '5px 12px', borderRadius: 100,
                  background: pct >= 70 ? '#eef5f0' : '#fef9ec',
                  color: pct >= 70 ? '#2f6b4f' : '#b45309',
                }}>
                  {pct >= 70 ? 'Superato' : 'Da rivedere'}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
