const jwt = require("jsonwebtoken");
const secret = "shyaba$123@$";
const sessionIdToUseMap = new Map();

function setUser(user) {
    // sessionIdToUseMap.set(id, user);


    const payload = {
        id:user._id,
        email:user.email,
    };

    return jwt.sign(payload,secret, { expiresIn: "1h" })
}

function getUser(token){
//    return sessionIdToUseMap.get(id); 
    if(!token) return null;
   try {
    return jwt.verify(token, secret);
  } catch (err) {
    console.error("JWT verification failed:", err.message);
    return null;
  }
}

module.exports = {
    setUser , getUser
}