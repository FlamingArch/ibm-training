const errorHandler =(error,_, res,next) =>{ //since i'm not interested in the request object so i will write _

    const statusCode = res.statusCode<400? 500: res.statusCode

    res.status(statusCode)
    res.json({
        message: error.message,
        stack:error.stack
    })
}
export default errorHandler