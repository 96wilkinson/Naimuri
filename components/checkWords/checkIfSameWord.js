
module.exports = function checkIfTheSameWord(word1, word2) {
    try {
        if (word1 == word2) {
            return true
        } else {
            return false
        }
    } catch (error) {
        throw error
    }
}