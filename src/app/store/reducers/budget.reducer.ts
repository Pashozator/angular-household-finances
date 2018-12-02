import { BudgetState } from '../state/budget.state';
import { BudgetActions, BudgetActionTypes } from '../actions/budget.actions';
import { operationAdapter } from '../adapters/operations.adapter';

const initialState: BudgetState = {
	operations: operationAdapter.getInitialState(),
	debit: 0
};

export function budgetReducer(state: BudgetState = initialState, action: BudgetActions): BudgetState {
	switch (action.type) {
		case BudgetActionTypes.GET_BUDGET: {
			return state;
		}
		case BudgetActionTypes.GET_BUDGET_SUCCESS: {
			return {
				...state,
				operations: operationAdapter.addAll(action.payload.operations, state.operations),
				debit: action.payload.debit
			};
		}
		case BudgetActionTypes.GET_BUDGET_FAILURE: {
			return state;
		}
		case BudgetActionTypes.ADD_OPERATION: {
			return state;
		}
		case BudgetActionTypes.ADD_OPERATION_SUCCESS: {
			return {
				...state,
				operations: operationAdapter.addOne(action.payload, state.operations),
				debit: state.debit + action.payload.value
			};
		}
		case BudgetActionTypes.ADD_OPERATION_FAILURE: {
			return state;
		}
		case BudgetActionTypes.EDIT_OPERATION: {
			return state;
		}
		case BudgetActionTypes.EDIT_OPERATION_SUCCESS: {
			return {
				...state,
				operations: operationAdapter.updateOne(action.payload.operation, state.operations),
				debit: state.debit - action.payload.oldValue + action.payload.operation.changes.value
			};
		}
		case BudgetActionTypes.EDIT_OPERATION_FAILURE: {
			return state;
		}
		case BudgetActionTypes.REMOVE_OPERATION: {
			return state;
		}
		case BudgetActionTypes.REMOVE_OPERATION_SUCCESS: {
			return {
				...state,
				operations: operationAdapter.removeOne(action.payload.id, state.operations),
				debit: state.debit - action.payload.value
			};
		}
		case BudgetActionTypes.REMOVE_OPERATION_FAILURE: {
			return state;
		}
		case BudgetActionTypes.REDUCE_DEBIT: {
			return { ...state, debit: state.debit - action.payload.value };
		}
		default:
			return state;
	}
}
