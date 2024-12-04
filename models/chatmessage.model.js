const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    name: String,
    message: String,
    userId: String
}, {
    timestamps: true, versionKey: false
});

const ChatMessage = model('chat_message', messageSchema);
module.exports = ChatMessage;