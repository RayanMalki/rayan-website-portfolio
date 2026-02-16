import { IBM_Plex_Sans, Sora } from 'next/font/google';
import './globals.css';

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body'
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-heading'
});

export const metadata = {
  title: 'Rayan Malki | Software Engineer',
  description:
    'Portfolio of Rayan Malki, Software Engineering student and backend-focused developer in Montreal.',
  openGraph: {
    title: 'Rayan Malki | Software Engineer',
    description:
      'Backend-focused Software Engineering student in Montreal. Building reliable systems with Go, TypeScript, and Next.js.',
    url: 'https://rayanmalki.com',
    siteName: 'Rayan Malki',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rayan Malki | Software Engineer',
    description:
      'Backend-focused Software Engineering student in Montreal. Building reliable systems with Go, TypeScript, and Next.js.'
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${ibmPlexSans.variable} ${sora.variable}`}>{children}</body>
    </html>
  );
}
