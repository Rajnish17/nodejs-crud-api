const express =require("express");

const router =express.Router();
const {getdata,savedata,updateData,deleteData} = require("../controllers/crud.controller");



router.post("/data",savedata);
router.get("/login",getdata);
router.put("/update",updateData);
router.delete("/delete",deleteData);


module.exports= router;