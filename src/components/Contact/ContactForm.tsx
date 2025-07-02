import React, { useState } from 'react';
import { useI18n } from '../../i18n';

const ContactForm: React.FC = () => {
  const { t } = useI18n();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would send the form data to your backend or email service
  };

  return (
    <div className="contact-form-section">
      <h1 className="contact-title">{t('contact')}</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input name="name" placeholder={t('name')} value={form.name} onChange={handleChange} required />
        <input name="email" placeholder={t('email')} value={form.email} onChange={handleChange} required type="email" />
        <textarea name="message" placeholder={t('message')} value={form.message} onChange={handleChange} required />
        <button type="submit" className="cta">{t('send')}</button>
      </form>
      {submitted && <p className="contact-thankyou">{t('thankYou')}</p>}
      <div className="contact-info-block">
        <h2>{t('contactInfo')}</h2>
        <p>Email: info@bpm.ba<br />Phone: +387 61 123 456</p>
      </div>
    </div>
  );
};

export default ContactForm;
