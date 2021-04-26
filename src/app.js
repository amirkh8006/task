
let express = require('express')
let app = express();
let cors = require('cors')

app.use(cors())

let http = require('http');
let server = http.Server(app);

const servers = require("./services/socket/index")

app.use('/job', require('./routes/detail'))

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`started on port: ${port}`);
});



