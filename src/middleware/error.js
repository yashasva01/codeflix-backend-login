var httpErrors = require("http-errors");
var HttpError = httpErrors.HttpError;
var isHttpError = httpErrors.isHttpError;


var axios = require("axios");
var AxiosError = axios.AxiosError;

function errorHandler(error, req, res, next){
  if (isHttpError(error)) {
    // handle http errors
    return res.status(error.statusCode).json(error.message);
  } else if (error instanceof AxiosError) {
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    } else {
      return res.status(500).json({
        message:
          "Internal Server Error: Something went wrong. Please try again later.",
      });
    }
  } else {
    return res.status(500).json({
      message:
        "Internal Server Error: Something went wrong. Please try again later.",
    });
  }
}

module.exports = errorHandler