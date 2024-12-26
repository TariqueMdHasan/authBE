const jwt  = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.header('Authorizartion')?.split(' ')[1];
    try{
        if(!token){
            return res.status(401).json({ message: 'Unauthorize' });
        }
        const decoded = jwt.verify(token, process.env.jwt_SECRET);
        req.user = decoded;
        next();
    }catch(error){
        console.log('authMiddleware getting some error', error);
    }
}

module.exports = authMiddleware;