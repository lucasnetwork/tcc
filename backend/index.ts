import mongoose from "mongoose";
import express from "express";
import Log from './models/log.schema'
mongoose.connect('mongodb://root:example@10.0.0.115:3000').then(()=>{
    console.log("connect")
}).catch((e)=>{
console.log("mongodb://root:example@10.0.0.115:3000")
console.log(e)
});


const app = express()
app.use(express.json())
const router = express.Router()
router.post("/",async (req,res)=>{
    try{
        console.log("request")
        console.log(req?.body)
    
        const log = new Log({ 
            date:req.body.DATE,
            program:req.body.PROGRAM,
            priority:req.body.PRIORITY,
            message:req.body.MESSAGE,
            isodate:req.body.ISODATE,
            host:req.body.HOST,
            facility:req.body.FACILITY,
         });
        await log.save();
        res.status(201).json({msg:"created"})

    }catch{
        res.status(500)
    }
})


app.use(router)

app.listen(3333,()=>{
    console.log("backend online")
})