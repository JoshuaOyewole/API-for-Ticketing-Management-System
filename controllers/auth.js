const User = require("../models/user");
const bcrypt = require("bcryptjs");
const createError = require("../util/error");
const jwt = require("jsonwebtoken");

const register = async (req, res, next) => {
  try {

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const newUser = ({
      ...req.body,
      password: hash,
    });

    const user = await User.create(newUser);
    res.status(200).json({
      "success": true,
      "status": 200,
      "message": `${user?.firstname} ${user?.lastname} registered successfully!`
    });
  } catch (err) {
    if (err.keyValue?.email) return next(createError(401, `Email already Exist!`)) ;
    next(createError(400, `An Error occured! Try Again`));
    
  }
};


const login = async (req, res, next) => {
  try {

    if (req.body.email === (undefined || "" || " ") || req.body.password === (undefined || "" || " ")) return next(createError(403, "Kindly fill the required fields"));

    const user = await User.findOne({ email: req.body.email });

    if (!user) return next(createError(404, "user Email not found!"));

    const isPasswordCorrect = await bcrypt.compare(
     req.body.password, 
      user.password
    );

    if (!isPasswordCorrect)
      return next(createError(400, "Incorrect Password, Kindly Try Again!"));

    const {_id, firstname, lastname,isAdmin} = user._doc; //Destructing password from the user details recieved...

    const jwt_payload = {
      firstname: firstname,
      id: user._id
    }

    const token = jwt.sign(jwt_payload, process.env.JWT_SECRET);

    res
      .cookie("access_token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + (1000*60*15)),//it will last for 15mins. Try and refresh the Token after 15mins again--> 10/08/22(12:46pm)
        maxAge: 1000 *60 *15,
        secure: true //Set to TRUE when pushing to production
      })
      .status(200)
      .json({
        "success": true,
        "status": 200,
        "message": `Logged in successfully!`,
        "details": {
          _id, firstname, lastname, isAdmin
        }
      });
  }
  catch (err) {
    next(err);
  }
};


//LOGOUT
const logout = async (req, res, next) => {
  try {

    //get the token from the req
    const token = req.cookies.access_token;

    if (!token || token) return res.clearCookie("access_token")
    .status(200)
    .json({
      "success": true,
      "status": 200,
      "message": `Logout successfully!`
    });
   
    
  } catch (err) {
    next(err);
  }
};

module.exports = { login, register, logout };