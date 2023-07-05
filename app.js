const express = require('express')
const app = express()
const port = 3000

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const getDict = require('./components/getDict.js')
const reduceDictByNumber = require('./components/reduceDictByNumber.js')

app.get('/', async (req, res) => {
    response = await getDict()
    res.send(await response)
})

app.post('/', async (req, res) => {
    let payload = (req.body.body.split(" "))
    fullArray = await getDict(payload[0])
    reducedArrayByNumber = reduceDictByNumber(payload[0],await fullArray)
    res.send(await reducedArrayByNumber)
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})