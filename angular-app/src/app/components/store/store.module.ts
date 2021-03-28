import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyStoreComponent } from './store.component';
import { StoreModule } from '@ngrx/store';
import * as fromScoreboard from 'src/app/components/store/reducers/game.reducer';
import * as fromRoster from 'src/app/components/store/reducers/team.reducer';



@NgModule({
  declarations: [MyStoreComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromScoreboard.scoreboardFeatureKey, fromScoreboard.reducer),
    StoreModule.forFeature(fromRoster.rosterFeatureKey, fromRoster.reducer)
  ]
})
export class MyStoreModule { }
