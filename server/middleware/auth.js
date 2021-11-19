const jwt = require('jsonwebtoken')

// create a middleware
const auth = (req, res, next) => {
    const token = req.header('x-access-token');

    if (!token){
        return res.status(406).json( { err : "No authentication token, authorization denied"})
    }

    const verified = jwt.verify(token, process.env.JWT_SECRET)

    if(!verified) 
        return res.status(406).json({ err: "Token verification failed, authorization denied"});

    req.user_id = verified.id;
    next()
}

module.exports = auth