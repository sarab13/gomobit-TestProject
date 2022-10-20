const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost:27017/Users').then(()=>{
    console.log("connected to db successfully.")
}).catch((e)=>{
    console.log("There is something went wrong while connecting with database")
})