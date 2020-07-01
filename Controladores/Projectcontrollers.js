const express = require('express');
const router = express.Router();
const authmiddleware = require('../middlewares/authe');

router.use(authmiddleware);

router.get('/',(res,res)=>{
  res.send({ok:true,user:req.useId});
});
