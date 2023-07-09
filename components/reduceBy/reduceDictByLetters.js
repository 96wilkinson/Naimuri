
module.exports = async function reduceDictByLetters(Letters, Arr) {
    try {
        let foundArr = []
        // iterate through the different words
        for (let i = 0; i < Arr.length; i++) {
            let tempArr = Arr[i].toString().split('')
            let tempLettersArr = Letters.toString().split('')

            //iterate through each induvidal letter of that word
            //using negitive for loop so we do not skip over letters
            for (let j = Arr.length; j > -1; j--) {

                //Iterate over each induvidual letter in the given words
                for (let k = Letters.length; k > -1; k--) {

                    //If one element is undefined then just skip
                    if (tempArr[j] === undefined || tempLettersArr[k] === undefined) {
                        continue
                    }

                    // If both iterated words match remove them both
                    if (tempArr[j] == tempLettersArr[k]) {
                        tempArr.splice(j, 1)
                        tempLettersArr.splice(k, 1)
                    }
                    //if it doesnt match the if statmenent just skip out the loop
                    else { continue }
                }
            }

            if (tempArr.length === 0) {
                foundArr.push(Arr[i]);
            }
        }
        return await foundArr
    } catch (error) {
        return error
    }

}