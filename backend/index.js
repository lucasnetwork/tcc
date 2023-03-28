const mongoose = require("mongoose")
const express=  require("express")
mongoose.connect('mongodb://root:example@10.0.0.115:3000').then(()=>{
    console.log("connect")
}).catch((e)=>{
console.log("mongodb://root:example@10.0.0.115:3000")
console.log(e)
});

const Cat = mongoose.model('Cat', { name: String });

const app = express()
app.use(express.json())
const router = express.Router()
router.post("/",async (req,res)=>{
    try{
        console.log("request")
        const cats =await Cat.find()
        console.log(cats)
        console.log(req?.body)
    
        const kitty = new Cat({ name: 'Zildjian' });
        kitty.save().then(() => console.log('meow'));
        res.status(201).json({msg:"created"})

    }catch{
        res.status(500)
    }
})


app.use(router)

app.listen(3333,()=>{
    console.log("backend online")
})