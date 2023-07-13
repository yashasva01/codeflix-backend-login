const services = require('../services/loginServices')

async function loginUser(req, res, next) {
    try{
        const {userName, password} = req.body;
        const resData = await services.userLogin(userName, password)
        res.status(200).json(resData)
    }
    catch(error){
        console.log(error)
        next(error);
    }
}

async function createUser(req, res, next) {
    try{
        const {userName, password, role, name} = req.body;
        const resData = await services.userCreation(userName, password, role, name);
        res.status(200).json(resData)
    }
    catch(error){
        console.log(error.message);
        next(error)
    }
}

async function deleteUser(req, res, next) {
    try{
        const {userName, password} = req.body;
        const resData = await services.userDeletion(userName, password)
        res.status(200).json(resData)
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