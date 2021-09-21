import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CareersComponent } from './careers/careers.component';
import { FunctionsComponent } from './functions/functions.component';
import { HeaderComponent } from './header/header/header.component';
import { PageNotFoundComponent } from './header/page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { IndustriesComponent } from './industries/industries.component';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [
  {path:'', redirectTo:'home', pathMatch:'full'},
  {path:'home',component:HomeComponent},
  // { path:'marketing', component: MarketingOperationsComponent},
  {path:'industries', component:IndustriesComponent },
  {path:'functions', component:FunctionsComponent},
  {path:'about', component:AboutComponent},
  {path:'career', component:CareersComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,MatInputModule]
})
export class AppRoutingModule { }
