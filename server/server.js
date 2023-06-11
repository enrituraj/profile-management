require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const userRoutes = require('./routers/user');
const mongoose = require('mongoose')

//middleware
app.use(express.json())

app.use((req,res,next) => {
    console.log(req.path,req.method);
    next()
})


//routes from route/user
app.use('/api/user',userRoutes)

//connect to db
mongoose.connect(process.env.DB_URI)
    .then(()=>{
        app.listen(port, () => {
            console.log(process.env.DB_URI);
            console.log(`Database connected & app listening on port ${port}!`)
        })
    })
    .catch((error) =>{
        console.log(error);
    })