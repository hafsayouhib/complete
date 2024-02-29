import Userdb from "../model/user.js";


const adduser = (req,res)=>{

    if (!req.body) {
        res.status(400).send({ message: "content cannot be empty" })
        return;
    }

    console.log(req.body)
    
    const user = new Userdb({
        name: req.body.name,
        email: req.body.email,
        phonenum: req.body.phonenum,
        password: req.body.password
    })
   
    user
        .save(user)
        .then(data => {
            
            res.redirect('getuser')
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "some error occur while creating a create operation"
            })
        })
}

export default adduser