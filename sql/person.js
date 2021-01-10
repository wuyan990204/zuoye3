const db = require('./db.js') 

const adminSchema = new db.mongoose.Schema({
    "userName":{type:String},
    "password":{type:String},
    // "phone":{type:Number},
    "age":{type:Number},
    "sex":{type:String},
    
})


module.exports = db.mongoose.model("personnels",adminSchema)