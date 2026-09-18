const EXCLUSION_KEY = "exclude_analytics";
let isInitialized = false;
let lastTrackedPath = null;

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
  window.gtag = window.gtag || function gtag() {
    window.dataLayer.push(arguments);
  };

  window.gtag("js", new Date());
  window.gtag("config", measurementId, { send_page_view: false });
  isInitialized = true;
}

export function trackPageView(pathname) {
  if (!isInitialized || pathname === lastTrackedPath) return;

  lastTrackedPath = pathname;
  window.gtag("event", "page_view", {
    page_location: window.location.href,
    page_path: pathname,
    page_title: document.title,
  });
}
