import { Component } from '@angular/core';


@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles:[`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    // serverID = 10;
    // serverStatus = 'offline';
    serverId: number = 10;
    serverStatus: string = 'offline';

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    }

    getServerStatus() {
        return this.serverStatus;
    }

    getColor() {
        // ternary expression for === online green and else red
        return this.serverStatus === 'online' ? 'green' : 'red';
    }

}