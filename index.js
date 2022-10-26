const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json');


app.get('/', (req, res) => {
    res.send('learning api runnning')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.listen(port, () => {
    console.log("codecamp server running on port", port)
})