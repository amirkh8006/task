const Promise = require('bluebird')

const successHandler = (res, statusCode, result, message) => {
    return new Promise((resolve, reject) => {
        if (!message) {
            return resolve(res.status(statusCode).send(
                result
            ))
        }else{
            return resolve(res.status(statusCode).send({
                result,
                message:message
            }))
        }
    })
}

module.exports = {successHandler}