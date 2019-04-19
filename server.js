const express=require('express')
const path=require('path')
const app=express()

app.use(function(req,res,next){

    res.header("Access-Control-Allow-Origin","*");
    res.setHeader('Access-Control-Allow-Methods','GET,POST,OPTIONS,PUT,PATCH,DELETE')
    res.header('Access-Control-Allow-Headers','Origin,X-Requested-with,Content-TypeError,Accept');
    next();
})

app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use(express.static(path.join(__dirname,'public')))

const PORT=process.env.PORT || 7500

app.listen(PORT,()=>{
    console.log('Server Listening at'+PORT)

})
