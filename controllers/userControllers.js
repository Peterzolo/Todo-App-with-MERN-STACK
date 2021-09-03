
const Joi = require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();



const {User} = require('../model/User');


exports.getUsers = (req, res) =>{

  res.send('All Users here')

}



exports.userSignUp = async(req, res) =>{

  const schema = Joi.object({
    name : Joi.string().min(3).max(100).required(),
    email : Joi.string().min(3).max(40).email().required(),
    password : Joi.string().min(8).max(300).required()

  })
   const {error} = schema.validate(req.body)
   if(error) return res.status(400).send(error.details[0].message)
  
  try {

    let user = await User.findOne({email : req.body.email})
    console.log(req.body)
    if(user) return res.status(400).send("This email has already been used")

    const {name, email, password} = req.body
   
    user = new User({name, email, password});

    const salt = await bcrypt.genSalt(10)
    user.password = await bcrypt.hash(user.password, salt)

    await user.save()
 

    const payload = {
      _id : user._id,
      name : user.name,
      email : user.email
    };

    const secretKeys = process.env.SECRET_KEYS;
    const token = jwt.sign(payload, secretKeys)
    res.send(token)

            
  } catch (error) {         
    res.status(500).send(error.message)   
    console.log(error.message)   
  }
}  


exports.userSignIn = async(req, res) => {

  const schema = Joi.object({
    email : Joi.string().min(3).max(40).email().required(),
    password : Joi.string().min(8).max(300).required()

  })
   const {error} = schema.validate(req.body)
   if(error) return res.status(400).send(error.details[0].message)

     try {
           
          let user = await User.findOne({email : req.body.email})
          if(!user) return res.status(400).send("Wrong Email or password")

        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if(!validPassword) return res.status(400).send("Password incorrect")

        const payload = {
          _id : user._id,
          name : user.name,
          email : user.email
        };

        const secretKeys = process.env.SECRET_KEYS;
        const token = jwt.sign(payload, secretKeys)
        res.send(token)

     } catch (error) {
       res.status(500).send(error.message);
       console.log(error.message);
     }

}