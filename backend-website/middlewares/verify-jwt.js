const jwt = require("jsonwebtoken");
//verify middleware
exports.verifyToken =  (req, res, next) => {
 
  // Exclude specific paths from verification
  const excludedPaths = ["/users/validate-login", "/users/register","/users/verify-otp", "/users/forget-password", "/users/reset-password"];
  console.log(excludedPaths.includes(req.path))

  // Check if the request path is in the excluded paths
  if (excludedPaths.includes(req.path)) {
    //skip the verification
    return next();
  }

  //Access jwtToken From authorization Header

  try {
    const authHeader = req.headers["authorization"];
    let token;

    if (authHeader) {
      token = authHeader.split(" ")[1];
      if (!token) {
        throw new Error("No Token has been provided");
      }
      //verify the token
      const secretKey=process.env.JWT_SECRET;

      jwt.verify(token,secretKey,(err,payload)=>{
        if(err){
            throw new Error('Invalid Token'+err)
        }

        //seting payload to req
        req.userId=payload;
        //calling next function
        next()


      })

    }
  } catch (e) {
    res.status(404).json({
        Status:"Error",
        message:e.message
    })
  }
};