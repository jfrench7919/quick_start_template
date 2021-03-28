import { createAction, props } from '@ngrx/store';
import { Team } from '../models/team.model';

export const resetRoster = createAction('[Team Page] Roster Reset');
export const addToRoster = createAction('[Team Page] Set Roster', props<{ teams: any[] }>());
