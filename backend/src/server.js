
import express from 'express';
import { connectToDB, db } from './db.js';
import cors from 'cors';
const app=express();
app.use(express.json());
app.use(cors());
//check server//
app.get('/',(req,res)=>{
    res.send("server is running")
})
app.get('/admin1/:email',async(req,res1)=>
{
    const details=await db.collection('commonpro').findOne({Email:req.params.email})
    res1.json(details);
})
app.post('/forget/:name/:newpsw',async (req,res)=>{
  
    const details = await db.collection('commonpro').findOneAndUpdate({Name:req.params.name},{$set:{Password:req.params.newpsw}})
    res.json(details);
})

app.get('/login/:email/:psw',async(req,res)=>{
    const details=await db.collection('commonpro').findOne({Email:req.params.email,Password:req.params.psw})
    res.json(details);
})
app.post('/admin/:name/:pnum/:email/:psw/',async(req,res)=>
{
    const details=await db.collection('commonpro').insertOne({Name:req.params.name,Phonenum:req.params.pnum,Email:req.params.email,Password:req.params.psw})
    res.json(details);
})
app.post('/ps/:head/:matter',async(req,res)=>
{
    const details=await db.collection('prob').insertOne({Head:req.params.head,Matter:req.params.matter})
    res.json(details);
})
app.get('/apr',async(req,res)=>
{
    const details=await db.collection('prob').find().toArray();
    res.json(details);
})
// app.get('/keer/:name',async(req,res)=>
// {
//     const details = await db.collection("prob").findOne({})
//     res.json(details);
// })
app.get('/keer/:email/:psw',async(req,res)=>{
    const details=await db.collection('keer').findOne({Email:req.params.email,Password:req.params.psw})
    res.json(details);
})

connectToDB(()=>{
    app.listen(8000,()=>{
        console.log("Server Running At port 8000");
    })
})