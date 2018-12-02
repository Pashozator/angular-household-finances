import { BudgetState } from './budget.state';
import { Goal } from '../../types/goal';
import { RouterStateUrl } from './router.state';
import { RouterReducerState } from '@ngrx/router-store';

export interface AppState {
	budget: BudgetState;
	goals: Goal[];
	router: RouterReducerState<RouterStateUrl>;
}
