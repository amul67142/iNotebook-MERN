const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { body, validationResult } = require('express-validator');

router.post('/',[
    body('name', 'Enter a valid name').isLength({min: 3}),
    body('email', 'Invalid Email').isEmail(),
    body('password', 'Must be of length 5 or more').isLength({min: 5})

],(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      }).then(user => res.json(user))
        .catch(err=> {console.log(err); res.json({error :'please enter a unique entry'})} )
  
})

module.exports=router
