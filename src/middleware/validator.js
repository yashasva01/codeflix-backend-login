const joi = require('joi')
const httpError = require('http-errors')


const validator = (schema) => (req, res, next) => {
      var validation = schema.validate(req.body)
      const {error} = schema.validate(req.body);
      if (error) {
        next(httpError(400, error.message));
      } else {
        next();
      }
};


module.exports =  validator