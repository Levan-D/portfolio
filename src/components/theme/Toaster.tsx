'use client';

import { useTheme } from 'next-themes';
import { ToastContainer } from 'react-toastify';

export default function Toaster() {
  const { resolvedTheme } = useTheme();

  return (
    <ToastContainer
      position="top-center"
      newestOnTop
      theme={resolvedTheme === 'light' ? 'light' : 'dark'}
    />
  );
}
