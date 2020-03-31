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


router.get('/quiz/:id',(req,res)=>{
    Quiz.findOne({_id:req.params.id}).exec((err,doc)=>{
        if(err){
            return res.status(400).json({error:"unexpected error"})
        }

        return res.json(doc.questions);
    })
})


router.post('/quiz/:id',(req,res)=>{
    var id = req.params.id;
    var body = req.body.questions;
    var score = 0;
    Quiz.find({_id:id}).exec((err,doc)=>{
        if(err){
            return res.status(400).json({error:"Error"})
        }

        for(var i=0;i<doc[0]['questions'].length;i++){
            // console.log(doc[i]['questions'])
            // console.log(doc[0]['questions'][i]['answer'],body[i]['answer'])
            if(doc[0]['questions'][i]['answer']==body[i]['answer']){
                console.log("correct "+i)
                score = score+1;
            }
        }


        Quiz.updateOne({_id:id},{$push:{leaderBoard:{name:req.body.name,score:score}}},(err,data)=>{
            console.log(err)
            console.log(doc)
            res.json({msg:"s"})
        })
        
    })
})

module.exports = router;