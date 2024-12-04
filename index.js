const http = require('node:http');
const socketIO = require('socket.io');

const ChatMessage = require('./models/chatmessage.model');
const app = require('./app');

// Config .env
require('dotenv').config();

// Config BD
require('./config/db');

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

// Config Socket.io
const io = socketIO(server, {
    cors: { origin: '*' }
});

io.on('connection', async (socket) => {
    socket.broadcast.emit('chat_message_server', {
        name: 'INFO',
        message: 'Se ha conectado un nuevo usuario'
    });

    // Recupero los 5 ultimos mensajes
    const messages = await ChatMessage.find().sort('-createdAt').limit(5);

    // Emito el evento chat_init
    socket.emit('chat_init', {
        socket_id: socket.id,
        arrMessages: messages
    })


    // Emitimos el número de clientes conectados
    io.emit('clients_count', io.engine.clientsCount);

    // Me subscribo para recibir los mensajes del chat
    socket.on('chat_message', (data) => {
        ChatMessage.create(data);
        io.emit('chat_message_server', data);
    });

    // Me subscribo para detectar las desconexiones
    socket.on('disconnect', () => {
        io.emit('chat_message_server', {
            name: 'INFO',
            message: 'Se ha desconectado un usuario'
        });
        io.emit('clients_count', io.engine.clientsCount);
    });
});