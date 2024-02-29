import bookdb from "../model/bookM.js";
import Userdb from "../model/user.js";

const bookM = (req,res)=>{
    Userdb.find()
    .then(users => {
        res.render('addbookM.ejs', { users });
    })
    .catch(err => {
        res.status(500).send({
            message: err.message || "some error occur while retrieving users"
        })
    })
}


const addbookM = (req, res) => {
    if (!req.body || !req.body.users) {
        res.status(400).send({ message: "content cannot be empty" });
        return;
    }

console.log(req.body)
}// Assuming user names are provided in the request

   
  // Assuming user IDs are provided in the request

  const bookes= (req, res) => {
    const users = req.body.users;
    const book = req.body.book;
    const author = req.body.author;
    const date = req.body.date;


    const bookInstance = new bookdb({
        name: book,
        author: author,
        date: date,
        users: users
    });


    bookInstance.save()
        .then(data => {
            res.redirect('getbookM');
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating a book."
            });
        });
};



const getbookM = (req, res) => {
    bookdb.find()
      
            .then(books => {
                res.render('getbookM', { books });
            })
            .catch(err => {
                res.status(500).send({
                    message: err.message || "Some error occurred while retrieving books."
                });
            });
    };

export {bookM,addbookM,getbookM,bookes} 