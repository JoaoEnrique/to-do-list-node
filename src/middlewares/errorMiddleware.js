const errorMiddleware = (error, req, res, next) => {
    error.statusCode = error.statusCode ?? 500
    console.log(error);
    return res.status(error.statusCode).json({
        message: error.message,
        statusCode: error.statusCode,
    });
}

module.exports = errorMiddleware
