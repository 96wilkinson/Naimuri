
const wordChecker = require('../checkWords/checkIfSameWord')
const lettersChecker = require('../checkWords/checkLettersUsed')

module.exports = async function matchSevenLetterWords(lettersUsed) {
    console.log("run seven letter words")

    let wordArrays = ["bravado",
        "renamed" ,
        "analogy" ,
        "valuers" ,
        "amoebas" ,
        "degrade" ,
        "odyssey" ]
    let arrays = {
        1: [],
        2: [],
        3: [],
        4: [],
        5: [],
        6: [],
        7: []
    }
    //1
    try {
        for (let i = 0; i < await wordArrays.length; i++) {

            let initialWord = await wordArrays[i].toString().split('')
            arrays[1] = await initialWord
            let jArray = await wordArrays

            //2
            for (let j = 0; j < await jArray.length; j++) {

                if (wordChecker(wordArrays[j], wordArrays[i]) == false) {
                    testWordJ = await wordArrays[j].toString().split('')
                    arrays[2] = await testWordJ

                    if (arrays[1][1] == arrays[2][0]) {
                        let kArray = await jArray

                        //3
                        for (let k = 0; k < kArray.length; k++) {

                            if (wordChecker(wordArrays[j], wordArrays[k]) == false) {
                                testWordK = wordArrays[k].toString().split('')
                                arrays[3] = testWordK
                                if (arrays[1][2] == arrays[3][0] && arrays[2][2] == arrays[3][1]) {
                                    let xArray = await kArray

                                    //4
                                    for (let x = 0; x < xArray.length; x++) {

                                        if (wordChecker(wordArrays[x], wordArrays[k]) == false) {
                                            testWordX = wordArrays[x].toString().split('')
                                            arrays[4] = testWordX

                                            if (arrays[1][3] == arrays[4][0] && arrays[2][3] == arrays[4][1] && arrays[3][3] == arrays[4][2]) {
                                                let yArray = await xArray

                                                //5
                                                for (let y = 0; y < yArray.length; y++) {

                                                    if (wordChecker(wordArrays[y], wordArrays[x]) == false) {
                                                        testWordY = wordArrays[y].toString().split('')
                                                        arrays[5] = testWordY

                                                        if (arrays[1][4] == arrays[5][0] && arrays[2][4] == arrays[5][1] && arrays[3][4] == arrays[5][2] && arrays[4][4] == arrays[5][3]) {
                                                            let zArray = await yArray

                                                            //6
                                                            for (let z = 0; z < zArray.length; z++) {
                                                                
                                                                if (wordChecker(wordArrays[z], wordArrays[y]) == false) {
                                                                    testWordZ = wordArrays[z].toString().split('')
                                                                    arrays[6] = testWordZ

                                                                    if (arrays[1][5] == arrays[6][0] && arrays[2][5] == arrays[6][1] && arrays[3][5] == arrays[6][2] && arrays[4][5] == arrays[6][3] && arrays[5][5] == arrays[6][4]) {
                                                                        let tArray = await zArray

                                                                        //7
                                                                        for (let t = 0; t < tArray.length; t++) {

                                                                            if (wordChecker(wordArrays[t], wordArrays[z]) == false) {
                                                                                testWordT = wordArrays[t].toString().split('')
                                                                                arrays[7] = testWordT
                                                                                console.log("here")
                                                                                //if (arrays[1][6] == arrays[7][0] && arrays[2][6] == arrays[7][1] && arrays[3][6] == arrays[7][2] && arrays[4][6] == arrays[7][3] && arrays[5][6] == arrays[7][5] && arrays[6][6] == arrays[7][6]) {
                                                                                    let checked = lettersChecker(lettersUsed, wordArrays[i], wordArrays[j], wordArrays[k], wordArrays[x], wordArrays[y], wordArrays[z], wordArrays[t])

                                                                                    if (checked == true) {

                                                                                        let returnJson = {
                                                                                            line1: arrays[1].toString().split(",").join(""),
                                                                                            line2: arrays[2].toString().split(",").join(""),
                                                                                            line3: arrays[3].toString().split(",").join(""),
                                                                                            line4: arrays[4].toString().split(",").join(""),
                                                                                            line5: arrays[5].toString().split(",").join(""),
                                                                                            line6: arrays[6].toString().split(",").join(""),
                                                                                            line7: arrays[7].toString().split(",").join("")
                                                                                        }
                                                                                        return await returnJson
                                                                                    } else { continue }
                                                                               // } else { continue }
                                                                            } else { continue } //6
                                                                        }
                                                                    } else { continue }
                                                                } else { continue } //5
                                                            }
                                                        } else { continue }
                                                    } else { continue } //4
                                                }
                                            } else { continue }
                                        } else { continue } //3
                                    }
                                } else { continue }
                            } else { continue } //2
                        }
                    } else { continue }
                } else { continue } //1
            }
        }
    } catch (error) {
        throw error
    }

}