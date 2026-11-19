'use client';

import { ThemeProvider } from 'next-themes';
import ActiveSectionProvider from '@/components/navigation/ActiveSectionProvider';

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <ActiveSectionProvider>{children}</ActiveSectionProvider>
    </ThemeProvider>
  );
}
