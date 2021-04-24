const express = require('express');
const app = express();

// Runnig Server
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server Running On Port ${port}`))

module.exports = app
const routes = require('./routes/detail')