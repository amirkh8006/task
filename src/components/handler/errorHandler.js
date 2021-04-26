const Promise = require('bluebird')

const errorHandler = (res, statusCode, error) => {
    return new Promise((resolve, reject) => {
        if (!message) {
            return resolve(res.status(statusCode).send({
                error
            }))
        }else{
            return resolve(res.status(statusCode).send({
                error
            }))
        }
    })
}

module.exports = {errorHandler}