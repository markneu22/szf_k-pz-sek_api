const express = require('express')
require('dotenv').config()
const app = express()
const trainings = require('./routes/trainings')
app.listen(process.env.PORT,console.log(`Server running on port ${process.env.PORT}`));