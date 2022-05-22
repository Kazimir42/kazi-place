const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator')

const pixelSchema = mongoose.Schema({
    x: { type: Number, required: true },
    y: { type: Number, required: true },
    color: { type: String, required: true },
    userId: { type: Number, required: true },
    created_at: { type: Date, required: true }
});

pixelSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Pixel', pixelSchema);