import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  myName:string="hey";

  colours:string="color:red";

  getname:string="";

  thisnameess:string=""

  detchanges:string="";

  constructor(private ds:DataService){}

  getmyName(){
  this.getname=this.myName
  }

  thisnames(thisname:any){
    this.thisnameess= thisname.value
  }

  detchange(detc:any){
    this.detchanges= detc.target.value
    this.ds.inputtext=this.thisnameess
  }
}
