import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppCoreTechComponent } from '../Service part/app-core-tech/app-core-tech.component';
import { BuildNextGenerationComponent } from '../Service part/build-next-generation/build-next-generation.component';
import { CustomerRelationshipComponent } from '../Service part/customer-relationship/customer-relationship.component';
import { DigitalStrategyComponent } from '../Service part/digital-strategy/digital-strategy.component';
import { LeadershipManagementComponent } from '../Service part/leadership-management/leadership-management.component';
import { OrganizationPerformanceComponent } from '../Service part/organization-performance/organization-performance.component';
import { TransfoSerForMarkeOperationsComponent } from '../Service part/transfo-ser-for-marke-operations/transfo-ser-for-marke-operations.component';
// import { OurexpertserviceComponent } from '../ourexpertservice.component';
import { Router, RouterModule } from '@angular/router';

// const expRoutes = [
//   {path:'',component:OurexpertserviceComponent, children:[

//     {path:'buld-next-generation', component:BuildNextGenerationComponent},
//     {path:'application core technology', component:AppCoreTechComponent},
//     {path:'digital-strategy', component:DigitalStrategyComponent},
//     // {path:'leadership-management', component:LeadershipManagementComponent},
//   ]},
// ]

@NgModule({
  declarations: [
    DigitalStrategyComponent,
    LeadershipManagementComponent,
    BuildNextGenerationComponent,
    AppCoreTechComponent,
    TransfoSerForMarkeOperationsComponent,
    OrganizationPerformanceComponent,
    CustomerRelationshipComponent
  ],
  imports: [
    CommonModule,
    // RouterModule.forChild(expRoutes)
  ]
})
export class OurexportserviceModule {}
