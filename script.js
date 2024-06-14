const express=require('express')
const fs=require('node:fs')
const app=express();
const PORT=2429;
const HOSTNAME="localhost";

//path file to store the timestamp
const path="./Files/";

//necessary requirements been stored for use
const timeStamp=Date.now().toString();
const date=new Date().toUTCString().slice(0,17);
const hours=new Date().getHours().toString();
const minutes=new Date().getMinutes().toString();
const seconds=new Date().getSeconds().toString();
const dateTime=`${date},${hours}-${minutes}-${seconds}`;

app.get("/",(req,res)=>{
     fs.writeFileSync(`${path}/${dateTime}.txt`,`Current Date and Time: ${timeStamp}`,"utf-8"); 
     let content = fs.readFileSync(`${path}/${dateTime}.txt`,'utf-8')
     console.log(content);
     res.status(200).send(`<h1>${content}</h1>`)
})

app.listen(PORT,HOSTNAME,1,()=>{
     console.log(`App Started http://${HOSTNAME}:${PORT}`);
});