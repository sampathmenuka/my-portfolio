'use client';

import React, { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_a26vzyk';
const EMAILJS_PUBLIC_KEY = 'RoO8pal5DR0sAgHEd';
const EMAILJS_TEMPLATE_ID = 'template_zoby8sn';

export type ContactField = 'name' | 'email' | 'message';

const isValidEmail = (emailStr: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailStr);

// Form state, validation and EmailJS submission shared by the desktop and mobile contact forms.
export function useContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touched, setTouched] = useState({ name: false, email: false, message: false });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState({ message: '', type: '' });

  useEffect(() => {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }, []);

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
    if (touched[name as ContactField]) {
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
    setTouched({ name: true, email: true, message: true });

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

      const response = await emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams);

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

  return { formData, touched, errors, loading, feedback, handleChange, handleBlur, handleSubmit };
}
