const express = require("express")
const { get } = require("http")

const app = express()


app.get("/books",logger, (req,res)=>{

    return res.send({ route: "/books"})
})

app.get("/libraries",logger, (req,res)=>{

    return res.send({ route: "/libraries", permission: req.permission, role: req.role})
})

app.get("/authors",logger, (req,res)=>{

    return res.send( { route: "/authors",  permission: req.permission, role: req.role})
})


function logger(req,res,next)
{
    console.log("this is logger")

    if(req.path==="/books"){
        req.permission = true
       
    }
    else if(req.path==="/libraries"){
        req.permission = true
        req.role = "librarian"
        
    }
    else if(req.path==="/authors"){
        req.permission = true
        req.role = "author"
    }
    else
    {
        req.permission = false
    }
    next()
}


// checkPermission("librarian"),
// checkPermission("author"),

// function checkPermission(req, res, next){

// function Permission(req,res,next){
//     console.log("This is check logger")

//     if(user==="author") next()

//     else if(user === "librarian") next()

//     else res.send("Not allowed")
// }
    
// }

app.listen (5500, (req,res)=>{
    console.log("listining on port 5500")
})