const matchWords = require('./matchWords')

module.exports = async function matchingOrchestrator(ListOfWords) {
    try {
        //Need to go through array of possible words
        let word = "rose".split('')
        let matchedWords = await matchWords(word, await ListOfWords, 1)
        
        // What mix of words uses all the letters
        await matchedWords.push({letter: "r", words: ["rose"]})
        console.log( await matchedWords)
        return await matchedWords
    } catch (error) {

    }

}