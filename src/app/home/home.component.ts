import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  status = "Not clicked";
  name="";
  constructor(private router: Router) { }

  formName(e){
    this.name = e.target.value;
  }

  saveName(){
    console.log("Saved name");
    if(this.name==""){
      return alert("Enter your name");
    }
    localStorage.setItem('name',this.name); 
    this.router.navigate(['/create']);
  }

  ngOnInit(): void {
  }

}
