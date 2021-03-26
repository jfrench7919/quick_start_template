import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MongoModule } from './components/mongo/mongo.module';
import { NavBarModule } from './components/nav-bar/nav-bar.module';
import { StoreModule } from './components/store/store.module';
import { TerminalCommandModule } from './components/terminal-command/terminal-command.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MongoModule,
    NavBarModule,
    StoreModule,
    TerminalCommandModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
