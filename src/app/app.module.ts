import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { AppRoutingModule } from './app-routing.module';
import { TestPipe } from './shared/pipes/test.pipe';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, TestPipe],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
