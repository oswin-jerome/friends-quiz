import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  questions = [
    {
      question:"Question1?",
      options:[
        {id:1,img:"https://picsum.photos/500/500?id=1",value:"option 1"},
        {id:2,img:"https://picsum.photos/500/500?id=2",value:"option 2"},
        {id:3,img:"https://picsum.photos/500/500?id=3",value:"option 3"},
        {id:4,img:"https://picsum.photos/500/500?id=4",value:"option 4"},
      ],
      answer:''
    },
    {
      question:"Question2?",
      options:[
        {id:1,img:"https://picsum.photos/500/500?id=12",value:"option 1"},
        {id:2,img:"https://picsum.photos/500/500?id=22",value:"option 2"},
        {id:3,img:"https://picsum.photos/500/500?id=32",value:"option 3"},
        {id:4,img:"https://picsum.photos/500/500?id=42",value:"option 4"},
      ],
      answer:''
    },
    {
      question:"Question3?",
      options:[
        {id:1,img:"https://picsum.photos/500/500?id=112",value:"option 1"},
        {id:2,img:"https://picsum.photos/500/500?id=111",value:"option 2"},
        {id:3,img:"https://picsum.photos/500/500?id=43",value:"option 3"},
        {id:4,img:"https://picsum.photos/500/500?id=88",value:"option 4"},
      ],
      answer:''
    },
  ]

  currentQuestion = 0;
  constructor() { }

  optionSelect(id){
    console.log(id)
    this.questions[this.currentQuestion].answer = id;
    console.log(this.currentQuestion, this.questions.length-1)
    if(this.questions.length-1<=this.currentQuestion){
      return console.log("end")
    }
    this.currentQuestion = this.currentQuestion+1;
  }

  ngOnInit(): void {
  }

}
