import { getWebInstrumentations, initializeFaro } from '@grafana/faro-web-sdk'
import { TracingInstrumentation } from '@grafana/faro-web-tracing'
import { setupConsoleInstrumentation } from './console'
import { setupErrorInstrumentation } from './error'
import { setupTracingInstrumentation } from './tracing'
import { sendCustomEvents } from './event'

var faro = initializeFaro({
  url: process.env.FARO_COLLECTOR_URL,
  app: {
    name: process.env.APP_NAME,
    version: '1.0.0',
    environment: 'production'
  },

  instrumentations: [
    ...getWebInstrumentations({
      captureConsoleDisabledLevels: [],
    }),

    new TracingInstrumentation(),
  ],
  beforeSend: (item) => {
    console.log('Beacon data:', item)
    return item
  }
})

document.addEventListener('DOMContentLoaded', () => {
  setupConsoleInstrumentation(faro)
  setupErrorInstrumentation(faro)
  setupTracingInstrumentation(faro)
  sendCustomEvents(faro)
})