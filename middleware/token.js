const jwt = require('jsonwebtoken');

const createToken = (_id) => {
    const jwtkey = process.env.JWT_SECRET;

    return jwt.sign({_id}, jwtkey, { expiresIn: "10d"})
}



module.exports = {
    createToken
}