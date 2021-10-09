import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  show = false;
  // first drop
  sidesrop : boolean =false;
  navsidedrop(){
    this.sidesrop = !this.sidesrop;
    this.sidesrop1 = false;
    this.sidesrop2 = false;
  }
  sidesrop1 : boolean =false;
  navsidedrop1(){
    this.sidesrop1 = !this.sidesrop1;
    this.sidesrop = false;
    this.sidesrop2 = false;
  }
  sidesrop2 : boolean =false;
  navsidedrop2(){
    this.sidesrop2 = !this.sidesrop2;
    this.sidesrop = false;
    this.sidesrop1 = false;
  }
  // secsidedrop
  secsidesrop:boolean = false;
  secnavsidedrop(){
    this.secsidesrop =!this.secsidesrop;
    this.secsidesrop1 =false;
  }
  secsidesrop1:boolean = false;
  secnavsidedrop1(){
    this.secsidesrop1 =!this.secsidesrop1;
    this.secsidesrop = false;
  }
// secsidedrop
thardsidesrop:boolean =false;
thardnavsidedrop(){
  this.thardsidesrop =!this.thardsidesrop;
  this.thardsidesrop1 = false;
}
thardsidesrop1:boolean =false;
thardnavsidedrop1(){
  this.thardsidesrop1 =!this.thardsidesrop1;
  this.thardsidesrop = false;
}
  // myFunction(){
  //    var x = document.getElementById("myTopnav");
  //   if (x.className === "topnav") {
  //     x.className += " responsive";
  //   } else {
  //     x.className = "topnav";
  //   }
  // }
  shownav :boolean =true;
  myFunction(){
    this.shownav = !this.shownav;
  }
// }

}
