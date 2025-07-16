const express = require("express")

const app = express()

app.use((req, res, next)=>{
    console.log("Welcome to the mw demo")
    next()
})

/**
 *  Log the time of the request
*/
const m1 = function(req,res, next){
  console.log('Request came at :', Date.now())
  next()
}

/**
 * Log the time after sending response
 */
const m2 = function(req, res , next){
    console.log("Response sent at : ", Date.now())
    next()
}

app.use("/hello", m1)

app.get("/hello", (req,res,next)=>{
    res.send("Message")
    next()
})

app.use("/hello",m2)
/**
 * Start server
 */
app.listen(3000,()=>{
    console.log("Server got started")
})