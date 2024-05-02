const jwt = require("jsonwebtoken");
const { LogoutModel } = require("../model/logout.model");
const auth = async (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];
  try {
    if (!token) {
      res.status(200).json({ msg: "you are not authorised" });
    } else {
      const logout = await LogoutModel.findOne({ token });
      if (logout) {
        res.status(200).json({ msg: "session expired, login again" });
      } else {
        jwt.verify(token,"masai",(err,result)=>{
            if(err)
            {
                res.status(200).json({ msg: "you are not authorised" });
            }else{
                next()
            }
        })
      }
    }
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

module.exports = {
  auth
};
