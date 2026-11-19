'use client';

import { useId, useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { mdiGamepadCircleOutline, mdiSend } from '@mdi/js';
import { toast } from 'react-toastify';
import Icon from '@/components/ui/Icon';
import { contactSchema, type ContactFormValues } from './contactSchema';
import { sendEmail } from './sendEmail';

type FieldNameType = Exclude<keyof ContactFormValues, 'website'>;

const SEND_FAILED = "Couldn't send your message. Please try again later.";

const INPUT_CLASSES =
  'rounded-lg border border-slate-400 bg-transparent p-2 text-sm outline-none focus-visible:border-teal-500 focus-visible:ring-2 focus-visible:ring-teal-500/40 aria-invalid:border-red-400';

type Props = {
  onSent: () => void;
};

export default function ContactForm({ onSent }: Props) {
  const formId = useId();
  const [isPending, startTransition] = useTransition();
  const [sendError, setSendError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    mode: 'onBlur',
    resolver: zodResolver(contactSchema),
  });

  const fieldId = (name: FieldNameType) => `${formId}-${name}`;
  const errorId = (name: FieldNameType) => `${formId}-${name}-error`;

  const a11yProps = (name: FieldNameType) => ({
    id: fieldId(name),
    'aria-invalid': errors[name] ? true : undefined,
    'aria-describedby': errors[name] ? errorId(name) : undefined,
  });

  const renderError = (name: FieldNameType) =>
    errors[name] && (
      <p id={errorId(name)} className="text-sm text-red-400">
        {errors[name].message}
      </p>
    );

  // errors render inline: a toast would sit under the modal's backdrop
  const onSubmit = (values: ContactFormValues) => {
    setSendError(null);
    startTransition(async () => {
      try {
        const result = await sendEmail(values);
        if (!result.ok) {
          setSendError(result.error);
          return;
        }
        toast.success('Email sent successfully!');
        reset();
        onSent();
      } catch {
        setSendError(SEND_FAILED);
      }
    });
  };

  return (
    <>
      <p className="mb-4 font-semibold textTertiary">
        Enter your information below
      </p>
      <form
        noValidate
        onSubmit={handleSubmit(onSubmit)}
        className="flex h-max grow flex-col"
      >
        <label className="mb-1 font-semibold" htmlFor={fieldId('name')}>
          Name
        </label>
        <input
          type="text"
          autoComplete="name"
          placeholder="John Doe"
          className={INPUT_CLASSES}
          {...a11yProps('name')}
          {...register('name')}
        />
        {renderError('name')}

        <label className="mb-1 font-semibold" htmlFor={fieldId('email')}>
          Email
        </label>
        <input
          type="email"
          autoComplete="email"
          placeholder="JDoe@gmail.com"
          className={INPUT_CLASSES}
          {...a11yProps('email')}
          {...register('email')}
        />
        {renderError('email')}

        <label className="mb-1 font-semibold" htmlFor={fieldId('message')}>
          Message
        </label>
        <textarea
          placeholder="Hello, I'd like to reach out..."
          className={`${INPUT_CLASSES} grow resize-none`}
          {...a11yProps('message')}
          {...register('message')}
        />
        {renderError('message')}

        <div aria-hidden="true" className="absolute -left-[9999px]">
          <label>
            Website
            <input
              type="text"
              tabIndex={-1}
              autoComplete="off"
              {...register('website')}
            />
          </label>
        </div>

        {sendError && (
          <p role="alert" className="mt-4 text-sm text-red-400">
            {sendError}
          </p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="my-4 flex w-full items-center justify-center gap-2 btnPrimary disabled:cursor-wait disabled:opacity-70"
        >
          <span>{isPending ? 'Sending…' : 'Send'}</span>
          <Icon
            path={isPending ? mdiGamepadCircleOutline : mdiSend}
            size={0.7}
            className={isPending ? 'animate-spin' : undefined}
          />
        </button>
      </form>
    </>
  );
}
