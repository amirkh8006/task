
let express = require('express')
let app = express();
let cors = require('cors')

app.use(cors())

let http = require('http');
let server = http.Server(app);

let socketIO = require('socket.io');
let io = socketIO(server , {
    cors: {
      origin: "http://localhost:4200",
      credentials: true
    }
});

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});


module.exports = {app , io}
const routes = require('./routes/detail')