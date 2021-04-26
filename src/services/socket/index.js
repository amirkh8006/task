const getData = require("../price/index")
let express = require('express')
let app = express() 
let cors = require('cors')

app.use(cors())

let http = require('http') 
let server = http.Server(app) 

let socketIO = require('socket.io') 
let io = socketIO(server , {
    cors: {
      origin: "http://localhost:4200",
      credentials: true
    }
}) 

io.on('connection', (socket) => {
    console.log('user connected') 
    getData().then((dt)=>{
        socket.emit("test" , dt) 
    })
    .catch((error) => {
        // handle error
        console.log(error) 
    })
}) 
