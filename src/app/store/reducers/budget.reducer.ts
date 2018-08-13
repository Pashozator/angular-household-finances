import { Budget } from '../../types/budget';
import { BudgetActions } from '../actions/budget.actions';

const initialState = new Budget();

export function budgetReducer(state: Budget = initialState, action: BudgetActions): Budget {
	switch (action.type) {
		default:
			return state;
	}
}
