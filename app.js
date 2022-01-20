const express = require('express');
const res = require('express/lib/response');
const app = new express();

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

app.listen(5000);

