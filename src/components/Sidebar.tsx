'use client';

import type { User } from '@supabase/supabase-js';
import type { Screen } from '@/types';

interface NavItem {
  key: Screen;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { key: 'home', label: 'Home', icon: '⌂' },
  { key: 'catalog', label: 'Catalogo scenari', icon: '☰' },
  { key: 'dashboard', label: 'I miei progressi', icon: '◫' },
];

interface Props {
  screen: Screen;
  inFlow: boolean;
  go: (s: Screen) => void;
  startDemo: () => void;
  goCatalog: () => void;
  user: User;
  onSignOut: () => void;
}

export default function Sidebar({ screen, inFlow, go, goCatalog, user, onSignOut }: Props) {
  const initials = (user.user_metadata?.full_name as string | undefined)
    ?.split(' ').map((w: string) => w[0]).join('').slice(0, 2).toUpperCase()
    ?? user.email?.slice(0, 2).toUpperCase()
    ?? '?';

  const displayName = (user.user_metadata?.full_name as string | undefined) ?? user.email ?? '';

  return (
    <aside style={{
      width: 264,
      flexShrink: 0,
      background: '#163e38',
      color: 'rgba(255,255,255,.86)',
      display: 'flex',
      flexDirection: 'column',
      position: 'sticky',
      top: 0,
      height: '100vh',
      padding: '26px 18px',
    }}>
      {/* Logo */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 11, padding: '0 8px 4px' }}>
        <div style={{
          width: 38, height: 38, borderRadius: 11,
          background: 'linear-gradient(150deg,#caa07a,#c06a48)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0, boxShadow: '0 4px 12px -4px rgba(192,106,72,.6)'
        }}>
          <div style={{ width: 14, height: 14, borderRadius: '50%', border: '2.5px solid #fff' }} />
        </div>
        <div style={{ lineHeight: 1.15 }}>
          <div className="font-serif-display" style={{ fontWeight: 700, fontSize: 16, color: '#fff' }}>LoveGiver</div>
          <div style={{ fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.55)' }}>Campus</div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 4 }}>
        {NAV_ITEMS.map(item => {
          const active = item.key === screen || (item.key === 'catalog' && inFlow);
          return (
            <button
              key={item.key}
              onClick={() => go(item.key)}
              onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'rgba(255,255,255,.06)'; }}
              onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}
              style={{
                display: 'flex', alignItems: 'center', gap: 11, width: '100%',
                textAlign: 'left', padding: '11px 13px', borderRadius: 11,
                fontSize: 14,
                fontWeight: active ? 600 : 500,
                color: active ? '#fff' : 'rgba(255,255,255,.74)',
                background: active ? 'rgba(255,255,255,.12)' : 'transparent',
                transition: 'background .15s',
              }}
            >
              <span style={{ fontSize: 15, width: 18, textAlign: 'center', color: active ? '#d8b79c' : 'rgba(255,255,255,.5)' }}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Bottom */}
      <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: 14 }}>
        <div style={{
          background: 'rgba(255,255,255,.07)', border: '1px solid rgba(255,255,255,.1)',
          borderRadius: 13, padding: 14,
        }}>
          <div style={{ fontSize: 11, letterSpacing: '.12em', textTransform: 'uppercase', color: '#d8b79c', fontWeight: 600 }}>
            Versione demo
          </div>
          <div style={{ fontSize: 12.5, color: 'rgba(255,255,255,.72)', marginTop: 5, lineHeight: 1.5 }}>
            1 scenario completo sbloccato. Sblocca tutti i percorsi con l&apos;accesso Premium.
          </div>
          <button
            onClick={goCatalog}
            style={{
              marginTop: 11, width: '100%', background: '#caa07a', color: '#3a2417',
              fontWeight: 600, fontSize: 12.5, padding: '8px', borderRadius: 9,
            }}
          >
            Scopri Premium
          </button>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '4px 6px' }}>
          <div style={{
            width: 34, height: 34, borderRadius: '50%', background: '#2c5a52',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 13, fontWeight: 600, color: '#fff', flexShrink: 0,
          }}>{initials}</div>
          <div style={{ lineHeight: 1.2, flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13, color: '#fff', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{displayName}</div>
            <button
              onClick={onSignOut}
              style={{ fontSize: 11, color: 'rgba(255,255,255,.45)', background: 'none', cursor: 'pointer', padding: 0 }}
            >
              Esci
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
}
