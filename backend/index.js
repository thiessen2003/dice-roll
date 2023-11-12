const express = require('express')

const cors = require('cors')

const app = express() 

app.use(cors())

app.get('/random', (req, res) => {
    const randomNumber = Math.floor((Math.random() * 6) + 1);

    res.json({randomNumber});
})

const port = 5000
const host = 'localhost'
app.listen(port, host, () => {
    console.log(`Example app listening on port ${port}`)   
})