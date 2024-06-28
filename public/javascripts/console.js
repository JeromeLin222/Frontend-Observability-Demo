export function setupConsoleInstrumentation(faro) {
    document.getElementById('log-info-btn')?.addEventListener('click', () =>{
        console.info('User clicked the log info button')
        alert('Console Info Log')
    })

    document.getElementById('log-warn-btn')?.addEventListener('click', () => {
        console.warn('User clicked the log warn button')
        alert('Console Warn Log')
    })

    document.getElementById('log-error-btn')?.addEventListener('click', () => {
        console.error('User clicked the log error button')
        alert('Console Error Log')
    })
}