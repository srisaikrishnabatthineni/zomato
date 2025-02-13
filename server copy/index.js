import express from 'express';
const zomato=express()
zomato.use(express.json())


zomato.get("/",(req,res)=>{
    res.json({
        message:"Setup Success" 
    })
})
const PORT=4000
zomato.listen(PORT,()=>console.log("Server is running"))