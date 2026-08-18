/**
 * Utility helper to send events to Google Tag Manager dataLayer safely
 */
export function trackGtmEvent(eventName, eventParams = {}) {
  if (typeof window !== "undefined") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: eventName,
      ...eventParams,
      timestamp: new Date().toISOString(),
    });
  }
}

// Convenience trackers for core conversion actions
export const trackLead = (params = {}) => trackGtmEvent("generate_lead", params);
export const trackFormSuccess = (params = {}) => trackGtmEvent("form_submit_success", params);
export const trackScheduleCall = (params = {}) => trackGtmEvent("schedule_call", params);
export const trackQuoteRequest = (params = {}) => trackGtmEvent("request_quote", params);
export const trackAuditRequest = (params = {}) => trackGtmEvent("audit_request", params);
export const trackDemoBooking = (params = {}) => trackGtmEvent("book_demo", params);
export const trackServiceCta = (params = {}) => trackGtmEvent("service_cta_click", params);
export const trackCaseStudyCta = (params = {}) => trackGtmEvent("case_study_cta", params);
