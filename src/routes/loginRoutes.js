const express = require('express');
const router = express.Router();
const loginController = require('../controller/loginController')
const requestSchemas = require('../middleware/schemas')
const validate = require('../middleware/validator')


router.post('/createUser',
validate(requestSchemas.userCreationSchema), 
loginController.createUser)

router.post('/loginUser',
validate(requestSchemas.userLoginSchema), 
loginController.loginUser)

router.post('/deleteUser',
validate(requestSchemas.userDeletionSchema),
loginController.deleteUser)

module.exports = router;