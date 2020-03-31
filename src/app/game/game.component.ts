import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  questions = []

  currentQuestion = 0;
  constructor(private route: ActivatedRoute) { }

  optionSelect(id){
    console.log(id)
    this.questions[this.currentQuestion].answer = id;
    console.log(this.currentQuestion, this.questions.length-1)
    if(this.questions.length-1<=this.currentQuestion){
      this.sendToServer();
      return console.log("end")
    }
    this.currentQuestion = this.currentQuestion+1;
  }


  sendToServer(){
    fetch('http://localhost:4455/api/quiz/'+this.route.snapshot.paramMap.get('id'),{
      method:'POST',
      body:JSON.stringify({
        name:localStorage.getItem('name'),
        questions:this.questions
      }),
      headers:{
        "content-type":"Application/json"
      }
    }).then((res)=>{
      res.json().then((data)=>{
        console.log(data)
      })
    }).catch((err)=>console.log(err))
  }

  ngOnInit(): void {
    console.log('sdsd')
    fetch('http://localhost:4455/api/quiz/'+this.route.snapshot.paramMap.get('id'),{
      method:"GET"
    }).then((res)=>{
      res.json().then((data)=>{
        console.log(data)
        this.questions = data
      })
    })
  }
}