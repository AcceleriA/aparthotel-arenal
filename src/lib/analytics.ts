/**
 * Utilitaires de tracking GA4.
 * Les événements ne sont envoyés que si gtag est disponible et si le consent
 * analytics_storage est 'granted' (géré automatiquement par Consent Mode v2).
 */

export const GA_MEASUREMENT_ID = 'G-15H424FLSB';

type EventParams = Record<string, string | number | boolean | undefined>;

export function trackEvent(
  action: string,
  category?: string,
  label?: string,
  value?: number
) {
  if (typeof window === 'undefined' || typeof window.gtag !== 'function') return;
  const params: EventParams = {};
  if (category !== undefined) params.event_category = category;
  if (label !== undefined) params.event_label = label;
  if (value !== undefined) params.value = value;
  window.gtag('event', action, params);
}

export const trackBookingClick = (source: string) => {
  trackEvent('booking_click', 'conversion', source);
};

export const trackPhoneClick = () => {
  trackEvent('phone_click', 'contact', 'header');
};

export const trackEmailClick = () => {
  trackEvent('email_click', 'contact', 'footer');
};

export const trackStudioView = (studioName: string) => {
  trackEvent('studio_view', 'engagement', studioName);
};

export const trackLanguageSwitch = (locale: string) => {
  trackEvent('language_switch', 'navigation', locale);
};
