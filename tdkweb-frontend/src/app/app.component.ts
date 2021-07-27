import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tdkweb-frontend';

  navLinks = [
    {
      name: 'Stücke',
      link: 'stuecke'
    },
    {
      name: 'Spielplan & Karten',
      link: 'vorstellungen'
    },
    {
      name: 'Team',
      link: 'team'
    },
    {
      name: 'Infos & Preise',
      link: 'info'
    },
    {
      name: 'Kontakt',
      link: 'kontakt'
    },
    {
      name: 'Presse',
      link: 'presse'
    }
  ]

  menuOpen: boolean = false;

}
