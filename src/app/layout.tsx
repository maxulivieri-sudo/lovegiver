import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'LoveGiver Training Lab',
  description: 'Simulatore formativo interattivo su affettività, sessualità, consenso, autonomia e disabilità.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" style={{ height: '100%' }}>
      <body style={{ height: '100%', margin: 0 }}>{children}</body>
    </html>
  );
}
