

module.exports = function checkLetersUsed(sentLetters, matchedWord1, matchedWord2, matchedWord3, matchedWord4, matchedWord5) {
    try {
        let wordsAdded
        if (matchedWord5 == undefined) {
            wordsAdded = matchedWord1 + matchedWord2 + matchedWord3 + matchedWord4
            if (wordsAdded.split('').sort().join() == sentLetters.split('').sort().join()) {
                return true
            } else {
                return false
            }
        } else {
            wordsAdded = matchedWord1 + matchedWord2 + matchedWord3 + matchedWord4 + matchedWord5
            if (wordsAdded.split('').sort().join() == sentLetters.split('').sort().join()) {
                return true
            } else {
                return false
            }
        }
    } catch (error) {
        throw error
    }
}