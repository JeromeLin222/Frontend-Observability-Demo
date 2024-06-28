export function setupErrorInstrumentation(faro) {
    document.getElementById('uncaught-error-btn')?.addEventListener('click', () => {
        alert('Trigger uncaught error')
        throw new Error('Uncaught test error')
    })

    document.getElementById('caught-error-btn')?.addEventListener('click', () => {
        try {
            console.log(c) //c is not defined
        } catch (error) {
            faro.api.pushError(error)
            alert('Trigger caught error')
        }
    })
}