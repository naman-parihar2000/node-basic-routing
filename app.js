const express = require('express')
const app = express()

app.use(express.json())

// app.use((req, res, next) => {
//     req.body.name = 'lassan ' + req.body.name;
//     next();
// })

// app.post('/', (req, res) => {
//     const { name } = req.body
//     res.json(`hello ${name}`)
// })

const tourRouter = express.Router()

tourRouter.get('/', (req, res) => {
    res.json(`Tours Page`)
})

tourRouter.get('/:id', (req, res) => {
    res.json(`The id for the tour selected ${req.params.id}`)
})

app.use('/tours', tourRouter)

const port = 5000;
app.listen(port, () => {
    console.log(`app running on port ${port}`);
})