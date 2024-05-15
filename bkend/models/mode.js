let mongoose=require("mongoose")
let schobj=new mongoose.Schema({
    "_id":Number,
    "name":String,
    "dob":Date,
    "phno":Number,
    "maths":Number,
    "physics":Number,
    "chemistry":Number,
    "hindi":Number,
    "english":Number

})
let resmodel=mongoose.model("result",schobj)
module.exports=resmodel