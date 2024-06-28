export function setupTracingInstrumentation(faro) {
    const { trace, context } = faro.api.getOTEL()
    const tracer = trace.getTracer('default')

    document.getElementById('fetch-data-btn')?.addEventListener('click', () => {
        const span = tracer.startSpan('FetchData', {
            attributes: { action: 'Fetching data from API'}
        })

        context.with(trace.setSpan(context.active(), span), async() => {
            try {
                const response = await fetch('/api/data')
                const data = await response.json()
                document.getElementById('data-output').textContent = JSON.stringify(data)
            } catch (error) {
                faro.api.pushError(error)
            } finally {
                span.end()
            }
        })
    })


    document.getElementById('fetch-fail-btn')?.addEventListener('click', () => {
        const span = tracer.startSpan('FetchData', {
            attributes: { action: 'Fetching data from API (Fail)'}
        })

        context.with(trace.setSpan(context.active(), span), async () => {
            try {
                const response = await fetch('/api/fail')
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const data = await response.json()
                document.getElementById('data-output').textContent = JSON.stringify(data)
            } catch (error) {
                faro.api.pushError(error)
                document.getElementById('data-output').textContent = error.message
            } finally {
                span.end()
            }
        })
    })

}