const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors())



const db = mysql.createConnection({
    user : "root",
    host : "localhost",
    password : "password",
    database : "loginsystem",
});


app.post('/register',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    db.query("INSERT INTO users (username,password) VALUES(?,?)",[username,password],(err,result)=>{
        console.log(err);
    })
})
app.post('/insert',(req,res)=>{
    const post = req.body.post;
    const title = req.body.title;
    const sqlinsert = "INSERT INTO users (post,title) VALUE(?,?)"
    
    db.query(sqlinsert,[post,title],(err,result)=>{
        console.log(err);
    })
})


app.post('/login',(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    db.query("SELECT * FROM users WHERE username = ? AND password = ?",[username,password],(err,result)=>{
        if(err){
        console.log({err:err});
        }
        
            if(result.length>0){
                res.send(result);
            }else{
                res.send({message:"No user found"});
            }
        
    })
})

app.listen(3001,()=>{
    console.log("running server");
})