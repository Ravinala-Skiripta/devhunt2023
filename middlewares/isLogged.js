const { getTokenFromHeader } = require('../utils/getTokenFromHeader')
const { verifyToken } = require('../utils/verifyToken')
const { createCustomError } = require('../errors/custom-error')

const isLogged = (req,res,next) => {
    const token = getTokenFromHeader(req)

    if(!token) {
        return next(createCustomError("There is no token in the header", 500))
    }

    const decodedUser = verifyToken(token)
    req.userAuth = decodedUser.matricule
    req.id = decodedUser.id

    if(!decodedUser) {
        return next(createCustomError("Invalid/Expired token, please log in again", 500))
    } else {
        next()
    }
}

module.exports = { isLogged }