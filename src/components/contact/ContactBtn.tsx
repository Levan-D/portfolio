'use client';

import { mdiEmailFastOutline } from '@mdi/js';
import { twMerge } from 'tailwind-merge';
import Icon from '@/components/ui/Icon';
import Modal from '@/components/ui/Modal';
import useDisclosure from '@/hooks/useDisclosure';
import ContactForm from './ContactForm';

type Props = {
  collapseLabel?: boolean;
};

export default function ContactBtn({ collapseLabel = false }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <button
        type="button"
        aria-label="Get in touch"
        aria-haspopup="dialog"
        onClick={onOpen}
        className="z-50 btnSecondary flex gap-4 dark:bg-slate-900"
      >
        <span className={twMerge(collapseLabel && 'hidden lg:inline')}>
          Get in touch
        </span>
        <Icon path={mdiEmailFastOutline} size={1} />
      </button>

      <Modal isOpen={isOpen} onClose={onClose} title="Let's connect!">
        <ContactForm onSent={onClose} />
      </Modal>
    </>
  );
}
