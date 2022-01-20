const express = require('express');
const adminRouter = express.Router();

function router(){
    adminRouter.get('/',function(req,res){
        res.send("heyy");
    })


    return adminRouter;
}
module.exports = router;