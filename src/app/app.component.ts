import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Breaking News', url: '/liste', icon: 'mail' },
    { title: 'Kategorien', url: '/kategorien', icon: 'mail' },
    { title: 'Einstellungen', url: '/setup', icon: 'warning' },
    { title: 'Hilfe', url: '/hilfe', icon: 'warning' },
  ];
  constructor() {}
}
