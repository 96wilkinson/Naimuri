

module.exports = function checkLetersUsed(sentLetters, matchedWord1, matchedWord2, matchedWord3, matchedWord4, matchedWord5, matchedWord6, matchedWord7) {
    try {
        console.log("checker here")
        console.log(sentLetters, matchedWord1, matchedWord2, matchedWord3, matchedWord4, matchedWord5, matchedWord6, matchedWord7)
        let wordsAdded
        if (matchedWord5 == undefined) {
            wordsAdded = matchedWord1 + matchedWord2 + matchedWord3 + matchedWord4
            if (wordsAdded.split('').sort().join() == sentLetters.split('').sort().join()) {
                return true
            } else {
                return false
            }
        } else {
            if (matchedWord7 == undefined) {
                wordsAdded = matchedWord1 + matchedWord2 + matchedWord3 + matchedWord4 + matchedWord5
                if (wordsAdded.split('').sort().join() == sentLetters.split('').sort().join()) {
                    return true
                } else {
                    return false
                }
            } else {
                wordsAdded = matchedWord1 + matchedWord2 + matchedWord3 + matchedWord4 + matchedWord5 + matchedWord6 + matchedWord7
                if (wordsAdded.split('').sort().join() == sentLetters.split('').sort().join()) {
                    console.log(wordsAdded.split('').sort().join() )
                    crossOriginIsolated.log(sentLetters.split('').sort().join())
                    return true
                } else {
                    return false
                }
            }

        }
    } catch (error) {
        throw error
    }
}