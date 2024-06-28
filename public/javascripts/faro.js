import { getWebInstrumentations, initializeFaro, LogLevel } from '@grafana/faro-web-sdk'
import { TracingInstrumentation } from '@grafana/faro-web-tracing'
import { setupConsoleInstrumentation } from './console'
import { setupErrorInstrumentation } from './error'
import { setupTracingInstrumentation } from './tracing'

var faro = initializeFaro({
  url: 'https://faro-collector-prod-au-southeast-0.grafana.net/collect/27af9f41ad3a38f92b3c07ceb9085ea0',
  app: {
    name: 'Faro Demo',
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

// document.addEventListener('DOMContentLoaded', () => {
//   const { trace, context } = faro.api.getOTEL()
//   const tracer = trace.getTracer('default')

//   // Console Instrumentation
//   document.getElementById('log-info-btn')?.addEventListener('click', () => {
//     console.info('User clicked the log info button')
//     alert('Console Info Log')
//   })

//   document.getElementById('log-warn-btn')?.addEventListener('click', () => {
//     console.warn('User clicked the log warn button')
//     alert('Console warn Log')
//   })

//   document.getElementById('log-error-btn')?.addEventListener('click', () => {
//     console.error('User clicked the log error button')
//     alert('Console error Log')
//   })

//   // Error Instrumentation
//   document.getElementById('uncaught-error-btn')?.addEventListener('click', () => {
//     alert('Trigger uncaught error')
//     throw new Error('Uncaught test error')
//   })

//   document.getElementById('caught-error-btn')?.addEventListener('click', () => {
//     try {
//       console.log(c)
//     } catch (error) {
//       faro.api.pushError(error)
//       alert('Trigger caught error')
//     }

//   })

//   // Tracing
//   document.getElementById('fetch-data-btn')?.addEventListener('click', async () => {
//     const span = tracer.startSpan('FetchData', {
//       attributes: { action: 'Fetching data from API' }
//     })

//     context.with(trace.setSpan(context.active(), span), async () => {
//       try {
//         const response = await fetch('/api/data')
//         const data = await response.json()
//         document.getElementById('data-output').textContent = JSON.stringify(data)
//       } catch (error) {
//         faro.api.pushError(error)
//       } finally {
//         span.end()
//       }
//     })
//   })

//   document.getElementById('fetch-fail-btn')?.addEventListener('click', async () => {
//     const span = tracer.startSpan('FetchData', {
//       attributes: { action: 'Fetching data from API (Fail)' },
//     })
    
//     context.with(trace.setSpan(context.active(), span), async () => {
//       try {
//         const response = await fetch('/api/fail')
//         if (!response.ok) {
//           throw new Error('Network response was not ok')
//         }
//         const data = await response.json()
//         document.getElementById('data-output').textContent = JSON.stringify(data)
//       } catch (error) {
//         faro.api.pushError(error)
//         document.getElementById('data-output').textContent = error.message
//       } finally {
//         span.end()
//       }
//     })
//   })


// })

document.addEventListener('DOMContentLoaded', () => {
  setupConsoleInstrumentation(faro)
  setupErrorInstrumentation(faro)
  setupTracingInstrumentation(faro)
})