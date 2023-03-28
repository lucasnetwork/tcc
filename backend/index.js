const express=  require("express")
const app = express()
app.use(express.json())
const router = express.Router()
router.post("/",(req,res)=>{
    console.log("request")
    console.log(req?.body)
})


app.use(router)

app.listen(3333)