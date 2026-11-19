'use client';

import { createContext, useMemo, useState } from 'react';
import type { SectionIdType } from './sections';

type ActiveSectionContextType = {
  activeSection: SectionIdType | null;
  setActiveSection: (id: SectionIdType) => void;
};

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

type Props = {
  children: React.ReactNode;
};

export default function ActiveSectionProvider({ children }: Props) {
  const [activeSection, setActiveSection] = useState<SectionIdType | null>(
    null,
  );
  const value = useMemo(
    () => ({ activeSection, setActiveSection }),
    [activeSection],
  );

  return <ActiveSectionContext value={value}>{children}</ActiveSectionContext>;
}
