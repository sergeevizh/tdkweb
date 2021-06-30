import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TeamComponent } from './components/team/team.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { PricesComponent } from './components/prices/prices.component';
import { ShowsComponent } from './components/shows/shows.component';
import { ContactComponent } from './components/contact/contact.component';
import { PressComponent } from './components/press/press.component';
import { PlaysComponent } from './components/plays/plays.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamComponent,
    HomeComponent,
    InfoComponent,
    PricesComponent,
    ShowsComponent,
    ContactComponent,
    PressComponent,
    PlaysComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
