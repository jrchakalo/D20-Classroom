import type {Metadata, Viewport} from 'next';
import { Fredoka } from 'next/font/google';
import './globals.css'; // Global styles

const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka' });

export const metadata: Metadata = {
  title: 'D20 Classroom — Halloween Trivia, Competition & Live',
  description:
    'A fun classroom true-or-false game with a D20, a classic mixed-topics deck, a spooky Halloween mode with Easy, Medium and Hard questions, a knockout competition and a Kahoot-style live room with QR codes for phones.',
};

export const viewport: Viewport = {
  themeColor: '#0b0517',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body className="antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
