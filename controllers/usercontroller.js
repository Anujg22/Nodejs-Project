const express = require ('express')
const app = express();
const query = require ('../models/query');
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/", (req,res)=>{
    res.send("Hello world")
})

app.get("/users", query.getUsers)
app.get("/users/:id", query.getUsersById)
app.post("/users", query.createUser)
app.put("/users/:id", query.updateUser)
app.delete("/users/:id", query.deleteUser)


app.listen(3000, ()=>console.log("Server is running"))
// module.exports = {controller}