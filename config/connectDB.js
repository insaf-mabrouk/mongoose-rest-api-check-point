const mongoose= require("mongoose")
const config = require ("config")

const connectDB = () =>{
  mongoose.connect(config.get("MONGOURI"),{useNewUrlParser: true, useUnifiedTopology:true})
  .then(()=>console.log("database is connected"))
  .catch('error connect to database')

}

module.exports = connectDB