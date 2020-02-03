const { verifyToken } = require("../helpers/jwt");
module.exports = function(req, res, next) {
  try {
    const decoded = verifyToken(req.headers.token);
    req.decoded = decoded;
    next();
  } catch (err) {
    //   name: 'JsonWebTokenError',
    // message: 'jwt must be provided'
    console.log(err);
  }
};
