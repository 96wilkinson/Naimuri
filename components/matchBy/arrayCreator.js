
function arrayCreator(lengthOfWord) {
    let objectVar = {}
    switch (lengthOfWord) {
        case 4:
            objectVar = {
                1: [],
                2: [],
                3: [],
                4: []
            }
            break;
        case 5:
            objectVar = {
                1: [],
                2: [],
                3: [],
                4: [],
                5: []
            }
            break;
        case 6:
            objectVar = {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: []
            }
            break;
        case 7:
            objectVar = {
                1: [],
                2: [],
                3: [],
                4: [],
                5: [],
                6: [],
                7: []
            }
            break;
        default:
            break;
    }
    return objectVar
}