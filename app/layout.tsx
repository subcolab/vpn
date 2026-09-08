import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AegisVPN — Private by design. Fast by default.',
  description: 'A premium VPN experience built for speed, privacy, and effortless security on every device.',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
