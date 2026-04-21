'use client';

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Image from 'next/image';
import { GA4Events } from '@/components/SEO/GA4';
import { getBreadcrumbSchema } from '@/lib/schema';

export default function ContactPage() {
  const t = useTranslations('contact');
  const locale = useLocale();
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'Accueil', url: `/${locale}` },
    { name: 'Contact', url: `/${locale}/contact` },
  ]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, honeypot: '' }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error || 'Une erreur est survenue.');
        return;
      }

      GA4Events.contactFormSubmit();
      setSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      setTimeout(() => setSubmitted(false), 5000);
    } catch {
      setError('Impossible d\'envoyer le message. Vérifiez votre connexion.');
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Hero */}
      <section className="relative w-full h-[50vh] min-h-[400px] flex items-end justify-center overflow-hidden">
        <Image
          src="/images/arenal-cafe-entrance.jpg"
          alt="Contact"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(175deg, rgba(13,43,62,0.15) 0%, rgba(13,43,62,0.02) 40%, rgba(13,43,62,0.4) 80%, rgba(13,43,62,0.7) 100%)'
          }}
        />
        <div className="relative z-10 text-center text-white px-4 pb-12">
          <h1 className="text-white">{t('title')}</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-arenal">
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <div className="card">
              <h3 className="section-title mb-4 text-xl">{t('address')}</h3>
              <p className="font-instrument text-deep-coastal/80">{t('addressValue')}</p>
            </div>

            {/* Phone */}
            <div className="card">
              <h3 className="section-title mb-4 text-xl">{t('phone')}</h3>
              <a
                href="tel:+34972637000"
                onClick={() => GA4Events.phoneClick()}
                className="font-instrument text-lg text-terracotta hover:text-maritime-pine transition-colors"
              >
                +34 972 637 000
              </a>
            </div>

            {/* Hours */}
            <div className="card">
              <h3 className="section-title mb-4 text-xl">{t('hours')}</h3>
              <p className="font-instrument text-deep-coastal/80">{t('hoursValue')}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="section-title text-center mb-8">{t('subtitle')}</h2>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 font-instrument">
                {t('formSuccess')}
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-6 font-instrument">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Honeypot - hidden from humans */}
              <input
                type="text"
                name="honeypot"
                style={{ display: 'none' }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label className="label-text block mb-2">{t('formName')}</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-deep-coastal/20 rounded-lg font-instrument focus:outline-none focus:border-terracotta"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="label-text block mb-2">{t('formEmail')}</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-deep-coastal/20 rounded-lg font-instrument focus:outline-none focus:border-terracotta"
                  />
                </div>
                <div>
                  <label className="label-text block mb-2">{t('phone')}</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-deep-coastal/20 rounded-lg font-instrument focus:outline-none focus:border-terracotta"
                  />
                </div>
              </div>

              <div>
                <label className="label-text block mb-2">{t('formMessage')}</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 border border-deep-coastal/20 rounded-lg font-instrument focus:outline-none focus:border-terracotta"
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary px-8 py-3 text-lg"
                  disabled={sending}
                  style={{ opacity: sending ? 0.7 : 1 }}
                >
                  {sending ? 'Envoi en cours...' : t('formSend')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-bleached-stone">
        <div className="container-arenal">
          <h2 className="section-title text-center mb-8">Nous localiser</h2>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2979.5!2d3.1486!3d41.9711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPals%2C+Girona!5e0!3m2!1sen!2ses!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Aparthotel Arenal - Pals, Costa Brava"
            />
          </div>
        </div>
      </section>
    </>
  );
}
