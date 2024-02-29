
import Userdb from "../model/user.js";
import bookdb from"../model/book.js"


export const getuser = async (req, res) => {

Userdb.find()
    
.then(users => {
    
    res.render('getuser', { users });
})
.catch(err => {
    res.status(500).send({
        message: err.message || "some error occur while retrieving users"
    })
});

}


export default getuser