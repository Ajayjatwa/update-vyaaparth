import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  filterTerm: string ='';
  expert =[
    {
      name:'Emily Alverson',
      imageUrl:"../../assets/img/home1/team-1.jpg",
      text:'Create a culture of excellence by establishing, accelerating, and applying the necessary changes to transform your organizational mindset.',
      bio:'View Bio'
    },
    {
      name:'jhon cena',
      imageUrl:"../../assets/img/home1/team-2.jpg",
      text:'Create a culture of excellence by establishing, accelerating, and applying the necessary changes to transform your organizational mindset.',
      bio:'View Bio'
    },
    {
      name:'Emily Alverson',
      imageUrl:"../../assets/img/home1/team-3.jpg",
      text:'Create a culture of excellence by establishing, accelerating, and applying the necessary changes to transform your organizational mindset.',
      bio:'View Bio'
    },
    {
      name:'Jason Ahlberg',
      imageUrl:"../../assets/img/home1/team-4.jpg",
      text:'Create a culture of excellence by establishing, accelerating, and applying the necessary changes to transform your organizational mindset.',
      bio:'View Bio'
    },
    {
      name:'James Alt',
      imageUrl:"../../assets/img/home1/team-5.jpg",
      text:'Create a culture of excellence by establishing, accelerating, and applying the necessary changes to transform your organizational mindset.',
      bio:'View Bio'
    },
    {
      name:'James Alt',
      imageUrl:"../../assets/img/home1/team-1.jpg",
      text:'Create a culture of excellence by establishing, accelerating, and applying the necessary changes to transform your organizational mindset.',
      bio:'View Bio'
    },
    {
      name:'Jason Ahlberg',
      imageUrl:"../../assets/img/home1/team-2.jpg",
      text:'Create a culture of excellence by establishing, accelerating, and applying the necessary changes to transform your organizational mindset.',
      bio:'View Bio'
    },
  ]

}
