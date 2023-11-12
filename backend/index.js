const express = require('express')

const cors = require('cors')

const app = express() 

app.use(cors())

app.get('/', (req, res) => {
    console.log('Message Sent!')
    res.send('Hello world!')
})

const port = 5000
const host = 'localhost'
app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`)   
})