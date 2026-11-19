import { use } from 'react';
import { ActiveSectionContext } from './ActiveSectionProvider';

export default function useActiveSection() {
  const context = use(ActiveSectionContext);
  if (!context) {
    throw new Error(
      'useActiveSection must be used inside ActiveSectionProvider',
    );
  }
  return context;
}
