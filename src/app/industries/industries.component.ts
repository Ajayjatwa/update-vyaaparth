import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html',
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  cards =[
    {
      title:"The automotive industry",
    imageUrl:"../../assets/changing1.jpg"
    },
  ];

}
