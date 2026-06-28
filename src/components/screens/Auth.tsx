'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

interface Props {
  onAuth: () => void;
}

export default function Auth({ onAuth }: Props) {
  const [mode, setMode] = useState<'login' | 'signup'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');
    setLoading(true);

    if (mode === 'signup') {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: { data: { full_name: fullName } },
      });
      if (error) {
        setError(error.message);
      } else {
        setMessage('Controlla la tua email per confermare la registrazione.');
      }
    } else {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) {
        setError('Email o password non corretti.');
      } else {
        onAuth();
      }
    }
    setLoading(false);
  };

  return (
    <div style={{
      minHeight: '100vh', background: '#f1ece4',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: '24px',
    }}>
      <div style={{
        background: '#fff', borderRadius: 20, border: '1px solid #e7ded2',
        padding: '40px 36px', width: '100%', maxWidth: 420,
        boxShadow: '0 24px 50px -30px rgba(40,30,20,.35)',
      }}>
        {/* Logo */}
        <div style={{ marginBottom: 28, textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#e7efeb', color: '#1f4d46', fontSize: 13, fontWeight: 700,
            padding: '7px 15px', borderRadius: 100,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#1f4d46' }} />
            LoveGiver Campus
          </div>
        </div>

        <h1 className="font-serif-display" style={{ fontSize: 26, fontWeight: 700, margin: '0 0 6px', textAlign: 'center' }}>
          {mode === 'login' ? 'Bentornato' : 'Crea il tuo account'}
        </h1>
        <p style={{ fontSize: 14, color: '#7a857f', margin: '0 0 28px', textAlign: 'center' }}>
          {mode === 'login' ? 'Accedi per riprendere il tuo percorso.' : 'Inizia il tuo percorso formativo.'}
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {mode === 'signup' && (
            <div>
              <label style={{ fontSize: 13, fontWeight: 600, color: '#3c4742', display: 'block', marginBottom: 6 }}>
                Nome e cognome
              </label>
              <input
                type="text"
                value={fullName}
                onChange={e => setFullName(e.target.value)}
                required
                placeholder="es. Maria Rossi"
                style={inputStyle}
              />
            </div>
          )}

          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: '#3c4742', display: 'block', marginBottom: 6 }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              placeholder="tu@esempio.it"
              style={inputStyle}
            />
          </div>

          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: '#3c4742', display: 'block', marginBottom: 6 }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              minLength={6}
              placeholder="minimo 6 caratteri"
              style={inputStyle}
            />
          </div>

          {error && (
            <div style={{ background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 10, padding: '10px 14px', fontSize: 13, color: '#b91c1c' }}>
              {error}
            </div>
          )}

          {message && (
            <div style={{ background: '#eef5f0', border: '1px solid #cfe3d6', borderRadius: 10, padding: '10px 14px', fontSize: 13, color: '#1f4d46' }}>
              {message}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            style={{
              background: '#1f4d46', color: '#fff', fontWeight: 700, fontSize: 15,
              padding: '14px', borderRadius: 11, marginTop: 4,
              opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: '0 8px 20px -10px rgba(31,77,70,.7)',
            }}
          >
            {loading ? 'Attendere…' : mode === 'login' ? 'Accedi' : 'Registrati'}
          </button>
        </form>

        <p style={{ fontSize: 13, color: '#7a857f', textAlign: 'center', marginTop: 22 }}>
          {mode === 'login' ? 'Non hai un account?' : 'Hai già un account?'}{' '}
          <button
            onClick={() => { setMode(mode === 'login' ? 'signup' : 'login'); setError(''); setMessage(''); }}
            style={{ color: '#1f4d46', fontWeight: 600, background: 'none', cursor: 'pointer' }}
          >
            {mode === 'login' ? 'Registrati' : 'Accedi'}
          </button>
        </p>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '11px 13px', borderRadius: 10,
  border: '1px solid #d9d0c4', fontSize: 14, background: '#faf8f5',
  outline: 'none', boxSizing: 'border-box',
};
