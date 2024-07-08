const express = require('express')
const { engine } = require('express-handlebars')

const app = express()
const port = 3000

app.engine('.hbs', engine({ extname: '.hbs' }))
app.set('view engine', '.hbs')
app.set('views', './views')

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/console', (req, res) => {
    res.render('console');
})

app.get('/event', (req, res) => {
    res.render('event')
})

app.get('/error', (req, res) => {
    res.render('error');
})

app.get('/traces', (req, res) => {
    res.render('traces')
})

app.get('/api/data', (req, res) => {
    res.json({ data: 'Sample data fetched from APi'})
})

app.get('/api/fail', (req, res) => {
    res.status(500).json({error: 'Failed to fetch data'})
})

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})