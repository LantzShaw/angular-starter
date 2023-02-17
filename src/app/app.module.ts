import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ServerComponent } from './features/server/server.component';
import { ServersComponent } from './features/servers/servers.component';
import { AppRoutingModule } from './app-routing.module';
import { TestPipe } from './shared/pipes/test.pipe';

import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzTimePickerModule } from 'ng-zorro-antd/time-picker';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, TestPipe],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    NzButtonModule,
    NzTimePickerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
