const express = require("express")
const { get } = require("http")

const app = express()


app.get("/books",logger, (req,res)=>{

    return res.send({ route: "/books"})
})

app.get("/libraries",logger,checkPermission, (req,res)=>{

    return res.send({ route: "/libraries", permission: true})
})

app.get("/authors",logger,checkPermission, (req,res)=>{

    return res.send( { route: "/authors", permission: true})
})


function logger(req,res,next)
{
    console.log("this is logger")
    next()
}

function checkPermission(req, res, next){

    console.log("This is check logger")

    next()
}

app.listen (5500, (req,res)=>{
    console.log("listining on port 5500")
})