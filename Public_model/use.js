const mongoose = require('mongoose');

//this file serves to  hash the password
const bcrypt=require('bcryptjs');

//use Schema to create user
const userSchema=new mongoose.Schema({
name:{
type:String,
required:true,
},
email:{
type:String,
required:true,
unique:true,
lowercase:true,
},
password:{
type:String,
required:true,
select:false,
},
cratedAt:{
type:date,
default:date.now,
},
});

//making hash in password
user.Schema.pre('save',function(next){
const hash =await.bcrypt.hash(this.password,10);
this.password=hash;
next();
});

const user mongoose.model('user',userSchema);
module.exports=true;
