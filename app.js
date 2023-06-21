const express = require('express')
const app = express()

app.use(express.json())

app.use((req, res, next) => {
    req.body.name = 'lassan ' + req.body.name;
    next();
})

app.post('/', (req, res) => {
    const { name } = req.body
    res.json(`hello ${name}`)
})

const port = 5000;
app.listen(port, () => {
    console.log(`app running on port ${port}`);
})