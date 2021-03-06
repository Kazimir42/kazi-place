require('dotenv').config();

const Pixel = require('../models/Pixel');
const socketIo = require("socket.io");

exports.store = (req, res, next) => {
    delete req.body._id //remove id from request cuz mongodb will generate an id
    const pixel = new Pixel({
        x: req.body.x,
        y: req.body.y,
        color: req.body.color,
        userId: req.body.userId,
        created_at: req.body.created_at,
    });
    pixel.save() //save in mongodb
        .then(() => res.status(201).json( {message: 'ok' }))
        .catch(error => res.status(400).json({ error }))

    let io = req.app.get('socketio');

    io.emit("newPixel", pixel);


};

exports.all = (req, res, next) => {
    Pixel.find()
        .then(pixels => res.status(200).json(pixels))
        .catch(error => res.status(400).json({ error }))
}
