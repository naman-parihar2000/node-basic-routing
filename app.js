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

const tourRouter = require('./routes/toursRoute')
const userRouter = require('./routes/usersRouter')

app.use('/tours', tourRouter)
app.use('/users', userRouter)

const port = 5000;
app.listen(port, () => {
    console.log(`app running on port ${port}`);
})