

module.exports = async function reduceDictByUniqueLetters(arrayOfUniqueLetters, remainingWordsArray) {
    try {
        let arrayOfWordsContainingUniqueLetters = []
        for (let i = 0; i < remainingWordsArray.length; i++) {
            tempValForWord = remainingWordsArray[i].split('')
            for (let j = 0; j < tempValForWord.length; j++) {
                switch (tempValForWord[j]) {
                    case tempValForWord[j].includes(arrayOfUniqueLetters):
                        arrayOfWordsContainingUniqueLetters.push(remainingWordsArray[i])
                        break;

                    default:
                        break;
                }
            }
        }
        return await arrayOfWordsContainingUniqueLetters
    } catch (error) {
        return (error)
    }
}