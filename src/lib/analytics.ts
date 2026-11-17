let initialized = false;

type AnalyticsWindow = Window & { dataLayer?: unknown[] };

/** Initialize browser tracking once; the connector exposes only the public measurement ID. */
export function initializeAnalytics() {
  const measurementId = import.meta.env['VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY'];
  if (initialized || !measurementId) return;

  const analyticsWindow = window as AnalyticsWindow;
  analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
  function gtag(..._args: unknown[]) {
    // Google expects an Arguments object, not an array.
    // eslint-disable-next-line prefer-rest-params
    analyticsWindow.dataLayer?.push(arguments);
  }

  initialized = true;
  gtag('set', 'developer_id.dZjgwMW', true);
  // The root head already initializes gtag('js') for both Tag Manager containers.
  gtag('config', measurementId);

  const script = document.createElement('script');
  script.id = 'trilha-google-analytics';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`;
  document.head.appendChild(script);
}