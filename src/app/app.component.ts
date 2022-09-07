import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  concepts = [
    {
      title: 'Smart and Dumb',
      url: 'smart-dumb/no-concept',
    },
    {
      title: 'Feature Module',
      url: 'feature-module-concept',
    },
    {
      title: 'SOLID',
      url: 'solid/single-responsibility',
    },
  ];
}
