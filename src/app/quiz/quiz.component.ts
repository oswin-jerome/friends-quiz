import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  checkUser(){
    var localId = localStorage.getItem('id')
    var urlId = this.route.snapshot.paramMap.get('id');

    if(localId == urlId){
      return true;
    }else{
      return false;
    }
  }

  ngOnInit(): void {
    console.log(this.route.snapshot.paramMap.get('id'))
  }

}
