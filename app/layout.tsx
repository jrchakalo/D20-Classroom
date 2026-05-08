import type {Metadata} from 'next';
import { Fredoka } from 'next/font/google';
import './globals.css'; // Global styles

const fredoka = Fredoka({ subsets: ['latin'], variable: '--font-fredoka' });

export const metadata: Metadata = {
  title: 'Teacher Truths: D20 Game',
  description: 'A fun classroom icebreaker game',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body className="font-fredoka antialiased" suppressHydrationWarning>{children}</body>
    </html>
  );
}
