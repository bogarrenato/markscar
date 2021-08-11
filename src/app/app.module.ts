import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { CarPartsComponent } from './car-parts/car-parts.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CarpartListComponent } from './components/carpart-list/carpart-list.component';
import { CarpartComponent } from './components/carpart/carpart.component'
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';

const routes:Routes=[
  {path:'carparts',component:CarpartListComponent},
  {path:'',component:LandingPageComponent},
  {path:'**',component:LandingPageComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    CarPartsComponent,
    CarpartListComponent,
    CarpartComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
