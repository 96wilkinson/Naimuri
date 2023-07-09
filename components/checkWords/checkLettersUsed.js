

module.exports = function checkLetersUsed(matchedWord1, matchedWord2, matchedWord3, matchedWord4, sentLetters) {
    try {
        let wordsAdded = matchedWord1 + matchedWord2 + matchedWord3 + matchedWord4
        if (wordsAdded.split('').sort().join() == sentLetters.split('').sort().join()) {
            return true
        } else {
            return false
        }
    } catch (error) {
        throw error
    }
}