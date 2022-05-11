const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const app = express()
const port = 1369

const locate = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "database"
})

app.set('view engine','ejs')
app.use(express.static('CSS'))

app.use(bodyParser.urlencoded({extended: false})) 
app.post('/',(req,res) =>{
    locate.getConnection((err,connection) => {
        if(err) throw err
        const {order1,order2,order3} = req.body;
        connection.query()
    })
})

app.listen(port,()=>{
    console.log("Server is Listening on port: ",port)
})

app.get("/",(req,res)=>{
    res.render('index')
})

app.get("/profile.ejs",(req,res)=>{
    res.render('profile')
})

app.get("/16march.ejs",(req,res)=>{
    res.render('16march')
})

app.get("/1april.ejs",(req,res)=>{
    res.render('1april')
})

app.get("/16april.ejs",(req,res)=>{
    res.render('16april')
})