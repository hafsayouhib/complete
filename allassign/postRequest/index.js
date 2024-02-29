import express from 'express'
const app = express();
const port = 4000;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const items = [
   { item :'pencil',
    quantity:3,
    material:'wood'
},{
    item: 'pen',
    quantity:5,
    material:'plastic',
}
]
app.get('/item',(req,res) => {
    res.send(items);

});
app.listen(port,()=>{
    console.log(`running server on port ${port}`);
})
app.post('/item',(req,res) =>{
    console.log(req.body);
    items.push(req.body)
    res.sendStatus(201)


})

