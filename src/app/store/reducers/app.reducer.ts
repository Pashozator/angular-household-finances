import { ActionReducerMap } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { budgetReducer } from './budget.reducer';
import { goalsReducer } from './goals.reducer';
import { routerReducer } from '@ngrx/router-store';

export const reducers: ActionReducerMap<AppState> = {
	budget: budgetReducer,
	goals: goalsReducer,
	router: routerReducer
};
