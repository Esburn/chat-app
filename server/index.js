
const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');

app.use(cors());

const server = http.createServer(app);

app.get('/', (req,res) => {
    res.send('hello world');
});

server.listen(4100, () => 'Server running en el puerto 4100');