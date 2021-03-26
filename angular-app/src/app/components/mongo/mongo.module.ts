import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MongoComponent } from './mongo.component';



@NgModule({
  declarations: [
    MongoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MongoComponent
  ]
})
export class MongoModule { }
