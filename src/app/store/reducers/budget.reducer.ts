import { BudgetState } from '../state/budget.state';
import { BudgetActions, BudgetActionTypes } from '../actions/budget.actions';

const initialState: BudgetState = {
	operations: []
};

export function budgetReducer(state: BudgetState = initialState, action: BudgetActions): BudgetState {
	switch (action.type) {
		case BudgetActionTypes.ADD_OPERATION:
			return { ...state, operations: [action.payload, ...state.operations] };
		case BudgetActionTypes.REMOVE_OPERATION:
			return state;
		default:
			return state;
	}
}
