import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {

  serverId: number= 37;
  serverStatus: string = "Online";
  allowNewServer = true;
  serverCreationStatus: string = 'Server not created';
  serverName: string = 'codemind.com'
  userName: string = "";
  getServerStatus() {
    return this.serverStatus;
  }
  reset(){
   this.userName = "";
  }
  onCreateServer(){
    this.serverCreationStatus = 'Server Created'
  }
}
