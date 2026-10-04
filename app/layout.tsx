import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({ subsets: ['latin'], variable: '--font-geist-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-geist-mono' });

export const metadata: Metadata = {
  title: 'Sampath Menuka | Software Engineering Undergraduate',
  description:
    'Software Engineering Undergraduate from Sri Lanka specializing in Java, Spring Boot, React.js, and Node.js. Building frontend, backend, and full-stack web applications. Open to internship opportunities.',
  keywords:
    'full stack developer, software engineer, java developer, spring boot, react developer, nodejs, web development, RESTful API, MongoDB, MySQL',
  authors: [{ name: 'Sampath Menuka Chandimal' }],
  robots: 'index, follow',
  icons: { icon: '/assets/favicon.ico' },
  openGraph: {
    title: 'Sampath Menuka | Software Engineering Undergraduate',
    description:
      'Software Engineering Undergraduate from Sri Lanka building frontend, backend, and full-stack web applications. Open to internship opportunities.',
    url: 'https://sampathmenuka.github.io/',
    siteName: 'Sampath Menuka Portfolio',
    type: 'website',
    images: [
      {
        url: 'https://sampathmenuka.github.io/assets/myphoto.png',
        width: 1200,
        height: 630,
        alt: 'Sampath Menuka Chandimal',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@pasindusmc909',
    title: 'Sampath Menuka | Software Engineering Undergraduate',
    description:
      'Software Engineering Undergraduate from Sri Lanka building frontend, backend, and full-stack web applications. Open to internship opportunities.',
    images: ['https://sampathmenuka.github.io/assets/myphoto.png'],
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#07070d',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full scroll-smooth ${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
