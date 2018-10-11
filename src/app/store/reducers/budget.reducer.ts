import { BudgetState } from '../state/budget.state';
import { BudgetActions, BudgetActionTypes } from '../actions/budget.actions';

const initialState: BudgetState = {
	operations: [],
	debit: 0
};

export function budgetReducer(state: BudgetState = initialState, action: BudgetActions): BudgetState {
	switch (action.type) {
		case BudgetActionTypes.ADD_OPERATION:
			return { ...state, operations: [action.payload, ...state.operations], debit: state.debit + action.payload.value };
		case BudgetActionTypes.EDIT_OPERATION:
			const operations = state.operations,
				index = operations.findIndex(operation => operation.id === action.payload.id);

			operations[index] = action.payload;

			let debit = 0;

			for (const operation of operations) {
				debit += operation.value;
			}

			return { ...state, operations: operations, debit: debit };
		case BudgetActionTypes.REMOVE_OPERATION:
			return {
				...state,
				operations: state.operations.filter(operation => operation.id !== action.payload.id),
				debit: state.debit - action.payload.value
			};
		default:
			return state;
	}
}
