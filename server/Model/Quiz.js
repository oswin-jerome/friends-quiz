const mongoose = require('mongoose')


var QuizSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    questions:{
        type: Array,
        required:true
    },
    leaderBoard:{
        type: Array
    }
})


module.exports = mongoose.model('Quiz',QuizSchema);