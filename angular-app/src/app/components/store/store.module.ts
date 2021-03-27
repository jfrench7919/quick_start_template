import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStoreComponent } from './store.component';
import { StoreModule } from '@ngrx/store';
import * as fromScoreboard from 'src/app/reducers/game.reducer';



@NgModule({
  declarations: [MyStoreComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromScoreboard.scoreboardFeatureKey, fromScoreboard.reducer)
  ]
})
export class MyStoreModule { }
