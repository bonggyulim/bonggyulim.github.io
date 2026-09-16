const EXCLUSION_KEY = "exclude_analytics";

export function initializeAnalytics() {
  const url = new URL(window.location.href);

  if (url.searchParams.get(EXCLUSION_KEY) === "true") {
    try {
      window.localStorage.setItem(EXCLUSION_KEY, "true");
    } catch {
      return;
    }

    url.searchParams.delete(EXCLUSION_KEY);
    window.history.replaceState(window.history.state, "", `${url.pathname}${url.search}${url.hash}`);
  }

  if (!import.meta.env.PROD) return;

  const measurementId = import.meta.env.VITE_GA4_MEASUREMENT_ID;
  if (!/^G-[A-Z0-9]+$/.test(measurementId ?? "")) return;

  try {
    if (window.localStorage.getItem(EXCLUSION_KEY) === "true") return;
  } catch {
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);
}
