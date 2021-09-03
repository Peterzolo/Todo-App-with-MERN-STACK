const jwt = require('jsonwebtoken');


const auth = (req, res,next) =>{
  const token = req.header("auth-token");
  if(!token) return res.status(400).send("Access Denied")

  try {
    const secretKeys = process.env.SECRET_KEYS;
      const payload = jwt.verify(token, secretKeys);
      req.user = payload;
      next();
  } catch (error) {
    res.status(500).send("Invalid Token")
  }    
};



module.exports = auth;

