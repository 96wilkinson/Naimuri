
// the point of this function is to get the unique letters out the array that should appear along the diaganal

module.exports = async function countNumberOfLetters(payloadString) {

    try {
        let payloadArray = await payloadString.toString().split('').sort()
        let evenArray = []
        let oddArray = []
        for (let i = 0; i < payloadArray.length; i++) {
            let tempVal = payloadArray.filter(function (letter) {
                //console.log(letter,payloadArray[i])
                return letter == payloadArray[i];
            });
            if (tempVal.length == 1 || !(tempVal.length % 2 == 0)) {
                if (!(oddArray.includes(tempVal[0]))) {
                    oddArray.push(tempVal[0]);
                }
            }
        }
        console.log(await oddArray)
        return (await payloadArray, await oddArray)
    } catch (error) {
        return error
    }
}