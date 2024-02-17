const express =require('express')
const bcrypt = require('bcrypt')
const app = express();
const passport = require("passport");
const flash = require('express-flash')
const session = require('express-session')

var bodyParser = require("body-parser")
app.use(bodyParser.json())

const initializePassport = require('./passport-config')
initializePassport(passport,email => users.find(user =>user.email === email))

const users =[];

app.use(express.urlencoded({ extended: true })); // middleware for parsing application/x-www-form-url
app.use(flash())
app.use(session({
    secert:process.env.SESSION_SECERT
}))

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
    try {
        const hasedPaassword =await bcrypt.hash(req.body.password , 10);// hash the password using bcrypt    
        users.push({
            id:Date.now().toString(),
            name:req.body.name,
            email: req.body.email,
            password :hasedPaassword
        });
        res.redirect("/login");
    } catch  {
        res.redirect('/register')
    }
    console.log(users)
})
app.listen(8080,() => {
    console.log("Server is running on port 8080");
})