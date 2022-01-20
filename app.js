const express = require('express');
const res = require('express/lib/response');
const bookdata = require('./src/model/data1');
const app = new express();
// const bookdata = require('../model/data1');

app.use(express.static('public'));
app.use('/css',express.static(__dirname+'/public/css'));
app.use('/js',express.static(__dirname+'/public/js'));
app.use('/img',express.static(__dirname+'/public/img'));
// app.use('/sign/add', adminRouter);



app.set('view engine','ejs');
app.set('views',__dirname+'/src/views');
app.get("/",function(req,res){

    res.render("index",{title:'Futura Lab'});

});

app.get("/sign",function(req,res){

    res.render("register");

});

app.get("/sign/add",function(req,res){
    
    var item = {
        Email: req.query.Email,
        Password: req.query.Password,
        Phone: req.query.Phone,
        Address: req.query.Address,
        Address2: req.query.Address2,
        City: req.query.City,
        State: req.query.State,
        Zip: req.query.Zip

    }
    var book = bookdata(item);
    book.save();
    res.redirect('/');


});

app.listen(5000);

