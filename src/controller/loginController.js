const services = require('../services/loginServices')

async function loginUser(req, res, next) {
    try{
        const {userName, password} = req.body;
    }
    catch(error){
        next(error);
    }
}

async function createUser(req, res, next) {
    try{
        const {userName, password, role} = req.body;
        res.send("This is user creation")
    }
    catch(error){
        next(error)
    }
}

async function deleteUser(req, res, next) {
    try{
        const {userName, passwrod} = req.body;
    }
    catch(error){
        next(error)
    }
}
    


module.exports = {
    loginUser,
    createUser,
    deleteUser
}