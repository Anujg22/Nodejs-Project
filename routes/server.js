const express = require ('express')
const app = express();
const router = express.Router();

const controller = require('../controllers/usercontroller')

router.get("/users", controller.get);

// const db = require ('./db');

// app.use(bodyParser.json())
// app.use(
//   bodyParser.urlencoded({
//     extended: true,
//   })
// )

// app.get("/", (req,res)=>{
//     res.send("Hello world")
// })

// app.get("/users", db.getUsers)
// app.get("/users/:id", db.getUsersById)
// app.post("/users", db.createUser)
// app.put("/users/:id", db.updateUser)
// app.delete("/users/:id", db.deleteUser)

app.listen(3000, ()=>console.log("Server is running"))