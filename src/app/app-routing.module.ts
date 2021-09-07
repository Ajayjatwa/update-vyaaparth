import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { BusinessTransformationComponent } from './contant/business-transformation/business-transformation.component';
import { DigitalTransformationComponent } from './contant/digital-transformation/digital-transformation.component';
import { MarketingOperationsComponent } from './contant/marketing-operations/marketing-operations.component';
import { MarketingStrategyComponent } from './contant/marketing-strategy/marketing-strategy.component';
import { SeamlessComponent } from './contant/seamless/seamless.component';
import { TransformationComponent } from './contant/transformation/transformation.component';
import { FunctionsComponent } from './functions/functions.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { OurexpertserviceComponent } from './ourexpertservice/ourexpertservice.component';
import { AppCoreTechComponent } from './ourexpertservice/Service part/app-core-tech/app-core-tech.component';
import { BuildNextGenerationComponent } from './ourexpertservice/Service part/build-next-generation/build-next-generation.component';
import { CustomerRelationshipComponent } from './ourexpertservice/Service part/customer-relationship/customer-relationship.component';
import { DigitalStrategyComponent } from './ourexpertservice/Service part/digital-strategy/digital-strategy.component';
import { LeadershipManagementComponent } from './ourexpertservice/Service part/leadership-management/leadership-management.component';
import { OrganizationPerformanceComponent } from './ourexpertservice/Service part/organization-performance/organization-performance.component';
import { TransfoSerForMarkeOperationsComponent } from './ourexpertservice/Service part/transfo-ser-for-marke-operations/transfo-ser-for-marke-operations.component';
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
    // {path:'marketingStrategy', component:MarketingStrategyComponent},
  ]},
  // changes


  { path:'marketing', component: MarketingOperationsComponent},
  // changes
  {path:'industries', component:IndustriesComponent },
  {path:'functions', component:FunctionsComponent},
  {path:'ourexpertservice',
  children:[
    {path:'', component:OurexpertserviceComponent},
    {path:'buld-next-generation', component:BuildNextGenerationComponent},
    {path:'application core technology', component:AppCoreTechComponent},
    {path:'digital-strategy', component:DigitalStrategyComponent},
    // {path:'leadership-management', component:LeadershipManagementComponent},

  ]},
  {path:'business-transformation',children:[
    {path:'', component: BusinessTransformationComponent},
    {path:'marketingStrategy', component: MarketingStrategyComponent},
    { path:'seamless', component:SeamlessComponent},
    {path:'marketing', component:MarketingOperationsComponent},
  ]},
  {path:'tranformation-service-for-marketing', children:[

    {path:'', component:TransfoSerForMarkeOperationsComponent},
    {path:'marketing', component: MarketingOperationsComponent},
    {path:'tranformation', component:TransformationComponent},
    {path:'digital', component:DigitalTransformationComponent},
  ]},
  {path:'about', component:AboutComponent},
  { path:'digital-strategy',component:DigitalStrategyComponent},
  {path:'organization-performance', component:OrganizationPerformanceComponent},
  {path:'leadership-management', component:LeadershipManagementComponent},
  {path:'Customer-Relationship',component:CustomerRelationshipComponent},
  { path:'seamless', component:SeamlessComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
