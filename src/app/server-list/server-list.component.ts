import { Component } from '@angular/core';

@Component({
  selector: 'app-server-list',
  templateUrl: './server-list.component.html',
  styleUrls: ['./server-list.component.css']
})
export class ServerListComponent {
  servers: any[] = [
    {
      name: 'Dev',
      size: 'small',
      creationDate: new Date(),
      status: 'offline'
    },
    {
      name: 'Qat',
      size: 'small',
      creationDate: new Date(),
      status: 'stable'
    },
    {
      name: 'Svt',
      size: 'medium',
      creationDate: new Date(),
      status: 'stable'
    },
    {
      name: 'Uat',
      size: 'large',
      creationDate: new Date(),
      status: 'stable'
    },
    {
      name: 'Prod',
      size: 'large',
      creationDate: new Date(),
      status: 'stable'
    }
  ];
}