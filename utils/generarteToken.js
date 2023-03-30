const jwt = require('jsonwebtoken')

const generateToken = (matricule, email, id, username) => {
    return jwt.sign({ matricule , email , id, username }, process.env.JWT_SECRET, { expiresIn: '1d' } )
}

module.exports = { generateToken }