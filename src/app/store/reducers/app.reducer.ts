import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { budgetReducer } from './budget.reducer';

export const reducers: ActionReducerMap<AppState> = {
	budget: budgetReducer
};
