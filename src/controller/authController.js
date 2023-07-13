const services = require('../services/authService')

async function authenticateToken (req, res, next) {
    try{
        const accessToken = req.headers['authorization'];
        const resData = await services.authenticateTokenService(accessToken);
        res.status(200).json(resData)
    }
    catch(error){
        next(error)
    }
}

module.exports = {
    authenticateToken
}