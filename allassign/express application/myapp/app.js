import express from 'express';
const app = express();
const port = 7000; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.get('/login', (req, res) => {
  res.render('form');
});

app.post('/login', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  

  
  if (username === 'hafsa' && password === 'abc') {

    res.send('welcome'+req.body.username +'you successfully login')
  }
   else {
    
    res.send('there is error');
    res.status(201);
    console.log(req.body)
    res.send("there is an error ")
  
}
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
