const mongoose = require('mongoose');

//here you use mongodb atlas
mongoose.connect('url',{
useMongoClient:true,
});

mongoose.Promise=global.Promise;

module.export=mongoose;
