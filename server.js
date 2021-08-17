const express = require('express')
const app = express()

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
app.listen(8000, () => {
    console.log('listening to port 8000')
})