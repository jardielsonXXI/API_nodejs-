const express=require('express');
const app=express();
const bodyparse=require('body-parser');
app.use(bodyparser.json());
app.use(bodyParser.urlencoded({extend:false}));
require('./controllers/authecontrollers')(app);


app.listen(8081);
