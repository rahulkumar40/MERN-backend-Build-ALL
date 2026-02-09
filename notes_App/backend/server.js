const express = require('express')
require('dotenv').config();
const PORT_NUMBER = process.env.PORT_NUMBER;
const app = express();

app.get('/',(req,res)=>{
    res.send("<h1>Hi, Everyone Making command on backend</h1>");
})
console.log("chal ki nhi")
app.listen(PORT_NUMBER,(req,res)=>{
    console.log("Server run at ", PORT_NUMBER)
})