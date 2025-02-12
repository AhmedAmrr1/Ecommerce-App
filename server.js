const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan') // middleware to view logs
const dbConnection = require('./config/database')
const router = require('./routes/categoryRoute')

dotenv.config({ path: 'config.env' });


// Express App
const app = express()
app.use(express.json())

dbConnection()

// Middlewares
if (process.env.NODE_ENV ==="development"){
    app.use(morgan('dev'))
    console.log( `mode: ${process.env.NODE_ENV}`)
}


app.use(router)

// Server Connections 
PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`server is running on port:${PORT}`)
})