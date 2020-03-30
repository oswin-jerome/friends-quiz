const express = require('express')
const app = express()
const PORT = process.env.PORT || 4455;
const Quiz = require('./Routes/Quiz')
const cors = require('cors')
const bodyParser = require('body-parser')

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/quiz',{useUnifiedTopology:true,useNewUrlParser:true}).then(()=>{
    console.log("DB Connected")
})


app.use(cors())
app.use(bodyParser.json())
app.use('/api',Quiz)




app.listen(PORT,()=>console.log(`Server started at port ${PORT}`))