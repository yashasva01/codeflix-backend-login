const express = require('express');
const router = express.Router();
const requestSchemas = require('../middleware/schemas')
const authController = require('../controller/authController')
const validate = require('../middleware/validator')

router.get('/authenticateToken', validate(requestSchemas.authTokenSchema), authController.authenticateToken)


module.exports = router