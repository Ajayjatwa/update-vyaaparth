import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public searchFilter: any = '';
  query:string='';

  constructor() { }

  ngOnInit(): void {
  }
  Students = [{
    "imageUrl": "../../assets/img/dummy.png",
    "name": "Anirudha Kotgire",
    "designation":"Digital Strategy Consultant",
    "bio": "View Bio"
  },
  {
    "imageUrl": "../../assets/img/dummy.png",
    "name": "Dr. Amrita Bansal",
    "designation":"Marketing and Branding Consultant",
    "url":"www/myname/",
    "bio": "View Bio"
  },
  {
    "imageUrl": "../../assets/img/dummy.png",
    "name": "Kunal Choudhury",
    "designation":"Consultant- Marketing and Strategy",
    "url":"www/myname/",
    "bio": "View Bio"
  },
  {
    "imageUrl": "../../assets/img/dummy.png",
    "name": "Mandar Lande ",
    "designation":"Business and Technology Consultant",
    "url":"www/myname/",
    "bio": "View Bio"
  },
  {
    "imageUrl": "../../assets/img/dummy.png",
    "name": "Nauman Ghadially",
    "designation":"Branding and Communication Consultant",
    "url":"www/myname/",
    "bio": "routerLink ='Anirudha Kotgire'"
  },
  {
    "imageUrl": "../../assets/img/dummy.png",
    "name": "Sanjeev Singh",
    "designation":"Operations and Process Management Consultant",
    "url":"www/myname/",
    "bio": "View Bio"
  },
  {
    "imageUrl": "../../assets/img/dummy.png",
    "name": "Saswat Bohidar ",
    "designation":"Marketing, Strategy and Business Operation Consultant",
    "url":"www/myname/",
    "bio": "View Bio"
  },
  {
    "imageUrl": "../../assets/img/dummy.png",
    "name": "Vineet Singh",
    "designation":"Innovation and Technology Consultant",
    "url":"www/myname/",
    "bio": "routerLink= 'Vineet Singh'"
  },

]


}
