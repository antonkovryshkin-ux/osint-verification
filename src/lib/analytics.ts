export const trackEvent = (eventName: string, params?: Record<string, any>) => {
    if (process.env.NODE_ENV === 'development') {
        console.log(`[Analytics] ${eventName}`, params);
    }
    // Integration point for GA4 / Mixpanel / etc.
};
