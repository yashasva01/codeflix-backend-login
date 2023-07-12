const joi = require('joi')
const httpError = require('http-errors')


function validate(schema) {
    return function(req, res, next) {
      var validation = schema.validate(req.body);
      var error = validation.error;
      if (error) {
        next(httpError(400, error.message));
      } else {
        next();
      }
    };
  }

module.exports =  validate