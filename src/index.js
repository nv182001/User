const path=require("path")
const hbs=require("hbs")
const express=require('express')
const app=express()

app.set('view engine', 'hbs')
app.set('views',path.join(__dirname, '../Templates/views'))
const publicDirectory=path.join(__dirname, '../public')
app.use(express.static(publicDirectory))
app.get('/',(req,res)=>{
    res.send('home page')
})


app.get('/index',(req,res)=>{
    res.render("index",{title:"NIrali"})
})
app.listen(3000,()=>{
    console.log('Server listening on port');
})