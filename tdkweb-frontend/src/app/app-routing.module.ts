import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { PlaysComponent } from './components/plays/plays.component';
import { PressComponent } from './components/press/press.component';
import { PricesComponent } from './components/prices/prices.component';
import { ShowsComponent } from './components/shows/shows.component';
import { TeamComponent } from './components/team/team.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'stuecke', component: PlaysComponent},
  { path: 'vorstellungen', component: ShowsComponent},
  { path: 'team', component: TeamComponent},
  { path: 'preise', component: PricesComponent},
  { path: 'info', component: InfoComponent},
  { path: 'kontakt', component: ContactComponent},
  { path: 'presse', component: PressComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
