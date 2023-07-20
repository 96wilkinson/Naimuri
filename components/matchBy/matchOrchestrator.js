
const arrayCreator = require('./arrayCreator')
const matchFourLetterWordsFunc = require('./matchFourLetterWords')
const matchFiveLetterWordsFunc = require('./matchFiveLetterWords')


module.exports = async function matchOrchestrator(wordArrays, lengthOfWord, lettersUsed) {
    try {
        let arrays = await arrayCreator(await lengthOfWord);
        switch (await lengthOfWord) {
            case '4':
                return await matchFourLetterWordsFunc(wordArrays, await arrays, lettersUsed)
            case '5':
                return await matchFiveLetterWordsFunc(wordArrays, await arrays, lettersUsed)
            default:
                return "entered number is not available as of yet"
        }
    } catch (error) {
        throw error
    }
}