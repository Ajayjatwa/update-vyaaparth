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
    "imageUrl": "../../assets/img/about/tab-banner.jpg",
    "name": "Nathaniel Graham",
    "bio": "nathaniel.graham@example.com"
  },
  {
    "imageUrl": "../../assets/img/home1/team-2.jpg",
    "name": "Jason Ahlberg",
    "bio": "nathaniel.graham@example.com"
  },
  {
    "imageUrl": "../../assets/img/home1/team-1.jpg",
    "name": "James Alt",
    "bio": "nathaniel.graham@example.com"
  },
  {
    "imageUrl": "../../assets/img/home1/team-2.jpg",
    "name": "Emily Alverson",
    "bio": "nathaniel.graham@example.com"
  },
  {
    "imageUrl": "../../assets/img/home1/team-3.jpg",
    "name": "Emily Alverson",
    "bio": "nathaniel.graham@example.com"
  },
  {
    "imageUrl": "../../assets/img/home1/team-4.jpg",
    "name": "James Alt",
    "bio": "nathaniel.graham@example.com"
  },
  {
    "imageUrl": "../../assets/img/home1/team-1.jpg",
    "name": "Emily Alverson",
    "bio": "nathaniel.graham@example.com"
  },

]


}
