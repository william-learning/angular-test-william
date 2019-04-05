import { Component } from '@angular/core';

@Component({
  selector: 'app-server', 
  templateUrl: './server.component.html',

})
export class ServerComponent {
  
  // Hardcoded
  serverId: number = 10;
  serverStatus: string = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}