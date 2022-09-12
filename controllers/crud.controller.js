const User = require("../models/User");

const getdata = (req, res) => {
  User.find()
    .then((data) => {
      res.json({
        message: "Success",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
const savedata = (req, res) => {
    const user=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password

    });

    user.save().then(result=>{

        res.json({
            message:"Success",
            data:result
        })

    }).catch(err=>{
        console.log(err);

    });
    
  };

  const updateData =(req,res)=>{
    User.updateOne({_id:req.body.id},{$set:{email:req.body.email,name:req.body.name}}).then(result=>{
      res.json({
          message:"Update Success",
          data:result
      })
  }).catch(err=>{
      console.log(err);
  })

};
//delete 
const deleteData=(req,res)=>{

  User.deleteOne({name:req.body.name}).then(result=>{

      res.json({
          message:"SuccessFully Deleted",
          data:result
      })

  }).catch(err=>{
      console.log(err);
  })
  
};
    
  
  

module.exports = {
  getdata,
  savedata,
  updateData,
  deleteData
};
