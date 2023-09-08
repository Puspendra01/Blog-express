const express = require('express')
const app = express()
const port = 3333
const web = require('./routes/web')
const connectdb = require('./db/connectdb')
const fileUpload = require("express-fileupload");
var cloudinary = require('cloudinary');


//database connection
connectdb()

//to convert url data in json form
app.use(express.urlencoded({extended:false}))

//for file upload
app.use(fileUpload({useTempFiles: true}));

//router load
app.use('/',web)

//ejs setup
app.set('view engine', 'ejs')

//public file setup
app.use(express.static('public'))



app.listen(port, ()=> {
    console.log(`server start localhost:3333`)
})