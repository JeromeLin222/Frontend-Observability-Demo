export function sendCustomEvents(faro) {
    let currentCartLength = "0"

    document.getElementById('add-to-cart-btn')?.addEventListener('click', function () {
        const cartLength = (Math.floor(Math.random() * 10) + 1).toString()
        const cartValue = (Math.floor(Math.random() * 500) + 1).toString()
        currentCartLength = cartLength
        const currentDate = new Date()
        const formattedDate = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-${currentDate.getDate()}`

        faro.api.pushEvent(
            'user click add to cart',
            {
                cartLength: cartLength,
                cartValue: cartValue,
                timeStamp: formattedDate,
            }
        )
        document.getElementById('event-output').innerText = `Event sent: Add to Cart with ${cartLength} items, total value ${cartValue}`
    })

    document.getElementById('checkout-btn')?.addEventListener('click', function () {
        faro.api.pushEvent(
            'user clicked checkout',
            {
                cartLength: currentCartLength,
            },
            'checkout'
        )
        document.getElementById('event-output').innerText = `Event sent: Checkout with ${currentCartLength} items`
    })

}