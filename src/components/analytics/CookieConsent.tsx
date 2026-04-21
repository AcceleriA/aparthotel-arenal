'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';

const STORAGE_KEY = 'cookie-consent';

export default function CookieConsent() {
  const t = useTranslations('cookieConsent');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const prev = localStorage.getItem(STORAGE_KEY);
      if (!prev) {
        setVisible(true);
      }
    } catch {
      // localStorage unavailable (private mode) — show banner anyway
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'accepted');
    } catch { /* noop */ }
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('consent', 'update', {
        analytics_storage: 'granted',
      });
    }
    setVisible(false);
  };

  const handleDecline = () => {
    try {
      localStorage.setItem(STORAGE_KEY, 'declined');
    } catch { /* noop */ }
    // Consent reste 'denied' par défaut
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={t('message')}
      style={{
        position: 'fixed',
        left: 16,
        right: 16,
        bottom: 16,
        zIndex: 9999,
        maxWidth: 720,
        margin: '0 auto',
        backgroundColor: 'rgba(27, 73, 101, 0.96)',
        backdropFilter: 'blur(8px)',
        color: 'white',
        padding: '18px 24px',
        borderRadius: 12,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.25)',
        display: 'flex',
        gap: 16,
        alignItems: 'center',
        flexWrap: 'wrap',
        fontFamily: 'var(--font-body)',
      }}
    >
      <p
        style={{
          flex: '1 1 260px',
          fontSize: 14,
          lineHeight: 1.5,
          margin: 0,
        }}
      >
        {t('message')}{' '}
        <a
          href="/politique-confidentialite"
          style={{
            color: '#D4A574',
            textDecoration: 'underline',
            textUnderlineOffset: 2,
          }}
        >
          {t('learnMore')}
        </a>
      </p>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <button
          type="button"
          onClick={handleDecline}
          style={{
            fontFamily: 'var(--font-utility)',
            fontSize: 11,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            padding: '10px 20px',
            border: '1px solid rgba(255,255,255,0.4)',
            color: 'white',
            background: 'transparent',
            borderRadius: 6,
            cursor: 'pointer',
          }}
        >
          {t('decline')}
        </button>
        <button
          type="button"
          onClick={handleAccept}
          style={{
            fontFamily: 'var(--font-utility)',
            fontSize: 11,
            letterSpacing: '2px',
            textTransform: 'uppercase',
            padding: '10px 20px',
            border: 'none',
            color: '#1B4965',
            backgroundColor: '#D4A574',
            borderRadius: 6,
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          {t('accept')}
        </button>
      </div>
    </div>
  );
}
