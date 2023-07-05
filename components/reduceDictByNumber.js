module.exports = async function reduceDict(Number, Arr) {
    try {
        let returnArr = []
        for (let i = 0; i < Arr.length; i++) {
            if (await Arr[i].length == Number) {
                returnArr.push(Arr[i])
            }
        }
        return returnArr;
    } catch (error) {
        return error
    }
}