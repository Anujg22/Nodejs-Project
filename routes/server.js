const express = require ('express')
const app = express();
// const router = express.Router();

const controller = require('../controllers/usercontroller')

// router.get("/users", controller.get);




// const router = require('express').Router();
// const {body} = require('express-validator');
// const {register} = require('./controllers/registercontroller');
// const {login} = require('./controllers/loginController');
// // const {getUser} = require('./controllers/getUserController');

// router.post('/register', [
//     body('name',"The name must be of minimum 3 characters length")
//     .notEmpty()
//     .escape()
//     .trim()
//     .isLength({ min: 3 }),
//     body('email',"Invalid email address")
//     .notEmpty()
//     .escape()
//     .trim().isEmail(),
//     body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
// ], register);


// router.post('/login',[
//     body('email',"Invalid email address")
//     .notEmpty()
//     .escape()
//     .trim().isEmail(),
//     body('password',"The Password must be of minimum 4 characters length").notEmpty().trim().isLength({ min: 4 }),
// ],login);





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