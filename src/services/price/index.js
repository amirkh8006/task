const Promise = require('bluebird')
const axios = require('axios');

const getData = () => {
    return new Promise((resolve, reject) => {
        axios.get('https://call14.tgju.org/ajax.json?2021042411-20210424112300-l2CJHyUf9eOGYaS0rTAt')
        .then((response) => {
            // handle success
            return resolve(response.data)
        }).catch((error) => {
            // handle error
            return reject(error)
        })
    })
}

module.exports = getData
