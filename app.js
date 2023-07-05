const express = require('express')
const app = express()
const port = 3000

app.get('/', async (req, res) => {

    res.send("Hey")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})