import { BudgetState } from './budget.state';
import { Goal } from '../../types/goal';

export interface AppState {
	budget: BudgetState;
	goals: Goal[];
}
