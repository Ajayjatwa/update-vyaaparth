import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { FunctionsComponent } from './functions/functions.component';
import { OurexpertserviceComponent } from './ourexpertservice/ourexpertservice.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { HeaderComponent } from './header/header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Service1Component } from './ourexpertservice/service1/service1.component';
import { SupplyChainComponent } from './supply-chain/supply-chain.component';
import { ShareServiceComponent } from './share-service/share-service.component';
import { BusinessTransformationComponent } from './contant/business-transformation/business-transformation.component';
import { MarketingStrategyComponent } from './contant/marketing-strategy/marketing-strategy.component';
import { MarketingOperationsComponent } from './contant/marketing-operations/marketing-operations.component';
import { TransformationComponent } from './contant/transformation/transformation.component';
import { DigitalTransformationComponent } from './contant/digital-transformation/digital-transformation.component';
import { DigitalStrategyComponent } from './ourexpertservice/Service part/digital-strategy/digital-strategy.component';
import { LeadershipManagementComponent } from './ourexpertservice/Service part/leadership-management/leadership-management.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './header/footer/footer.component';
import { SeamlessComponent } from './contant/seamless/seamless.component';
import { BuildNextGenerationComponent } from './ourexpertservice/Service part/build-next-generation/build-next-generation.component';
import { AppCoreTechComponent } from './ourexpertservice/Service part/app-core-tech/app-core-tech.component';
import { TransfoSerForMarkeOperationsComponent } from './ourexpertservice/Service part/transfo-ser-for-marke-operations/transfo-ser-for-marke-operations.component';
import { OrganizationPerformanceComponent } from './ourexpertservice/Service part/organization-performance/organization-performance.component';
import { CustomerRelationshipComponent } from './ourexpertservice/Service part/customer-relationship/customer-relationship.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndustriesComponent,
    FunctionsComponent,
    OurexpertserviceComponent,
    AboutComponent,
    CareersComponent,
    HeaderComponent,
    AboutUsComponent,
    Service1Component,
    SupplyChainComponent,
    ShareServiceComponent,
    BusinessTransformationComponent,
    MarketingStrategyComponent,
    MarketingOperationsComponent,
    TransformationComponent,
    DigitalTransformationComponent,
    DigitalStrategyComponent,
    LeadershipManagementComponent,
    FooterComponent,
    SeamlessComponent,
    BuildNextGenerationComponent,
    AppCoreTechComponent,
    TransfoSerForMarkeOperationsComponent,
    OrganizationPerformanceComponent,
    CustomerRelationshipComponent

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
