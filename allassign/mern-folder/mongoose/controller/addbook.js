import bookdb from "../model/book.js";


import mongoose from'mongoose'

const addbook = (req,res)=>{

    if (!req.body) {
        res.status(400).send({ message: "content cannot be empty" })
        return;
    }
    console.log(req.body)
   
  
    
    const book = new bookdb({
        users:req.body.users,
        name: req.body.book,
        author: req.body.author,
        published: req.body.published
    })

        

   
    book
        .save(book)
        .then(data => {
           
            res.redirect('getbook')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occur while creating a create operation"
            })
        })
}

export default addbook