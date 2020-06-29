const express = require('express');
const user = require('./model/user');
const router = express.Router();

//define router the register
router.get('/register',async(req , res )=>{
const {email} = req.body;

//use tratament to  the error
try{

const user = await User.create(req.body);

return res.send({user});
}catch(err){
return res.status(400).send({error:'user already exisxts'});
}

module.exports=app=>app.use('/authe',router);
});
