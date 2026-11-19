'use client';

import { useId } from 'react';
import { mdiClose } from '@mdi/js';
import { twMerge } from 'tailwind-merge';
import Icon from '@/components/ui/Icon';
import useDialog from '@/hooks/useDialog';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  className,
}: Props) {
  const dialogRef = useDialog(isOpen);
  const titleId = useId();

  const handleBackdropClick = (event: React.MouseEvent<HTMLDialogElement>) => {
    if (event.target === event.currentTarget) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      onClose={onClose}
      onClick={handleBackdropClick}
      className={twMerge(
        'm-auto w-full max-w-[540px] bg-transparent text-slate-950 opacity-0 transition-[opacity,display,overlay] transition-discrete duration-300 backdrop:bg-black/50 open:opacity-100 dark:text-white starting:open:opacity-0',
        className,
      )}
    >
      <div className="flex min-h-[500px] flex-col rounded-xl bg-gradient-border-light p-0.5 md:min-h-[600px] dark:bg-gradient-border-dark">
        <div className="flex grow flex-col rounded-xl bg-gradient-card-body-light px-6 py-4 dark:bg-gradient-card-body-dark">
          <div className="flex items-center justify-between">
            <h2 id={titleId} className="text-xl font-semibold">
              {title}
            </h2>
            <button
              type="button"
              aria-label="Close"
              onClick={onClose}
              className="active:text-teal-400 sm:hover:text-teal-200"
            >
              <Icon path={mdiClose} size={1} />
            </button>
          </div>

          <hr className="my-4 h-0.5 border-none bg-slate-600 opacity-50" />

          {children}
        </div>
      </div>
    </dialog>
  );
}
