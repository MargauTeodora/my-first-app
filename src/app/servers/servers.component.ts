import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  // styleUrls: ['./servers.component.css']
  styles:[`
  h3{
    color: pink  }
  `
  ]
})
export class ServersComponent {

}
