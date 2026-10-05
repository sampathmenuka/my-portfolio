'use client';

import React from 'react';
import { EMAIL, PHONE, socials } from '@/lib/portfolio';
import { useContactForm, ContactField } from '@/hooks/useContactForm';
import { Icon, SectionHeader } from './ui';

const socialIcon = (label: string) => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    {socials.find((s) => s.label === label)?.icon}
  </svg>
);

const quickActions = [
  { label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, icon: <Icon name="mail" />, external: false },
  { label: 'Call', value: PHONE.label, href: PHONE.href, icon: <Icon name="phone" />, external: false },
  { label: 'LinkedIn', value: 'in/sampathmenuka', href: socials.find((s) => s.label === 'LinkedIn')!.href, icon: socialIcon('LinkedIn'), external: true },
  { label: 'GitHub', value: '@sampathmenuka', href: socials.find((s) => s.label === 'GitHub')!.href, icon: socialIcon('GitHub'), external: true },
];

const fields: { name: ContactField; label: string; type: string; placeholder: string; autoComplete?: string }[] = [
  { name: 'name', label: 'Your name', type: 'text', placeholder: 'John Doe', autoComplete: 'name' },
  { name: 'email', label: 'Email address', type: 'email', placeholder: 'you@example.com', autoComplete: 'email' },
  { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell me about your project or opportunity…' },
];

export default function MobileContact() {
  const { formData, touched, errors, loading, feedback, handleChange, handleBlur, handleSubmit } = useContactForm();

  const inputClass = (field: ContactField) =>
    `w-full px-4 rounded-xl bg-white/[0.03] border text-base text-lightest-slate placeholder:text-slate-gray/60 outline-none transition-all duration-300 focus:bg-white/[0.05] focus:ring-4 ${
      touched[field] && errors[field]
        ? 'border-red-500/70 focus:border-red-500 focus:ring-red-500/10'
        : 'border-white/10 focus:border-green-accent/60 focus:ring-green-accent/10'
    }`;

  return (
    <section id="m-contact" aria-labelledby="m-contact-title">
      <SectionHeader id="m-contact-title" eyebrow="What's next?" title={<>Let&apos;s <span className="text-gradient">work together</span></>} />
      <p className="-mt-2 mb-5 text-[0.9375rem] leading-relaxed text-slate-gray">
        Whether you have a question, a project idea, or just want to connect, I&apos;m always happy to hear from you.
      </p>

      {/* Quick actions */}
      <ul className="grid grid-cols-2 gap-2.5">
        {quickActions.map((action) => (
          <li key={action.label}>
            <a
              href={action.href}
              {...(action.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="glass h-full flex items-center gap-3 p-3 rounded-2xl active:scale-[0.97] transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-green-accent"
            >
              <span className="shrink-0 w-9 h-9 flex items-center justify-center rounded-xl bg-linear-to-br from-green-accent/20 to-cyan-accent/10 text-green-accent ring-1 ring-green-accent/20 [&_svg]:w-[18px] [&_svg]:h-[18px]">
                {action.icon}
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold leading-tight text-lightest-slate">{action.label}</span>
                <span className="mt-0.5 block text-[11px] leading-tight text-slate-gray truncate">{action.value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>

      {/* Message form */}
      <form
        className="glass gradient-border mt-4 flex flex-col gap-4 p-5 rounded-3xl"
        aria-label="Contact form"
        noValidate
        onSubmit={handleSubmit}
      >
        <p className="text-sm font-semibold text-lightest-slate">Or send a message</p>

        {fields.map((field) => {
          const id = `m-${field.name}`;
          const hasError = touched[field.name] && errors[field.name];
          const shared = {
            id,
            name: field.name,
            placeholder: field.placeholder,
            value: formData[field.name],
            onChange: handleChange,
            onBlur: handleBlur,
            required: true,
            'aria-invalid': hasError ? true : undefined,
            'aria-describedby': hasError ? `${id}-error` : undefined,
          };
          return (
            <div key={field.name}>
              <label htmlFor={id} className="block mb-1.5 text-xs font-medium text-light-slate">
                {field.label}
              </label>
              {field.type === 'textarea' ? (
                <textarea {...shared} rows={4} className={`${inputClass(field.name)} py-3 resize-none`} />
              ) : (
                <input {...shared} type={field.type} autoComplete={field.autoComplete} className={`${inputClass(field.name)} h-12`} />
              )}
              {hasError && (
                <p id={`${id}-error`} className="mt-1.5 text-xs text-red-400">
                  {errors[field.name]}
                </p>
              )}
            </div>
          );
        })}

        <button
          type="submit"
          disabled={loading}
          className="btn-primary h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-lightest-slate disabled:opacity-60"
        >
          {loading ? (
            <span className="w-4 h-4 rounded-full border-2 border-current border-t-transparent animate-spin" aria-hidden="true"></span>
          ) : (
            <Icon name="send" className="w-4 h-4" />
          )}
          {loading ? 'Sending…' : 'Send Message'}
        </button>

        {feedback.message && (
          <p
            role="status"
            className={`text-center text-sm font-medium px-4 py-3 rounded-xl ${feedback.type === 'success' ? 'text-green-accent bg-green-accent/10' : 'text-red-400 bg-red-500/10'}`}
          >
            {feedback.message}
          </p>
        )}
      </form>
    </section>
  );
}
