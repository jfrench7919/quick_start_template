import { state } from '@angular/animations';
import { Action, createReducer, on } from '@ngrx/store';
import * as RosterPageActions from '../actions/team.actions';
import { Team } from '../models/team.model';

export const rosterFeatureKey = 'roster';

export interface State {
  teams: any[];
}

export const initialState: State = {
  teams: [],
}

const rosterReducer = createReducer(
  initialState,
  on(RosterPageActions.resetRoster, state => ({ ...state, teams: [] })),
  on(RosterPageActions.addToRoster, (state, { teams }) => ({ teams }))
)

export function reducer(state: State | undefined, action: Action) {
  return rosterReducer(state, action);
}
