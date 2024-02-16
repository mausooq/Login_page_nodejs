const express =require('express')

const app = express();
app.set('view-engin','ejs')
app.get('/',(req,res) =>{
    res.render( 'index.ejs',{name:"mausooq"});
})
app.get('/login',(req,res) =>{
    res.render('index.ejx')
})
app.listen(8080,() => {
    console.log("Server is running on port 8080");
})