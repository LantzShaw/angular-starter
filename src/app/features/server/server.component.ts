import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent implements OnInit, OnDestroy {
  allowNewServer: boolean = false;
  serverConnectionStatus: string = 'no server available';
  serverName: string = '';
  username: string = '';
  userList: Array<string> = ['Lantz', 'Jenny', 'Anne'];
  serverCreated: boolean = false;

  @Input()
  // name: string = '';
  name?: string;

  @Output()
  onAdd = new EventEmitter();

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnChanges(): void {
    console.log('changes');
  }
  ngOnInit(): void {
    console.log('initialize');
  }

  ngOnDestroy(): void {
    console.log('destroy!');
  }

  onAddClick() {
    this.onAdd.emit('litecase');
  }

  onGetServerConnectionStatus(): void {
    this.serverConnectionStatus = 'server is running';
  }

  onUpdateServerName(e: Event): void {
    // console.log('name', e.target.value);

    this.serverName = (<HTMLInputElement>e.target).value;
  }

  getColor() {
    return this.serverCreated ? 'red' : 'green';
  }
}
