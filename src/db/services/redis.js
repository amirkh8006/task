const client = require('../driver/redis/connection')


function hset(key, val) {
    return new Promise((resolve, reject) => {
        client.hset(key, val, (err, rep) => {
            if (err)
                reject(err)
            resolve(rep)
        })
    })
}

function hget(key, val) {
    return new Promise((resolve, reject) => {
        client.hget(key, val, (err, rep) => {
            if (err)
                reject(err)
            resolve(rep)
        })
    })
}


module.exports = {
    hset,
    hget
}