const express = require('express')
const app = express()
const port = 3000

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const getDict = require('./components/getDict.js')
const reduceDictByNumber = require('./components/reduceBy/reduceDictByNumber.js')
const reduceDictByLettersNotInPayload = require('./components/reduceBy/reduceDictByLettersNotInPayload.js')
const countNumberOfLetters = require('./components/countLettersInPayLoad.js')
const reduceDictByUniqueLetters = require('./components/reduceBy/reduceDictByUniqueLetters.js')
const matchWords = require('./components/matchBy/matchWords.js')
const matchingOrchestrator = require('./components/matchBy/matchingOrchestrator.js')

app.get('/', async (req, res) => {
    try {
        let body = req.body.body
        console.log(body)
        response = await getDict()
        res.send(await response)
    } catch (error) {
        res.send(error)
    }

})

app.post('/', async (req, res) => {
    try {
        let payload = (req.body.body.split(" "))
        countedNumberOfLetters = await countNumberOfLetters(payload[1])
        fullArray = await getDict(payload[0])
        reducedArrayByNumber = reduceDictByNumber(payload[0], await fullArray)
        reducedDictByLettersNotInPayload = await reduceDictByLettersNotInPayload(payload[1], await reducedArrayByNumber)
        reducedDictByUniqueLetters = await reduceDictByUniqueLetters(await countedNumberOfLetters, await reducedDictByLettersNotInPayload)
        //matchingOrchestratorResult = matchingOrchestrator(await reducedDictByLetters)
        res.send(await reducedDictByUniqueLetters)
    } catch (error) {
        res.send(error)
    }

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})