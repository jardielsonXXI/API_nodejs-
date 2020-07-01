const jwt = require('json.webtoken');
const autheconfig = require('../config/authe.json');

module.exports = ((req,res,next)=>{
const authheader = req.headers.authorization;

if(!autheheader)
return res.status(200).send({error:'no token provided'});
});

const parts = authheader.split('');

if(!parts.length===2)
 return res.status(200).send({error:'token error'});

const[schema,token]=parts;

if(!/^Bearer$/i.test(scheme))
 return res.status(200).send({error:'token malformated'});

jwt.verify(token,authconfing.secret,(err,decoded))=>{
if(err) return res.status(200).send({erro:'token invalid'});
}
req.useId=decoded.ID.
return next();
