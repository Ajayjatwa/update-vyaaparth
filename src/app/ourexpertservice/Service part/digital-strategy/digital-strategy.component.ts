import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digital-strategy',
  templateUrl: './digital-strategy.component.html',
  styleUrls: ['./digital-strategy.component.css']
})
export class DigitalStrategyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  textetem:boolean = true;
  showtext(){
    this.textetem = true;
    this.sidesrop1 =false;
    this.sidesrop2 = false;
    this.sidesrop3 = false;
    this.sidesrop4 = false;
  }
  sidesrop1 : boolean =false;
  navsidedrop1(){
    this.sidesrop1 = true;
    this.textetem = false;
    this.sidesrop2 = false;
    this.sidesrop3 = false;
    this.sidesrop4 = false;
    // this.sidesrop5 = false;
  }
  sidesrop2 : boolean =false;
  navsidedrop2(){
    this.sidesrop2 = true;
    this.textetem = false;
    this.sidesrop1 =false;
    this.sidesrop3 = false;
    this.sidesrop4 = false;
    //  this.sidesrop5 = false;

  }
  sidesrop3: boolean = false;
  navsidedrop3(){
    this.sidesrop3 = true;
    this.textetem = false;
    this.sidesrop1 =false;
    this.sidesrop2 = false;
    this.sidesrop4 = false;
    //  this.sidesrop5 = false;
  }
  sidesrop4:boolean =false;
  navsidedrop4(){
    this.sidesrop4 = true;
    this.textetem = false;
    this.sidesrop1 =false;
    this.sidesrop2 = false;
    this.sidesrop3 = false;
    //  this.sidesrop5 = false;
  }
  // sidesrop5:boolean =false;
  // navsidedrop5(){
  //   this.sidesrop5 = true;
  //   this.textetem = false;
  //   this.sidesrop1 =false;
  //   this.sidesrop2 = false;
  //   this.sidesrop3 = false;
  //   this.sidesrop5 = false;
  // }


}
