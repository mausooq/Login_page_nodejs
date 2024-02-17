const express =require('express')
const bcrypt = require('bcrypt')
const app = express();
app.set('view-engin','ejs')
app.get('/',(req,res) =>{
    res.render( 'index.ejs',{name:"mausooq"});
})
app.get('/login',(req,res) =>{
    res.render('login.ejs')
})
app.get('/register',(req,res) =>{
    res.render('register.ejs')
})
app.post('/register',async (req,res)=>{

})
app.listen(8080,() => {
    console.log("Server is running on port 8080");
})