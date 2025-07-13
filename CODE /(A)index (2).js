const express = require("express")
console.log(typeof express)

const app = express()


/**
 * See a req - res cycle
 */
app.get("/", (req, res)=>{
    res.send("Hello from the Express server")
})


/**
 * Starting the express server
 */
app.listen(8000, ()=>{
    console.log("Server got started")
})