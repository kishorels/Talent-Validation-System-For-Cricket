const mongoose = require("mongoose");
const connectDatabase =()=>{ mongoose.connect("mongodb://127.0.0.1:27017/user")
.then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.error(`Error connecting database ${err}`);
})};
module.exports= connectDatabase;