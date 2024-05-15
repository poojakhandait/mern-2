let express=require("express")
const{addres,getdata,getresult,updres,deldoc}=require("../controlers/cont")
let route=new express.Router()
route.post("/add",addres)
route.get("/getall",getdata)
route.get("/getres/:hno",getresult)
route.put("/update",updres)
route.delete("/del/:hno",deldoc)
module.exports=route