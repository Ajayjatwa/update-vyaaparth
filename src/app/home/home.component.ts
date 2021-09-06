import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() {

  }
  mouseseenter1:boolean =false;
  myhome(){
    this.mouseseenter1 = true;
  }
//   isReadMore = true

//   showText() {
//     this.isReadMore = !this.isReadMore
//  }

  ngOnInit(): void {
  }
  // cardlist = [
  //   {
  //     title: "Influence cultural change",
  //     imageUrl: "../../assets/img/home1/service-1.jpg",
  //     text: "Create a culture of excellence by establishing, accelerating, and applying the necessary changes to transform your organizational mindset."
  //   },
  //   {
  //     title: "Recruiting, Retaining, and Promoting Talent",
  //     imageUrl: "../../assets/img/home1/service-2.jpg",
  //     text: "Bring high-performing talent to your organization and retain, promote and reward them.Adopt effective strategies to attract top talent who possess the technical skills and soft skills necessary for creating a positive working environment committed to exceptional customer service."
  //   },
  //   {
  //     title: "Ensure learning and development takes place",
  //     imageUrl: "../../assets/img/home1/service-3.jpg",
  //     text: "Changing roles, evolving skills, and remodeled policies and processes will be prerequisites for your future success. Help leaders and staff continuously develop skills that ensure organizational success amid constant change by training them on their skills to achieve high performance and excellence."
  //   },
  //   {
  //     title: "Change Management - How to Do It",
  //     imageUrl: "../../assets/img/home1/service-4.jpg",
  //     text: "A critical factor in long-term viability for any industry is the disruption it is experiencing. For your organization to respond effectively, change management must be viewed as an ongoing process, not an episodic process. Leading organizations can leverage Vyaaparth's expertise to foster a culture of change and support stakeholders along the way while strengthening their culture while thriving on change. We allocate efforts and resources to ensure enterprise-wide adoption and sustainability of our strategies and tactics. Back to Business Operations"
  //   }

    // {
    //   title: "nfluence cultural change"
    //   imageUrl: "../../assets/img/home1/service-1.jpg"
    //   text: "Create a culture of excellence by establishing, accelerating, and applying the necessary changes to transform your organizational mindset."
    // },
  // ];


}
