const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (req, res, next) => {
    try {
        const token = JSON.parse(req.headers.authorization).token;

        const decodedToken = jwt.verify(token, process.env.JWT_TOKEN);
        const userId = decodedToken.userId;
        req.auth = { userId }
        if(req.body.userId && req.body.userId != userId) {
            throw 'User ID non valable';
        }else {
            next();
        }

    } catch (error) {
        res.status(401).json({error: error | 'Requete non authentifiée'})
    }
}