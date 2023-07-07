

module.exports = async function reduceDictByUniqueLetters(arrayOfUniqueLetters, remainingWordsArray) {
    try {
        let arrayOfWordsContainingUniqueLetters = []
        for (let i = 0; i < remainingWordsArray.length; i++) {
            tempValForWord = remainingWordsArray[i].split('')
            let truthVar = []
            for (let j = 0; j < tempValForWord.length; j++) {
                // create array of if it contains unique letter add to array true. if more  than 1 true dont add it
                console.log(tempValForWord[j], arrayOfUniqueLetters)
                if (arrayOfUniqueLetters.includes(tempValForWord[j])) {
                    truthVar.push(true)
                } else {
                    truthVar.push(false)
                }
            }
            if (truthVar.filter(x => x == true).length == 1) {
                arrayOfWordsContainingUniqueLetters.push(remainingWordsArray[i])
            } else { continue }

        }
        return await arrayOfWordsContainingUniqueLetters
    } catch (error) {
        return (error)
    }
}