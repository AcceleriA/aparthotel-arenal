'use client';

import Script from 'next/script';

// Hardcoded fallback to the production measurement ID.
// Can still be overridden via NEXT_PUBLIC_GA_MEASUREMENT_ID.
const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-15H424FLSB';

export function GoogleAnalytics() {
  if (!GA_MEASUREMENT_ID) {
    return null;
  }

  return (
    <>
      {/* Google Consent Mode v2 - defaults BEFORE gtag.js loads (EU/UK GDPR compliance) */}
      <Script id="consent-defaults" strategy="beforeInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            'analytics_storage': 'denied',
            'ad_storage': 'denied',
            'ad_user_data': 'denied',
            'ad_personalization': 'denied',
            'functionality_storage': 'granted',
            'security_storage': 'granted',
            'wait_for_update': 500
          });
          // Restaurer le consentement précédemment accordé si présent en localStorage
          try {
            var prev = localStorage.getItem('cookie-consent');
            if (prev === 'accepted') {
              gtag('consent', 'update', { 'analytics_storage': 'granted' });
            }
          } catch (e) { /* localStorage unavailable */ }
        `}
      </Script>

      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname,
            anonymize_ip: true,
            cookie_flags: 'SameSite=None;Secure',
            send_page_view: true
          });
        `}
      </Script>
    </>
  );
}

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Custom event tracking functions
export function trackEvent(eventName: string, params?: Record<string, string | number | boolean>) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, params);
  }
}

// Predefined events from the GA4 matrix
export const GA4Events = {
  // Booking funnel
  bookingWidgetView: () => trackEvent('booking_widget_view'),
  bookingDateSelect: (dates: { checkin: string; checkout: string }) =>
    trackEvent('booking_date_select', dates),
  bookingStudioSelect: (studioName: string) =>
    trackEvent('booking_studio_select', { studio_name: studioName }),
  bookingComplete: (value: number) =>
    trackEvent('purchase', { value, currency: 'EUR' }),

  // Navigation
  studioCardClick: (studioSlug: string) =>
    trackEvent('studio_card_click', { studio_slug: studioSlug }),
  ctaClick: (ctaLocation: string) =>
    trackEvent('cta_click', { location: ctaLocation }),
  languageSwitch: (fromLang: string, toLang: string) =>
    trackEvent('language_switch', { from: fromLang, to: toLang }),

  // Content engagement
  storyPageScroll: (scrollPercent: number) =>
    trackEvent('story_page_scroll', { scroll_percent: scrollPercent }),
  contactFormSubmit: () => trackEvent('contact_form_submit'),
  phoneClick: () => trackEvent('phone_click'),
  emailClick: () => trackEvent('email_click'),
  mapClick: () => trackEvent('map_click'),

  // External links
  golfLinkClick: () => trackEvent('golf_link_click'),
  beachLinkClick: () => trackEvent('beach_link_click'),
  socialLinkClick: (platform: string) =>
    trackEvent('social_link_click', { platform }),
};
