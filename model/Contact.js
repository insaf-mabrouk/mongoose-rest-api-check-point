const mongoose = require ("mongoose")


const schema=mongoose.Schema

const contactSchema = new schema ({
   name:{
   type : String
   },
   email:{
    type : String
   },
   phone:{
    type : String
   }
})
module.exports = Contact = mongoose.model("contact", contactSchema)