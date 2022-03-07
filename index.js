const express = require("express")
const { get } = require("http")

const app = express()


app.get("/books", (req,res)=>{

    return res.send({ route: "/books"})
})

app.get("/libraries", (req,res)=>{

    return res.send({ route: "/libraries", permission: true})
})

app.get("/authors", (req,res)=>{

    return res.send( { route: "/authors", permission: true})
})



app.listen (5500, (req,res)=>{
    console.log("listining on port 5500")
})