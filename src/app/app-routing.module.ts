import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AmritaBansalComponent } from './about/view bio/amrita-bansal/amrita-bansal.component';
import { AnirudhaKotgireComponent } from './about/view bio/anirudha-kotgire/anirudha-kotgire.component';
import { KunalChoudhuryComponent } from './about/view bio/kunal-choudhury/kunal-choudhury.component';
import { MandarLandeComponent } from './about/view bio/mandar-lande/mandar-lande.component';
import { NaumanGhadiallyComponent } from './about/view bio/nauman-ghadially/nauman-ghadially.component';
import { SanjeevSinghComponent } from './about/view bio/sanjeev-singh/sanjeev-singh.component';
import { SaswatBohidarComponent } from './about/view bio/saswat-bohidar/saswat-bohidar.component';
import { VineetSinghComponent } from './about/view bio/vineet-singh/vineet-singh.component';
import { CareersComponent } from './careers/careers.component';
import { FunctionsComponent } from './functions/functions.component';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';


const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  // { path:'marketing', component: MarketingOperationsComponent},
  {path:'industries', component:IndustriesComponent },
  {path:'functions', component:FunctionsComponent},
  {path:'career', component:CareersComponent},
  {path:'about',children:[
    {path:'',component:AboutComponent},
    {path:'Anirudha Kotgire',component:AnirudhaKotgireComponent},
    {path:'Amrita Bansal',component:AmritaBansalComponent},
    {path:'Kunal Choudhury', component:KunalChoudhuryComponent},
    {path:'Mandar Lande',component:MandarLandeComponent},
    {path:'Nauman Ghadially',component:NaumanGhadiallyComponent},
    {path:'Sanjeev Singh', component:SanjeevSinghComponent},
    {path:'Saswat Bohidar',component:SaswatBohidarComponent},
    {path:'Vineet Singh',component:VineetSinghComponent}
  ]},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
