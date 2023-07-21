
const matchFourLetterWordsFunc = require('./matchFourLetterWords')
const matchFiveLetterWordsFunc = require('./matchFiveLetterWords')
const matchSevenLetterWordsFunc = require('./matchSevenLetterWords')


module.exports = async function matchOrchestrator(wordArrays, lengthOfWord, lettersUsed) {
    try {
        switch (await lengthOfWord) {
            case '4':
                return await matchFourLetterWordsFunc(wordArrays,  lettersUsed)
            case '5':
                return await matchFiveLetterWordsFunc(wordArrays, lettersUsed)
            case '7':
                return await matchSevenLetterWordsFunc( lettersUsed)
                //return await matchSevenLetterWordsFunc(wordArrays, await arrays, lettersUsed)
            default:
                return "entered number is not available as of yet"
        }
    } catch (error) {
        throw error
    }
}