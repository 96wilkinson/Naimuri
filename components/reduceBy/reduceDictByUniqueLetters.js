

module.exports = async function reduceDictByUniqueLetters(arrayOfUniqueLetters, remainingWordsArray) {
    try {
        let arrayOfWordsContainingUniqueLetters = []
        for (let i = 0; i < remainingWordsArray.length; i++) {
            tempValForWord = remainingWordsArray[i].split('')
            for (let j = 0; j < tempValForWord.length; j++) {

                //console.log(tempValForWord[j],arrayOfUniqueLetters)
                if (arrayOfUniqueLetters.includes(tempValForWord[j])) {
                    arrayOfWordsContainingUniqueLetters.push(remainingWordsArray[i])
                } else {continue}
            }
        }
        return await arrayOfWordsContainingUniqueLetters
    } catch (error) {
        return (error)
    }
}