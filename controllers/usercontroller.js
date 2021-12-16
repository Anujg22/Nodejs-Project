const express = require ('express')
const app = express();

const { body, validationResult } = require ('express-validator');
app.use(express.json())

// const router = express.Router();

const query = require ('../models/query');
const bodyParser = require('body-parser');
// const logincontroller = require('./logincontroller');


app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get("/", (req,res)=>{
    res.send("Hello world")
})

app.get("/user", query.getUser)

app.get("/blog", query.getBlog)
app.get("/blog/:id/users/:user_id", query.getBlogById)
app.post("/blog", query.createBlog)

app.post("/register", query.register, [
    
  body('email').isEmail(),
  body('password').isLength({ min: 5 }),      
], (req, res) => {
  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  res.sendStatus(201);
});


app.post("/login", query.login)

app.put("/blog/:id", query.updateBlog)
app.delete("/blog/:id", query.deleteBlog)


app.listen(3000, ()=>console.log("Server is running"))
// module.exports = {controller}