import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {

  twoways:any="heyy00";

  box:boolean= false;

  students:any=[
    {
      name:"neenu",
      age:27,
    },
    {
      name:"meenu",
      age:30
    },
    {
      name:"seenu",
      age:28,
    }
  ]

  stus:any=[]

  inpp:string="";

  constructor(private router:Router, private ds:DataService){
    this.inpp= this.ds.inputtext
    console.log(this.inpp);
    
  }

  getStudents(){
    console.log(this.students);
    
    this.stus = this.students
    console.log(this.stus);
  }


  displayBox(){
    this.box=true
  }

  nextp(){
    this.router.navigateByUrl('')
  }

}
