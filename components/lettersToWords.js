module.exports = function name(letter, ArrayOfWords) {
    try {
        let returnArray=[]
        for(i=0;i<ArrayOfWords.length;i++){
            firstWordOfWord = (ArrayOfWords[i].toString().split(''))[0]
            if(letter == firstWordOfWord){
                returnArray.push(ArrayOfWords[i])
            } else {continue}
        }
        return returnArray
        
    } catch (error) {
        return error
    }
    
}