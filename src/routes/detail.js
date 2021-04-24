const app = require('../app')
const axios = require('axios')
const job = require('../services/server')
const mongoService = require('../db/services/mongo')
const redisService = require('../db/services/redis')


// JOB ROUTES
app.get('/startJob', async (req, res) => {
    job.start()
    res.send("Job Started...")
})

app.get('/stopJob', async (req, res) => {
    job.stop()
    res.send("Job Stoped...")
})


//Get Data
app.get('/getData', async (req, res) => {
    try {
        const response = await axios.get('https://call14.tgju.org/ajax.json?2021042411-20210424112300-l2CJHyUf9eOGYaS0rTAt');
        console.log();
        res.send(response.data)
    } catch (error) {
        console.error(error);
    }
})

app.get('/getDataFromDB', async (req, res) => {
    const dt = await mongoService.getDetail();
    res.send(dt)
})

app.get('/getDataFromRedis', async (req, res) => {
    const dt = await redisService.hget("test", "data");
    res.send(JSON.parse(dt))
})