const matchLettersToWords = require("./lettersToWords.js");

module.exports = async function matchWords(initialWord, ArrayOfWords, increment) {
    try {
        // find words that match each letter
        let possibleWords = []

        for (let j = increment; j < initialWord.length; j++) {
            matchedLettersToWords = await matchLettersToWords(initialWord[j], ArrayOfWords)
            possibleWords.push({ "letter": initialWord[j], "words": await matchedLettersToWords })
        }
        return await possibleWords;

    } catch (error) {
        console.log(error)
        return error
    }

}