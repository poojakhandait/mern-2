let express=require("express")
let mongoose=require("mongoose")
let route=require("./bkend/routes/route")
let app=express()
let cors=require("cors")
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb://127.0.0.1:27017/resdb").then(()=>{
    console.log("ok")
})
app.use("/",route)
app.listen(5000)