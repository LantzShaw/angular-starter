import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers', // NOTE: 不支持id
  template: `<app-server></app-server>`,
  templateUrl: './servers.component.html', // NOTE: 当template与templateUrl同时出现时，templateUrl优先级更高
  styleUrls: ['./servers.component.css'],
  // styles: [
  //   `
  //     h2 {
  //       color: #f40;
  //     }
  //   `,
  // ],
})
export class ServersComponent implements OnInit {
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  serverName: string = 'Server Name';

  dateStr: Date = new Date();

  onAddServer(server: string) {}
}
