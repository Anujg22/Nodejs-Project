// const { response } = require('express')
const express = require ('express')
const app = express();
// const { body, validationResult } = require ('express-validator');
// app.use(express.json())

const Pool = require ('pg').Pool
const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Anujgupta@22091998",
    database: "shah"
})

const getBlog = (req,res)=>{
    pool.query("SELECT * FROM blog", (error, results)=>{
        if (error){
            throw error
        }
        res.send(results.rows)
    })
}

const getBlogById = (req,res)=>{
    const id = parseInt(req.params.id)
    const user_id = parseInt(req.params.id)
    pool.query("SELECT * FROM blog WHERE id = $1", [id], (error, results)=>{
        if (error){
            throw error
        }
        res.send(results.rows)
    })
}

const createBlog = (req,res)=>{
    const { id, title, body } = req.body
    pool.query("INSERT INTO blog (id, title, body) VALUES ($1, $2, $3)", [id, title, body], (error, results)=>{
        if (error){
            console.log(error);
        }else{
        res.send(`User added`)
        }
    })
}

const updateBlog = (req,res)=>{
    const id = parseInt(req.params.id)
  const { title, body } = req.body

  pool.query("UPDATE blog SET title = $1, body = $2 WHERE id = $3", [title, body, id], (error, results)=>{
      if (error){
          throw error
      }
      res.send(`User modified with ID: ${id}`)
  })
}

const deleteBlog = (req,res)=>{
    const id = parseInt(req.params.id)

    pool.query("DELETE FROM blog WHERE id = $1", [id], (error, results)=>{
        if (error){
            throw error
        }
        res.send(`User deleted with ID: ${id}`)
    })
}

///////////////////////////////////////////////   User apis  //////////////////////////////////////////////////////////////////////////

const getUser = (req,res)=>{
    pool.query("SELECT * FROM users", (error, results)=>{
        if (error){
            throw error
        }
        res.send(results.rows)
    })
}



// const register = (req,res)=>{
    
    // const { user_id, name, email, phone, password } = req.body
    // pool.query("INSERT INTO users (user_id, name, email, phone, password) VALUES ($1, $2, $3, $4, $5)", [user_id, name, email, phone, password], (error, results)=>{
    //     if (error){
    //         console.log(error);
    //     }else{
    //     res.send(`User added`)
    //     }
    // })
// }



// app.post('/register', [
    
//     body('email').isEmail(),
    
//     body('password').isLength({ min: 5 }),      
//   ], (req, res) => {
    
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }
    
    const register = (req,res)=>{

    const { user_id, name, email, phone, password } = req.body
    pool.query("INSERT INTO users (user_id, name, email, phone, password) VALUES ($1, $2, $3, $4, $5)", [user_id, name, email, phone, password], (error, results)=>{
        if (error){
            console.log(error);
        }else{
        res.send(`User added`)
        }
    })
}
    // res.sendStatus(201);

    // User.create({
    //   user_id: req.body.user_id,
    //   name: req.body.name,
    //   phone: req.body.phone,
    //   email: req.body.email,
    //   password: req.body.password
    // }).then(user => res.json(user));
//  
//  });

//   app.listen(3000, ()=>console.log("Server is running"))


const login = (req, res)=>{
    const email = parseInt(req.params.email)
    pool.query("SELECT password FROM users WHERE email = $1", [email], (error, results)=>{
        if (error){
            throw error
        }
        res.send(`Logged in Successfully`)
    })
}



module.exports = {
    getBlog,
    getBlogById,
    createBlog,
    updateBlog,
    deleteBlog,
    getUser,
    register,
    login,
}