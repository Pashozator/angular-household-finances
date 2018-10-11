import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { budgetReducer } from './budget.reducer';
import { goalsReducer } from './goals.reducer';

export const reducers: ActionReducerMap<AppState> = {
	budget: budgetReducer,
	goals: goalsReducer
};
