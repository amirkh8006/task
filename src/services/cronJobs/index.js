const getData = require("../price")
const mongoService = require('../../db/services/mongo')
const redisService = require('../../db/services/redis')
const CronJob = require('cron').CronJob 


let redisData = []
const functionJob = () => {
    getData()
        .then((data) => {
            let dt = data.current.price_dollar_rl
            mongoService.addDetail({
                p: dt.p,
                h: dt.h,
                l: dt.l,
                d: dt.d,
                dp: dt.dp,
                dt: dt.dt,
                t: dt.t,
                ts: dt.ts
            })
            return dt
        })
        .then((dt) => {
            if (redisData.length >= 10) {
                redisData.push({
                    timeStamp: new Date(),
                    data: dt
                }) 
                redisData.shift()
                return redisService.hset("test", ["data", JSON.stringify(redisData)])
            } else {
                redisData.push({
                    timeStamp: new Date(),
                    data: dt
                }) 
                return redisService.hset("test", ["data", JSON.stringify(redisData)])
            }
        })
        .catch((err) => {
            console.log(err)
        })
}

const job = new CronJob('*/5 * * * * *', () => {
    functionJob() 
})

module.exports = job