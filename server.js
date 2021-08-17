const express = require('express')
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())

const userData = [
    {name: 'coro'},
    {name: 'jangkrik'}
]

app.get('/users', (req, res) => {
    res.json({
        success: true,
        message: 'it is success',
        users: userData
    })
})

app.get('/users/:id', (req, res) => {
    console.log(req.params.id)
    res.json({
        success: true,
        message: 'it is success',
        user: req.params.id
    })
})
app.post('/login', (req, res) => {
    const username = req.body.name
    const password = req.body.password

    const user = 'joko'
    const pass = '123456'

    if (username === user && password === pass) {
        res.json({
            success: true,
            message: 'success again',
            token: 'token goes here'
        })
    } else {
        res.json({
            success: false,
            message: 'wrong user or password'
        })
    }
})
app.listen(8000, () => {
    console.log('listening to port 8000')
})