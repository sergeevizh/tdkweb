import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

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
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { PersonTeaserComponent } from './components/person-teaser/person-teaser.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PersonComponent } from './components/person/person.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { registerLocaleData } from '@angular/common';
import localeDeAt from '@angular/common/locales/de-AT';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PlayTeaserComponent } from './components/play-teaser/play-teaser.component';
import { ShowsFilterPipe } from './pipes/shows-filter.pipe';
import { TicketDialogComponent } from './components/ticket-dialog/ticket-dialog.component';
import { PlayDetailComponent } from './components/play-detail/play-detail.component';
import { ShowTeaserComponent } from './components/show-teaser/show-teaser.component';
registerLocaleData(localeDeAt);

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
    PlaysComponent,
    PersonTeaserComponent,
    PageNotFoundComponent,
    PersonComponent,
    FooterComponent,
    ContactFormComponent,
    FilterPipe,
    PlayTeaserComponent,
    ShowsFilterPipe,
    TicketDialogComponent,
    PlayDetailComponent,
    ShowTeaserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
