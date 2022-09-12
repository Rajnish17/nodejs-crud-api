require('dotenv').config();
const app =require("./app");
const port =process.env.PORT|| 9090;
const mongoose =require("mongoose");
//connect mongodb
mongoose.connect( process.env.MONGO_URL).then((data) => {
    console.log("connected");
  });



app.listen(port,function(){
    console.log(`server running at ${port}`)
})