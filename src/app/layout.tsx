import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/navigation/Navbar';
import Footer from '@/components/Footer';
import Providers from '@/components/Providers';
import BackToTop from '@/components/BackToTop';
import ThemeColorMeta from '@/components/theme/ThemeColorMeta';
import Toaster from '@/components/theme/Toaster';
import 'react-toastify/dist/ReactToastify.css';
import type { Metadata } from 'next';
import {
  SITE_DESCRIPTION,
  SITE_KEYWORDS,
  SITE_NAME,
  SITE_URL,
} from '@/config/site';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  keywords: SITE_KEYWORDS,
  authors: [{ name: 'Levan Dolidze' }],
  creator: 'Levan Dolidze',
  publisher: 'Levan Dolidze',
  openGraph: {
    title: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: 'en_US',
    type: 'website',
  },
  twitter: { card: 'summary_large_image' },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // next-themes sets class/color-scheme on <html> before hydration
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} backgroundGrid flex min-h-screen flex-col bg-slate-200 text-slate-950 dark:bg-slate-950 dark:bg-gradient-body-dark dark:text-white`}
      >
        <Providers>
          <Navbar />
          <BackToTop />
          <ThemeColorMeta />
          <Toaster />
          <main className="mx-auto w-full max-w-(--breakpoint-2xl) grow overflow-x-clip px-4 md:px-8">
            {children}
          </main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
