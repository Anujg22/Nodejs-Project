// const { response } = require('express')
// const express = require ('express')
// const app = express();

const Pool = require ('pg').Pool
const pool = new Pool({
    host: "localhost",
    port: 5432,
    user: "postgres",
    password: "Anujgupta@22091998",
    database: "shah"
})

const getUsers = (req,res)=>{
    pool.query("SELECT * FROM blog", (error, results)=>{
        if (error){
            throw error
        }
        res.send(results.rows)
    })
}

const getUsersById = (req,res)=>{
    const id = parseInt(req.params.id)
    pool.query("SELECT * FROM blog WHERE id = $1", [id], (error, results)=>{
        if (error){
            throw error
        }
        res.send(results.rows)
    })
}

const createUser = (req,res)=>{
    const { id, title, body } = req.body
    pool.query("INSERT INTO blog (id, title, body) VALUES ($1, $2, $3)", [id, title, body], (error, results)=>{
        if (error){
            console.log(error);
        }else{
        res.send(`User added`)
        }
    })
}

const updateUser = (req,res)=>{
    const id = parseInt(req.params.id)
  const { title, body } = req.body

  pool.query("UPDATE blog SET title = $1, body = $2 WHERE id = $3", [title, body, id], (error, results)=>{
      if (error){
          throw error
      }
      res.send(`User modified with ID: ${id}`)
  })
}

const deleteUser = (req,res)=>{
    const id = parseInt(req.params.id)

    pool.query("DELETE FROM blog WHERE id = $1", [id], (error, results)=>{
        if (error){
            throw error
        }
        res.send(`User deleted with ID: ${id}`)
    })
}

module.exports = {
    getUsers,
    getUsersById,
    createUser,
    updateUser,
    deleteUser,
}