require('./dbConnection')
const express = require('express');
const cors=require('cors')
const User=require('./models/User')

const app = express();

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }));

app.post('/adduser',async(req,res)=>{
    const user=req.body;
    try{
       const isExist=await User.findOne({email:user.email})
       if(isExist){
        res.json({
            error:true,
            message:'User Already Exists'
        })
        return
       }

       const newUser=new User(user);
       await newUser.save();
       res.json({
        error:false,
        message:"success"
       })
    
    }
    catch(e){
       res.json({
        error:true,
        message:"Something went wrong."
       })
    }
})

app.get('/getusers',async(req,res)=>{
const {search}=req.query;
try{
    var users,dropdownList;
    if(search=='ALL'){
       users=await User.find({})
       dropdownList=users;
      }
    else{
        users=await User.find({name:search}) 
        dropdownList=await User.find({})
    }
  res.json({error:false,users,dropdownList})
}
catch(e){
    res.json({error:true,message:"Something went wrong."})
}

})

app.listen(5000, () => {
    console.log('Server is running at port 5000');
});