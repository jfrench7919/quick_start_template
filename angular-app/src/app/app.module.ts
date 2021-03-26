import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavBarComponent } from './components/app-nav-bar/app-nav-bar.component';
import { AppMongoComponent } from './components/app-mongo/app-mongo.component';
import { AppNgrxComponent } from './components/app-ngrx/app-ngrx.component';

@NgModule({
  declarations: [
    AppComponent,
    AppNavBarComponent,
    AppMongoComponent,
    AppNgrxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
