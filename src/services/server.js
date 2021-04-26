const CronJob = require('cron').CronJob;
const axios = require('axios');
const mongoService = require('../db/services/mongo');
const redisService = require('../db/services/redis');
const {io} = require('../app')


let redisData = []
const job = new CronJob('*/5 * * * * *', function () {

    axios.get('https://call14.tgju.org/ajax.json?2021042411-20210424112300-l2CJHyUf9eOGYaS0rTAt')
        .then(async function (response) {
            // handle success
            let dt = response.data.current.price_dollar_rl
            await mongoService.addDetail({
                p: dt.p,
                h: dt.h,
                l: dt.l,
                d: dt.d,
                dp: dt.dp,
                dt: dt.dt,
                t: dt.t,
                ts: dt.ts
            })
        })
        .then(() => {
            if (redisData.length >= 10) {
                redisData.push({
                    timeStamp: new Date(),
                    data: dt
                });
                redisData.shift();
                await redisService.hset("test", ["data", JSON.stringify(redisData)])
            } else {
                redisData.push({
                    timeStamp: new Date(),
                    data: dt
                });
                await redisService.hset("test", ["data", JSON.stringify(redisData)])
            }
        })
        .then((result) => {
            return resolve(result)
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
});

io.on('connection', (socket) => {
    console.log('user connected');
    axios.get('https://call14.tgju.org/ajax.json?2021042411-20210424112300-l2CJHyUf9eOGYaS0rTAt')
    .then(async function (response) {
        // handle success
        let dt = response.data
        socket.emit("test" , dt);

    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
});

module.exports = job