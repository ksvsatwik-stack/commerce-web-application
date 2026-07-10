const express = require('express');

const app = express();

app.get('/', (req,res)=>{
    res.send("E-Commerce Backend Running");
});

app.listen(3000,()=>{
    console.log("Server Started");
});
