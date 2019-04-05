import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  // template: `<app-servers></app-servers>`,
  styleUrls: [ './app.component.css' ]
  // styles: [`
  //   app-servers {
  //     color: dodgerblue;
  //   }
  // `]
})
export class AppComponent  {
  name = 'Angular';
}
