const express = require('express')
const trainings = require('./routes/trainings')
const errorHandler = require('./middleware/error')

require('dotenv').config()
const app = express()
const morgan = require('morgan')



const mongoose = require('mongoose')
mongoose.set('strictQuery',true)
const mongoString = process.env.DATABASE_URL
mongoose.connect(mongoString)
const database = mongoose.connection
database.on("error", (error) => {
    console.log(error)
});
database.once("connnected",()=>{
    console.log((`Database Connected ${database.host}`));
})

app.use(express.json())

app.use(morgan('dev'))

app.use('/api/trainings',trainings)
app.use(errorHandler)


app.listen(process.env.PORT,console.log(`Server running on port ${process.env.PORT}`));