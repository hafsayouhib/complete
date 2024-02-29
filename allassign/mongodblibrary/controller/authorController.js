import bookdb from "../model/book.js";
import {authordb} from "../model/author.js";


const author = (req,res)=>{
    bookdb.find()
    .then(books => {
        res.render('addauthor.ejs', { books });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error occur while retrieving users"
        })
    });
}

// const num = (a)=>{
//     for (let i = 0; i < a.books.length; i++) {
//         {
//             name: a.books[i];
//             date : a.date[i]
            
//         }          
//     }
// }



const addauthor = (req,res)=>{
    if (!req.body) {
        res.status(400).send({ message: "content cannot be empty" })
        return;
    }
    console.log(req.body)
    console.log(req.body.date)
    const author = new authordb({
        author: req.body.author,
        book:[ 
            // num(req.body)
            // {
            //     name: req.body.books,
            //     date: req.body.date 
            // }           
            {
                name: req.body.books[0],
                date: req.body.date[0]  
            },                       
            {
                name: req.body.books[1],
                date: req.body.date[1]  
            }                       
        ]
    })
    // save book in database
    author
        .save(author)
        .then(data => {
            // res.send(data)
            res.redirect('author')
        })
        .catch(err => {
            console.log(err.message)
            res.status(500).send({
                message: err.message || "some error occur while creating a create operation"
            })
        })
}


export {author,addauthor}