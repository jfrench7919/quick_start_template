import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Game } from './models/game.model';
import * as ScoreboardPageActions from '../store/actions/game.actions';
import * as RosterPageActions from '../store/actions/team.actions';
import { Team } from './models/team.model';
import { state } from '@angular/animations';


@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class MyStoreComponent implements OnInit, OnDestroy {

  componentDestroyed$ = new Subject<void>();
  board$: Observable<{ game: { home: number, away: number }, roster: { teams: any[] } }>;
  game: Game = { home: 0, away: 0 };
  teams: any[] = [];

  constructor(private store: Store<any>) {
    this.board$ = this.store.select(state => state).pipe(takeUntil(this.componentDestroyed$));
  }

  ngOnInit() {
    this.board$.pipe(takeUntil(this.componentDestroyed$)).subscribe(g => {
      this.game = g.game;
      this.teams = g.roster.teams;
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

  resetRoster() {
    this.store.dispatch(RosterPageActions.resetRoster());
  }

  addToRoster(newTeams: Team) {
    // Make deep copy
    const teamsCopy: any[] = JSON.parse(JSON.stringify(this.teams));
    teamsCopy.push(newTeams);

    this.store.dispatch(RosterPageActions.addToRoster({ teams: teamsCopy }));
    this.store.dispatch(ScoreboardPageActions.resetScore());
  }
}
