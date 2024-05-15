let resmodel=require("../models/mode")
let addres=async(req,res)=>{
    try{
        let data=new resmodel(req.body)
        await data.save()
        res.send("res added")
    }
    catch(err)
    {
        res.send("err in starting")
    }
}
let getdata=async(req,res)=>{
    try{
        let data=await resmodel.find()
        res.json(data)
    }
    catch(err)
    {
        console.log(err)
    }
}
let getresult=async(req,res)=>{
    try{
        let result=await resmodel.findById({"_id":req.params.hno})
        res.json(result)
    }
    catch(err)
    {
        console.log(err)
    }
}
let updres=async(req,res)=>{
    let data={...req.body}
    delete data._id
    try{
        await resmodel.findByIdAndUpdate({
            "_id":req.body._id},data)
        res.send("update done")
    }
    catch(err)
    {
        res.send("err in updation")

    }
}
let deldoc=async(req,res)=>{
    try{
        await resmodel.findByIdAndDelete({"_id":req.params.hno})
        res.send("del done")
    }
    catch(err)
    {
        res.send("err in del")
    }
}
module.exports={addres,getdata,getresult,updres,deldoc}