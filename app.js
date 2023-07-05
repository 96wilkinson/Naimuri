const express = require('express')
const app = express()
const port = 3000

const getDict = require('./components/getDict.js')

app.get('/', async (req, res) => {
    response = await getDict()
    res.send(await response)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})