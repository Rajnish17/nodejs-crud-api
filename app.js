const express=require("express");
const app=express();
app.set("view engine","ejs");
app.use(express.json());
const cors =require("cors");
// const authrouter =require("./routes/auth.route");
const crudrouter=require("./routes/crud.route");

// app.use("/auth",authrouter)
app.use(cors());
app.use("/crud",crudrouter);



module.exports =app;