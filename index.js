const express = require("express")
const { get } = require("http")

const app = express()


app.get("/books",logger,checkPermission, (req,res)=>{

    return res.send({ route: "/books"})
})

app.get("/libraries",logger,checkPermission, (req,res)=>{

    return res.send({ route: "/libraries", permission: req.permission, role: req.role})
})

app.get("/authors",logger,checkPermission, (req,res)=>{

    return res.send( { route: "/authors", permission: req.permission, role: req.role})
})


function logger(req,res,next)
{
    console.log("this is logger")

    if(req.path==="/books"){
       
        next()
    }
    else if(req.path==="/libraries"){
      
        req.role = "librarian"
        next()
    }
    else if(req.path==="/authors"){
       
        req.role = "author"
        next()
    }
   
    
   
}


function checkPermission(req,res,next)
{
   
    if(req.path==="/books"){
       
        next()
    }
    else if(req.path==="/libraries"){
      
        req.permission = true
        next()
    }
    else if(req.path==="/authors"){
       
        req.permission = true
        next()
    }
   
}


// checkPermission("librarian"),
// checkPermission("author"),

// function checkPermission(req,res,next){

   
// }



app.listen (5500, (req,res)=>{
    console.log("listining on port 5500")
})