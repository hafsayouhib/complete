import express from 'express'
const app = express();
const port = 8000;

app.set("view engine",'ejs');

app.get('/website',function(req,res){
    var  pagetitle = "my website"

    res.render('pages/header',{ titles:pagetitle});
})


  
app.listen(port, function(){
 console.log("abc")   
})