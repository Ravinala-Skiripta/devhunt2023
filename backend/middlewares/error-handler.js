const { CustomErrorApi } = require("../errors/custom-error")

const errorHandlerMiddleware = (err,req,res,next) => {
    // console.log(err)
    if (err instanceof CustomErrorApi){
        return res.status(err.statusCode).json({ message: err.message })
    }
    return res.status(500).json({ err })
}

module.exports = { errorHandlerMiddleware }