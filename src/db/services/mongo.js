const Promise = require('bluebird')
const Detail = require('../model/Detail');

async function addDetail(data) {
    return new Promise((resolve, reject) => {
        const detail = new Detail(data)

        detail.save()
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            });
    })

}

async function getDetail() {
    return new Promise((resolve, reject) => {
        Detail.find()
            .then((data) => {
                resolve(data)
            })
            .catch((err) => {
                reject(err)
            });
    })
}

module.exports = {
    addDetail,
    getDetail
};