import { Component, OnInit } from '@angular/core';

@Component({
  // By HTML element
  selector: 'app-servers',
  
  // By HTML attribute
  // selector: '[app-servers]',
  
  // By HTML class
  // selector: '.app-servers',
  
  templateUrl: './servers.component.html',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No server was created!';

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server was created!';
  }

  onUpdateServerName(event: any) {
    // console.log(event);
    // this.serverName = event.data;
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}