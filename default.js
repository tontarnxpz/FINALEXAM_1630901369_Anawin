const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')
const e = require('express')
const app = express()
const port = 1369

const locate = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "database"
})

var obj = {}

app.set('view engine','ejs')
app.use(express.static('CSS'))

app.use(bodyParser.urlencoded({extended: false})) 

app.listen(port,()=>{
    console.log("Server is Listening on port: ",port)
})

app.get("/",(req,res)=>{
    res.render('index')
})

app.get("/profile",(req,res)=>{
    res.render('profile')
})

app.get('/16march',(req,res)=>{
    locate.getConnection((err,connection)=>{
        if(err) throw err
        console.log("connected id : ",connection.threadId)

        connection.query('SELECT * FROM be16march',(err,rows)=>{
            connection.release();
            if(err){
                console.log(err)
            }else{
                obj = { Error : err , be16march : rows}
                res.render('16march',obj)
            }
        })
    })
})

app.get('/1april',(req,res)=>{
    locate.getConnection((err,connection)=>{
        if(err) throw err
        console.log("connected id : ",connection.threadId)

        connection.query('SELECT * FROM be1april',(err,rows)=>{
            connection.release();
            if(err){
                console.log(err)
            }else{
                obj = { Error : err , be1april : rows}
                res.render('1april',obj)
            }
        })
    })
})

app.get('/16april',(req,res)=>{
    locate.getConnection((err,connection)=>{
        if(err) throw err
        console.log("connected id : ",connection.threadId)

        connection.query('SELECT * FROM be16april',(err,rows)=>{
            connection.release();
            if(err){
                console.log(err)
            }else{
                obj = { Error : err , be16april : rows}
                res.render('16april',obj)
            }
        })
    })
})