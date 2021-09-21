import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadershipAndManagementComponent } from '../Service part/organization-performance/Leadership-Management/leadership-and-management/leadership-and-management.component';
import { BusinessTransformationComponent } from 'src/app/contant/business-transformation/business-transformation.component';
import { DigitalTransformationComponent } from 'src/app/contant/digital-transformation/digital-transformation.component';
import { MarketingOperationsComponent } from 'src/app/contant/marketing-operations/marketing-operations.component';
import { MarketingStrategyComponent } from 'src/app/contant/marketing-strategy/marketing-strategy.component';
import { SeamlessComponent } from 'src/app/contant/seamless/seamless.component';
import { TransformationComponent } from 'src/app/contant/transformation/transformation.component';
import { ShareServiceComponent } from 'src/app/share-service/share-service.component';
import { SupplyChainComponent } from 'src/app/supply-chain/supply-chain.component';
import { OurexpertserviceComponent } from '../ourexpertservice.component';
import { AppCoreTechComponent } from '../Service part/app-core-tech/app-core-tech.component';
import { BuildNextGenerationComponent } from '../Service part/build-next-generation/build-next-generation.component';
import { CustomerRelationshipComponent } from '../Service part/customer-relationship/customer-relationship.component';
import { DigitalStrategyComponent } from '../Service part/digital-strategy/digital-strategy.component';
import { LeadershipManagementComponent } from '../Service part/leadership-management/leadership-management.component';
import { HowOrganizationsComponent } from '../Service part/org-tranf/How-Organizations/how-organizations/how-organizations.component';
import { OrgTranfComponent } from '../Service part/org-tranf/org-tranf.component';
import { OrganizationPerformanceComponent } from '../Service part/organization-performance/organization-performance.component';
import { TransfoSerForMarkeOperationsComponent } from '../Service part/transfo-ser-for-marke-operations/transfo-ser-for-marke-operations.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from 'src/app/header/page-not-found/page-not-found.component';


const expRoutes = [
  {path:'ourexpertservice',
  children:[
    {path:'', component:OurexpertserviceComponent},
    {path:'buld-next-generation', component:BuildNextGenerationComponent},
    {path:'supply-chain',
    children:[
      {path:'',component:SupplyChainComponent},
      {path:'share-service', component:ShareServiceComponent},
    ]},
    {path:'Organizational-Transformation',
    children:[
      {path:'', component:OrgTranfComponent},
      {path:'how-orgnization', component:HowOrganizationsComponent},
    ]},
    {path:'application core technology',
    children:[
      {path:'', component:AppCoreTechComponent},
      {path:'digital-strategy',component:DigitalStrategyComponent },
      {path:'leadership-management', component:LeadershipManagementComponent},
      {path:'Customer-Relationship',component:CustomerRelationshipComponent},
      {path:'organization-performance',
      children:[
        {path:'', component:OrganizationPerformanceComponent},
        {path:'leadership-and-management', component:LeadershipAndManagementComponent}
      ]},
    ]},
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
  {path:'**', component:PageNotFoundComponent},
]

@NgModule({
  declarations: [
    SeamlessComponent,
    BuildNextGenerationComponent,
    AppCoreTechComponent,
    TransfoSerForMarkeOperationsComponent,
    OrganizationPerformanceComponent,
    CustomerRelationshipComponent,
    HowOrganizationsComponent,
    OrgTranfComponent,
    SupplyChainComponent,
    ShareServiceComponent,
    BusinessTransformationComponent,
    MarketingStrategyComponent,
    MarketingOperationsComponent,
    TransformationComponent,
    DigitalTransformationComponent,
    DigitalStrategyComponent,
    LeadershipManagementComponent,
    OurexpertserviceComponent,
    LeadershipAndManagementComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(expRoutes)
    // RouterModule.forChild(expRoutes)
  ]
})
export class OurexportserviceModule {}
