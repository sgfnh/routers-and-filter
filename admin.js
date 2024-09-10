const expres=require("express")
const route=expres.Router()
route.get('/prod', (req, res,next) =>{
    console.log("hey")
    res.send(`<form action="/prodt" method="POST"><input type:"text" name:"title"><button type:"submit">Add</button></form>`)
    
})
route.post('/prodt',(req,res,next)=>{
    //console.log(req.body)
    res.redirect('/')
    
})

module.exports=route