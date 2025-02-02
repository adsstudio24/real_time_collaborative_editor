const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: '*' } });

let content = '';

io.on('connection', (socket) => {
    socket.emit('loadContent', content);

    socket.on('updateContent', (newContent) => {
        content = newContent;
        io.emit('loadContent', content);
    });
});

server.listen(5000, () => console.log('Редактор працює на порту 5000'));
