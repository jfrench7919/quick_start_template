import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Game } from './models/game.model';
import * as ScoreboardPageActions from '../../reducers/game.actions';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class MyStoreComponent implements OnInit, OnDestroy {

  componentDestroyed$ = new Subject<void>();
  game$: Observable<{ game: { home: number, away: number } }>;
  game: Game = { home: 0, away: 0 };

  constructor(private store: Store<any>) {
    this.game$ = this.store.select(state => state).pipe(takeUntil(this.componentDestroyed$));
  }

  ngOnInit() {
    this.game$.pipe(takeUntil(this.componentDestroyed$)).subscribe(g => {
      this.game = g.game;
    });
  }

  ngOnDestroy() {
    this.componentDestroyed$.next();
  }

  homeUpScore() {
    this.store.dispatch(ScoreboardPageActions.homeScore());
  }

  awayUpScore() {
    this.store.dispatch(ScoreboardPageActions.awayScore());
  }

  resetScore() {
    this.store.dispatch(ScoreboardPageActions.resetScore());
  }

}
