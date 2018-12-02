import { BudgetState } from './budget.state';
import { RouterStateUrl } from './router.state';
import { RouterReducerState } from '@ngrx/router-store';
import { GoalsState } from './goals.state';

export interface AppState {
	budget: BudgetState;
	goals: GoalsState;
	router: RouterReducerState<RouterStateUrl>;
}
