const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String, required: true },
    phone:{ type: String, required: true },
    create_at: {type: Date, default: Date.now }
});

module.exports = model('User', UserSchema);