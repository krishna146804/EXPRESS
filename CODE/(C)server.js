const express = require('express')
const app = express()

/**
 * Dummy data
 */
const students = {
    1 : {
            name : "Vishwa",
            age : 99,
            subject : "Maths",
            id : 1
        },
    2 :{
        name : "Mohan",
        age : 75,
        subject : "English",
        id : 2
    },
    3 :{
        name : "Shweta",
        age : 19,
        subject : "Science",
        id : 3
    }


    
}

/**
 *  GET 127.0.0.1:8080/api/v1/students/123
 */

app.get("/api/v1/students/:id", (req,res)=>{
    // I need to read the id value
    let std_id = req.params.id
    let std_obj = students[std_id]

   if(std_obj){
    res.status(200).send(std_obj)
   }else{
    res.status(500).send({
        err : "Student not found"
    })
   }
})

/**
 *  GET 127.0.0.1:808/api/v1/students?id=1
 */
app.get("/api/v1/students",(req,res)=>{
   
    console.log(req.query)
    std_id = req.query.id

   stud_obj = students[std_id]

   if(stud_obj){
    res.status(200).send(stud_obj)
   }else{
    res.status(500).send({
        error : "Student was not found"
    })
   }
})


/**
 * POST 127.0.0.1:8080/api/v1/students  
 *  {
 *    "id" : 567,
 *    "name" : "Monalika",
 *    "age":99,
 *    "Subject" : "Maths"
 *   }
 */
app.use(express.json())
app.post("/api/v1/students" , (req,res)=>{
    //I need to read the request body
    console.log("Calling inside the post route")
    console.log(req.body)

    students[req.body.id] = req.body

    res.status(201).send(students[req.body.id])
})

/**
 * Start the server
 */
app.listen(8080, ()=>{
    console.log("Server got successfully started !")
})