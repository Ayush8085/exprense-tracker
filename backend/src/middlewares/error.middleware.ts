import { ErrorRequestHandler } from "express";

const errorMiddleware: ErrorRequestHandler = async (err, req, res, next) => {
    const statusCode = res.statusCode || 500;

    res.status(statusCode).json({
        message: err.message,
        stack: err.stack,
    })
}

export default errorMiddleware;