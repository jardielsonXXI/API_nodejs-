const express=require('express');
const app=express();
const bodyparse=require('body-parser');
app.use(bodyparser.json());
app.use(bodyParser.urlencoded({extend:false}));



app.listen(8081);
