const jwt = require('jsonwebtoken');

// varify token 

const varifyAuth = async (req, res, next) => {
    try {
        const token = req.body.token || req.query.token || req.params.token || req.cookies.token;

        if (!token) {
            throw new Error('Token not found.');
        }
        const verifiedToken = await jwt.verify(token, 'yourSecretKey');
        req.userId = verifiedToken._id
        next();
    } catch (error) {
        res.status(401).send('Authentication failed: ' + error.message);
    }
};

module.exports = varifyAuth;
