const jwt = require("jsonwebtoken");
const authentication = async function (req, res, next) {
  let userId = req.params.userId;
  let token = req.headers["x-Auth-token"];
  if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error. This means the user is not logged in.
  if (!token) return res.send({ status: false, msg: "token must be present" });
  console.log(token);
  let decodedToken = jwt.verify(token, "functionup-technetium-very-very-secret-key");
  if (!decodedToken) {
      return res.send({ status: false, msg: "token is invalid" });
  }
  else if (decodedToken.userId != userId) {  
      return res.send({ status: false, msg: "User not Authorized" });
  }
    next()
}
module.exports.authentication=authentication;