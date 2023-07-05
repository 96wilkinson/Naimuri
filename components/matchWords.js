
module.exports = async function matchWords(ArrayOfWords) {
    try {
        // find words that match each letter
        let possibleWords = []

        //create inital loop to loop through words
        for (let i = 0; i < ArrayOfWords.length; i++) {
            let initialWord = ArrayOfWords[i].toString().split('')
            let tempWordArray = []
            let tempFoundWordsArray = []
            // Loop over the letters that are not the first letter and see if any words match
            for (let j = 1; j < initialWord.length; j++) {

                // Loop over the possible other words
                for (let k = 0; k < ArrayOfWords.length; k++) {
                    if (initialWord[j] == (ArrayOfWords[k].toString().split(''))[0]) {
                        tempFoundWordsArray.push({ letter: initialWord[j], word: ArrayOfWords[k] })
                    } else { continue }
                }
                tempWordArray.push({ word: initialWord, wordArray: tempFoundWordsArray })
            }
            possibleWords.push(tempWordArray)
        }
        return await possibleWords;

    } catch (error) {
        return error
    }

}