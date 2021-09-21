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
    PageNotFoundComponent


   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    OurexportserviceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
