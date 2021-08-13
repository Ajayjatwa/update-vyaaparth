import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { BusinessTransformationComponent } from './contant/business-transformation/business-transformation.component';
import { DigitalTransformationComponent } from './contant/digital-transformation/digital-transformation.component';
import { MarketingOperationsComponent } from './contant/marketing-operations/marketing-operations.component';
import { MarketingStrategyComponent } from './contant/marketing-strategy/marketing-strategy.component';
import { TransformationComponent } from './contant/transformation/transformation.component';
import { FunctionsComponent } from './functions/functions.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { OurexpertserviceComponent } from './ourexpertservice/ourexpertservice.component';
import { Service1Component } from './ourexpertservice/service1/service1.component';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',
  children:
  [
    {path:'', component:HomeComponent},
    {path:'services', component: Service1Component},
    {path:'tranformation', component:TransformationComponent},
    {path:'digital', component:DigitalTransformationComponent},
    {path:'marketing', component:MarketingOperationsComponent},
    {path:'marketingStrategy', component:MarketingStrategyComponent},
  ]},
  {path:'industries', component:IndustriesComponent },
  {path:'functions', component:FunctionsComponent},
  {path:'ourexpertservice',component:OurexpertserviceComponent},
  {path:'about', component:AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
