'use client';

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_a26vzyk';
const EMAILJS_PUBLIC_KEY = 'RoO8pal5DR0sAgHEd';
const EMAILJS_TEMPLATE_ID = 'template_zoby8sn';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

  const isValidEmail = (emailStr: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailStr);
  };

  const validateField = (name: string, value: string) => {
    let errorMsg = '';
    if (name === 'name') {
      if (!value.trim()) errorMsg = 'Name is required.';
    } else if (name === 'email') {
      if (!value.trim()) {
        errorMsg = 'Email is required.';
      } else if (!isValidEmail(value)) {
        errorMsg = 'Valid email is required.';
      }
    } else if (name === 'message') {
      if (!value.trim()) errorMsg = 'Message is required.';
    }
    setErrors((prev) => ({ ...prev, [name]: errorMsg }));
    return errorMsg === '';
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (touched[name as keyof typeof touched]) {
      validateField(name, value);
    }
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger touched & validate all
    const newTouched = { name: true, email: true, message: true };
    setTouched(newTouched);

    const isNameValid = validateField('name', formData.name);
    const isEmailValid = validateField('email', formData.email);
    const isMsgValid = validateField('message', formData.message);

    if (!isNameValid || !isEmailValid || !isMsgValid) {
      return;
    }

    setLoading(true);
    setFeedback({ message: '', type: '' });

    try {
      const templateParams = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        title: formData.name.trim(),
        time: new Date().toLocaleString(),
      };

      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );

      if (response.status === 200) {
        setFeedback({
          message: "✅ Message sent! I'll get back to you soon.",
          type: 'success',
        });
        setFormData({ name: '', email: '', message: '' });
        setTouched({ name: false, email: false, message: false });
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setFeedback({
        message: '❌ Could not send message. Please email sampathwgw@gmail.com directly.',
        type: 'error',
      });
    } finally {
      setLoading(false);
      // Auto clear feedback after 6 seconds
      setTimeout(() => {
        setFeedback({ message: '', type: '' });
      }, 6000);
    }
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-4 py-8 sm:px-6 sm:py-12 text-center">
      <h2 className="text-2xl font-bold text-green-accent mb-8 flex items-center justify-center" data-aos="fade-up">
        What&apos;s Next?
      </h2>
      <h3 className="text-4xl font-bold text-lightest-slate mb-4" data-aos="fade-up" data-aos-delay="50">
        Get In Touch
      </h3>
      <p className="text-slate-gray max-w-lg mx-auto mb-12" data-aos="fade-up" data-aos-delay="200">
        Let&apos;s Chat! Whether you have a question, a project idea, or just want to connect, I&apos;m always happy to hear from you.
        Drop me a message, and I&apos;ll be in touch soon!
      </p>
      <form
        id="contactForm"
        className="max-w-lg mx-auto flex flex-col gap-6"
        data-aos="fade-up"
        data-aos-delay="150"
        role="form"
        aria-label="Contact form"
        onSubmit={handleSubmit}
      >
        <div className="relative">
          <label htmlFor="name" className="sr-only">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="name"
            required
            aria-required="true"
            className={`w-full px-4 py-3 border rounded bg-transparent text-lightest-slate text-base outline-none transition-colors duration-300 ${touched.name && errors.name ? 'focus:border-red-500' : 'border-light-slate'}`}
          />
          {touched.name && errors.name && (
            <div className="text-red-500 text-sm mt-1 text-left block" id="name-error">
              {errors.name}
            </div>
          )}
        </div>

        <div className="relative">
          <label htmlFor="email" className="sr-only">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            autoComplete="email"
            required
            aria-required="true"
            className={`w-full px-4 py-3 border rounded bg-transparent text-lightest-slate text-base outline-none transition-colors duration-300 ${touched.email && errors.email ? 'border-red-500' : 'focus:border-green-accent'}`}
          />
          {touched.email && errors.email && (
            <div className="text-red-500 text-sm mt-1 text-left block" id="email-error">
              {errors.email}
            </div>
          )}
        </div>

        <div className="relative">
          <label htmlFor="message" className="sr-only">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            aria-required="true"
            className={`w-full px-4 py-3 border rounded bg-transparent text-lightest-slate text-base outline-none transition-colors duration-300 resize-y min-h-30 ${touched.message && errors.message ? 'focus:border-red-500' : 'border-light-slate'}`}
          ></textarea>
          {touched.message && errors.message && (
            <div className="text-red-500 text-sm mt-1 text-left block" id="message-error">
              {errors.message}
            </div>
          )}
        </div>

        <button type="submit" className="px-8 py-4 border border-green-accent text-green-accent bg-transparent rounded text-base transition-colors duration-300 flex items-center justify-center gap-3 mx-auto hover:bg-green-accent/10 focus:outline-none focus:ring-2 focus:ring-green-accent focus:ring-offset-2 focus:ring-offset-dark-navy disabled:opacity-50 disabled:cursor-not-allowed" id="submitBtn" disabled={loading}>
          {loading && (
            <svg className="w-4 h-4 animate-spin" id="spinner" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                fill="#4ade80"
              />
              <path
                d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                fill="#4ade80"
              />
            </svg>
          )}
          Send Mail
        </button>
        {feedback.message && (
          <p className={`text-center font-medium mt-4 ${feedback.type === 'success' ? 'text-green-500' : 'text-red-500'}`}>{feedback.message}</p>
        )}
      </form>
    </section>
  );
}
