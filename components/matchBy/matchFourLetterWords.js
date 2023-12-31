
const wordChecker = require('../checkWords/checkIfSameWord')
const lettersChecker = require('../checkWords/checkLettersUsed')

module.exports = async function matchFourLetterWords(wordArrays, lettersUsed) {
    let arrays = {}
    
    for (let i = 0; i < await wordArrays.length; i++) {

        let initialWord = await wordArrays[i].toString().split('')
        arrays[1] = await initialWord
        let jArray = await wordArrays

        for (let j = 0; j < await jArray.length; j++) {

            if (wordChecker(wordArrays[j], wordArrays[i]) == false) {
                testWordJ = await wordArrays[j].toString().split('')
                arrays[2] = await testWordJ

                if (arrays[1][1] == arrays[2][0]) {
                    let kArray = await jArray

                    for (let k = 0; k < kArray.length; k++) {

                        if (wordChecker(wordArrays[j], wordArrays[k]) == false) {
                            testWordK = wordArrays[k].toString().split('')
                            arrays[3] = testWordK

                            if (arrays[1][2] == arrays[3][0] && arrays[2][2] == arrays[3][1]) {
                                let xArray = await kArray

                                for (let x = 0; x < xArray.length; x++) {

                                    if (wordChecker(wordArrays[x], wordArrays[k]) == false) {
                                        testWordX = wordArrays[x].toString().split('')
                                        arrays[4] = testWordX

                                        if (arrays[1][3] == arrays[4][0] && arrays[2][3] == arrays[4][1] && arrays[3][3] == arrays[4][2]) {
                                            let checked = await lettersChecker(lettersUsed,wordArrays[i], wordArrays[j], wordArrays[k], wordArrays[x])
                                            
                                            if (await checked == true) {
                                                
                                                let returnJson = {
                                                    line1: arrays[1].toString().split(",").join(""),
                                                    line2: arrays[2].toString().split(",").join(""),
                                                    line3: arrays[3].toString().split(",").join(""),
                                                    line4: arrays[4].toString().split(",").join("")
                                                }
                                                return await returnJson
                                            } else { continue }
                                        } else {
                                            continue
                                        }
                                    } else { continue }
                                }
                            } else { continue }
                        } else { continue }
                    }
                } else { continue }
            } else { continue }
        }
    }
}