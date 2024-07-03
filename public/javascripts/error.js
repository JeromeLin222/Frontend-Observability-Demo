export function setupErrorInstrumentation(faro) {
    document.getElementById('uncaught-error-btn')?.addEventListener('click', () => {
        alert('Trigger uncaught error')
        console.log(a) //a is not defined
    })

    document.getElementById('caught-error-btn')?.addEventListener('click', () => {
        try {
            console.log(b) //b is not defined
        } catch (error) {
            console.log(error)
            faro.api.pushError(error)
            alert('Trigger caught error')
        }
    })
}