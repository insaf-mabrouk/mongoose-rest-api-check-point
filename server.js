const express = require("express")
const connectDB= require ("./config/connectDB")



const app = express ()
app.use(express.json())


//connect to data base
connectDB()

//routes
app.use('/api/contact', require('./routes/contact'))

const port = 5000

app.get('/', (req, res) => {
    res.send('Hello World! yes')
  })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
  })