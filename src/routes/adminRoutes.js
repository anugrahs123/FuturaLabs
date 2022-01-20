const express = require('express');
const adminRouter = express.Router();
const bookdata = require('../model/data1');

function router(){
    adminRouter.get('/',function(req,res){
        res.send("heyy");

        // var item = {
        //     req.query.Email;
        //     req.query.Password;
        //     req.query.Phone;
        //     req.query.Address;
        //     req.query.Address2;
        //     req.query.City;
        //     req.query.State;
        //     req.query.Zip;
    
        // }
        // var book = bookdata(item);
        // book.save();
    })


    return adminRouter;
}
module.exports = router;