import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-build-next-generation',
  templateUrl: './build-next-generation.component.html',
  styleUrls: ['./build-next-generation.component.css']
})
export class BuildNextGenerationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  hometitle:boolean = true;
  toggle = true;
  status = 'Enable';

  textetem:boolean = true;
  showtext(){
    this.textetem = true;
    this.sidesrop1 =false;
    this.sidesrop2 = false;
    this.sidesrop3 = false;
    this.sidesrop4 = false;
    this.sidesrop5 = false;
    this.sidesrop5 = false;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
  sidesrop1 : boolean =false;
  navsidedrop1(){
    this.sidesrop1 = true;
    this.textetem = false;
    this.sidesrop2 = false;
    this.sidesrop3 = false;
    this.sidesrop4 = false;
    this.sidesrop5 = false;
    this.sidesrop5 = false;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
  sidesrop2 : boolean =false;
  navsidedrop2(){
    this.sidesrop2 = true;
    this.textetem = false;
    this.sidesrop1 =false;
    this.sidesrop3 = false;
    this.sidesrop4 = false;
    this.sidesrop5 = false;
    this.sidesrop5 = false;
    this.status = this.toggle ? 'Enable' : 'Disable';

  }
  sidesrop3: boolean = false;
  navsidedrop3(){
    this.sidesrop3 = true;
    this.textetem = false;
    this.sidesrop1 =false;
    this.sidesrop2 = false;
    this.sidesrop4 = false;
    this.sidesrop5 = false;
    this.sidesrop5 = false;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
  sidesrop4:boolean =false;
  navsidedrop4(){
    this.sidesrop4 = true;
    this.textetem = false;
    this.sidesrop1 =false;
    this.sidesrop2 = false;
    this.sidesrop3 = false;
    this.sidesrop5 = false;
    this.sidesrop5 = false;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
  sidesrop5:boolean =false;
  navsidedrop5(){
    this.sidesrop5 = true;
    this.sidesrop4 =false;
    this.textetem = false;
    this.sidesrop1 =false;
    this.sidesrop2 = false;
    this.sidesrop3 = false;
    this.sidesrop4 = false;
    this.sidesrop6 = false;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }
  sidesrop6:boolean =false;
  navsidedrop6(){
    this.sidesrop6 = true;
    this.sidesrop4 =false;
    this.textetem = false;
    this.sidesrop1 =false;
    this.sidesrop2 = false;
    this.sidesrop3 = false;
    this.sidesrop4 = false;
    this.sidesrop5 = false;
    this.status = this.toggle ? 'Enable' : 'Disable';
  }


}
