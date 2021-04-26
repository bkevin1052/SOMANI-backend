const { Schema, model } = require('mongoose');

const ServiceSchema = new Schema({
    servicename: { type: String, required: true },
    description: { type: String, required: true },
    items: { type: String, required: true },
    create_at: {type: Date, default: Date.now }
});

module.exports = model('Service', ServiceSchema);