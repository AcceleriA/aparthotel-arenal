'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function ContactPage() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple form handling - in production, you would send to a backend service
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative w-full h-96 flex items-end justify-center overflow-hidden">
        <Image
          src="/images/hero/village.jpg"
          alt="Contact"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 text-center text-white px-4 pb-12">
          <h1 className="font-italiana text-5xl md:text-6xl">{t('title')}</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-arenal">
          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Address */}
            <div className="card">
              <h3 className="font-italiana text-2xl mb-4">{t('address')}</h3>
              <p className="font-instrument text-deep-coastal/80">{t('addressValue')}</p>
            </div>

            {/* Phone */}
            <div className="card">
              <h3 className="font-italiana text-2xl mb-4">{t('phone')}</h3>
              <a
                href="tel:+34972637000"
                className="font-instrument text-lg text-terracotta hover:text-maritime-pine transition-colors"
              >
                +34 972 637 000
              </a>
            </div>

            {/* Hours */}
            <div className="card">
              <h3 className="font-italiana text-2xl mb-4">{t('hours')}</h3>
              <p className="font-instrument text-deep-coastal/80">{t('hoursValue')}</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-2xl mx-auto">
            <h2 className="font-italiana text-3xl text-center mb-8">{t('subtitle')}</h2>

            {submitted && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg mb-6 font-instrument">
                {t('formSuccess')}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
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
                <button type="submit" className="btn-primary px-8 py-3 text-lg">
                  {t('formSend')}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-bleached-stone">
        <div className="container-arenal">
          <h2 className="font-italiana text-3xl text-center mb-8">Nous localiser</h2>
          <div className="relative h-96 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3020.6789...your-map-embed"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
