//server set up
const express = require('express')
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());
const categories = require('./data/categories.json');
const courses = require('./data/courses.json');



app.get('/', (req, res) => {
    res.send('learning api runnning')
})


app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = categories.find(category => category.id === id);
    res.send(selectedCourse);
})

app.listen(port, () => {
    console.log("codecamp server running on port", port)
})