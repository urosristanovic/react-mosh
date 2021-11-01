import * as Sentry from '@sentry/react';
import { Integrations } from '@sentry/tracing';

function init() {
  Sentry.init({
    dsn: 'https://3b75be72e6334314865bb22a288336f9@o1057247.ingest.sentry.io/6043934',
    integrations: [new Integrations.BrowserTracing()],

    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });
}

function log(error) {
  throw new Error('Logging the error', error);
  // Sentry.captureException(error);
}

export default {
  init,
  log,
};
