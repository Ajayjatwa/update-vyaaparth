import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marketing-operations',
  templateUrl: './marketing-operations.component.html',
  styleUrls: ['./marketing-operations.component.css']
})
export class MarketingOperationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
//   cardmain =[
//     {
//       'title':"Process integration for Marketing, Sales, and Service",
//     'text':"Creating a fast, easy, and one-stop shopping experience for customers is the main focus. Customers and the sales organization must be seamlessly integrated into tools and processes such as customer lead generation, quote-to-order conversion, product-to-service conversion, etc.",
//      'imageUrl':"../../../assets/sales service1.jpeg"
//   },
//   {
//     'title':"Deliver value in a fully integrated manner",
//   'text':"Customers in the digital economy need to know when a product or service is delivered during the purchase process. Consequently, integrating last-mile fulfillment providers into the sales process is critical to driving customer purchases.",
//    'imageUrl':"../../../assets/salse service2.jpg"
// }
//   ]

textetem:boolean = true;
showtext(){
  this.textetem = true;
  this.sidesrop1 =false;
  this.sidesrop2 = false;
  this.sidesrop3 = false;
   this.sidesrop4 = false;
  this.sidesrop5 = false;
  this.sidesrop6 = false;
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
  this.sidesrop6 = false;
  this.status = this.toggle ? 'Enable' : 'Disable';
}
sidesrop2 : boolean =false;
navsidedrop2(){
  this.sidesrop2 = true
  this.textetem = false;
  this.sidesrop1 =false;
  this.sidesrop3 = false;
  this.sidesrop4 = false;
  this.sidesrop5 = false;
  this.sidesrop6 = false;
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
  this.sidesrop6 = false;
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
  this.sidesrop6 = false;
  this.status = this.toggle ? 'Enable' : 'Disable';
}
sidesrop5:boolean =false;
navsidedrop5(){
  this.sidesrop5 = true;
  this.sidesrop5? 'Enable' : 'Disable';
  this.sidesrop4 =false;
  this.textetem = false;
  this.sidesrop1 =false;
  this.sidesrop2 = false;
  this.sidesrop3 = false;
  this.sidesrop6 = false;
}
sidesrop6:boolean =false;
navsidedrop6(){
  this.sidesrop6 = true;
  this.sidesrop6? 'Enable' : 'Disable';
  this.sidesrop4 =false;
  this.textetem = false;
  this.sidesrop1 =false;
  this.sidesrop2 = false;
  this.sidesrop3 = false;
  this.sidesrop5 = false;
}


// myimage:boolean = true;
// changeimg(){
//   this.myimage = !this.myimage;
// }
toggle = true;
status = 'Enable';

// enableDisableRule() {
//     this.toggle = !this.toggle;
//     this.status = this.toggle ? 'Enable' : 'Disable';
// }


}
