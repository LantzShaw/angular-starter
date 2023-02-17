import { Component, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
export class ServersComponent implements OnInit, OnDestroy {
  // 为什么这里用public
  constructor(public http: HttpClient) {}

  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {
    let api = 'http://localhost:8083';
    this.http.get(api).subscribe((response: any) => {
      console.log(response);
    });

    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };

    this.http.post(api, httpOptions).subscribe((response: any) => {});
  }

  ngOnDestroy(): void {}

  serverName: string = 'Server Name';

  dateStr: Date = new Date();

  time: Date | null = null;
  defaultOpenValue = new Date(0, 0, 0, 0, 0, 0);

  onAddServer(server: string) {}
}
