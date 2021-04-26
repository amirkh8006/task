const express = require('express');
const router = express.Router();
const job = require('../services/cronJobs/index')
const mongoService = require('../db/services/mongo')
const redisService = require('../db/services/redis')
const {
    successHandler
} = require('../components/handler/successHandler')
const {
    errorHandler
} = require('../components/handler/errorHandler')
const getData = require("../services/price/index")


// JOB ROUTES

router
    .get('/startJob', async (req, res) => {
        job.start()
        // return res.send("Job Started...")
        return successHandler(res, 200, "Job Started...")
    })
    .get('/stopJob', async (req, res) => {
        job.stop()
        return successHandler(res, 200, "Job Stoped...")
    })
    .get('/jobStatus', async (req, res) => {
        const status = job.running
        if (!status) {
            return successHandler(res, 200, "Job Has Stopped...")
        } else {
            return successHandler(res, 200, "Job Is Running...")
        }
    })
    .get('/getData', async (req, res) => {
        getData().then((data) => {
            return successHandler(res, 200, data)
        }).catch(err => {
            return errorHandler(res, 400, err)
        })
    })
    .get('/getDataFromDB', async (req, res) => {
        mongoService.getDetail().then((dt) => {
                return successHandler(res, 200, dt)
            })
            .catch(err => {
                return errorHandler(res, 400, err)
            })
    })
    .get('/getDataFromRedis', async (req, res) => {
        redisService.hget("test", "data").then((dt) => {
                return successHandler(res, 200, dt)
            })
            .catch(err => {
                return errorHandler(res, 400, err)
            })
    })

module.exports = router;