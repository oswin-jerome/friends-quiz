const router = require('express').Router()
const Quiz = require('../Model/Quiz')


router.post('/create',(req,res)=>{

    var data = req.body;
    data.leaderboard = []

    var quiz = new Quiz(data)
    quiz.save().then((doc)=>{
        console.log(doc)
        return res.status(200).json({id:doc._id})
    }).catch(err=>console.log(err))

    
})


module.exports = router;