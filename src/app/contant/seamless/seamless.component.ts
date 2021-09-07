import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seamless',
  templateUrl: './seamless.component.html',
  styleUrls: ['./seamless.component.css']
})
export class SeamlessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  textetem:boolean = true;
  showtext(){
    this.textetem = true;
    this.sidesrop1 =false;
    this.sidesrop2 = false;

  }
  sidesrop1 : boolean =false;
  navsidedrop1(){
    this.sidesrop1 = true;
    this.textetem = false;
    this.sidesrop2 = false;


  }
  sidesrop2 : boolean =false;
  navsidedrop2(){
    this.sidesrop2 = true
    this.textetem = false;
    this.sidesrop1 =false;


  }

}
