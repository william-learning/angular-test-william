import { Component, OnInit } from '@angular/core';

@Component({
  // By HTML element
  selector: 'app-servers',
  
  // By HTML attribute
  // selector: '[app-servers]',
  
  // By HTML class
  // selector: '.app-servers',
  
  // templateUrl: './servers.component.html',
  template: `
    <app-server></app-server>
    <app-server></app-server>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}