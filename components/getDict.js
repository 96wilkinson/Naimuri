const axios = require('axios');
module.exports = async function getDict() {
    try {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: 'http://norvig.com/ngrams/enable1.txt',
            headers: {
                'Content-Type': 'application/json'
            }
        };
        let returnArr = []
        await axios.request(config)
            .then((response) => {
                var array = response.data.toString().split("\n");
                for (i in array) {
                    returnArr.push(array[i]);
                }
            })
            .catch((error) => {
                console.log(error);
            });

        return await returnArr
    } catch (error) {
        return error
    }
}