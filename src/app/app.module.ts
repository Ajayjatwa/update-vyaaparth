import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';
import { FunctionsComponent } from './functions/functions.component';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { HeaderComponent } from './header/header/header.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Service1Component } from './ourexpertservice/service1/service1.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './header/footer/footer.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { PageNotFoundComponent } from './header/page-not-found/page-not-found.component';
import { OurexportserviceModule } from './ourexpertservice/ourexportservice/ourexportservice.module';
import { SearchFilterPipe } from './pipes/search-filter.pipe';
import { FormsModule } from '@angular/forms';
import { AnirudhaKotgireComponent } from './about/view bio/anirudha-kotgire/anirudha-kotgire.component';
import { AmritaBansalComponent } from './about/view bio/amrita-bansal/amrita-bansal.component';
import { KunalChoudhuryComponent } from './about/view bio/kunal-choudhury/kunal-choudhury.component';
import { MandarLandeComponent } from './about/view bio/mandar-lande/mandar-lande.component';
import { NaumanGhadiallyComponent } from './about/view bio/nauman-ghadially/nauman-ghadially.component';
import { SanjeevSinghComponent } from './about/view bio/sanjeev-singh/sanjeev-singh.component';
import { SaswatBohidarComponent } from './about/view bio/saswat-bohidar/saswat-bohidar.component';
import { VineetSinghComponent } from './about/view bio/vineet-singh/vineet-singh.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    IndustriesComponent,
    FunctionsComponent,
    AboutComponent,
    CareersComponent,
    HeaderComponent,
    AboutUsComponent,
    Service1Component,
    FooterComponent,
    PageNotFoundComponent,
    SearchFilterPipe,
    AnirudhaKotgireComponent,
    AmritaBansalComponent,
    KunalChoudhuryComponent,
    MandarLandeComponent,
    NaumanGhadiallyComponent,
    SanjeevSinghComponent,
    SaswatBohidarComponent,
    VineetSinghComponent


   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    OurexportserviceModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
