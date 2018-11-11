import { BudgetState } from '../state/budget.state';
import { BudgetActions, BudgetActionTypes } from '../actions/budget.actions';
import { Operation } from '../../types/operation';
import { guid } from '../../modules/shared/utils/guid-util';
import * as moment from 'moment';

const initialState: BudgetState = {
	operations: [],
	debit: 0
};

export function budgetReducer(state: BudgetState = initialState, action: BudgetActions): BudgetState {
	switch (action.type) {
		case BudgetActionTypes.GET_BUDGET: {
			return state;
		}
		case BudgetActionTypes.GET_BUDGET_SUCCESS: {
			return action.payload;
		}
		case BudgetActionTypes.GET_BUDGET_FAILURE: {
			return state;
		}
		case BudgetActionTypes.ADD_OPERATION: {
			return state;
		}
		case BudgetActionTypes.ADD_OPERATION_SUCCESS: {
			return { ...state, operations: [action.payload, ...state.operations], debit: state.debit + action.payload.value };
		}
		case BudgetActionTypes.ADD_OPERATION_FAILURE: {
			return state;
		}
		case BudgetActionTypes.EDIT_OPERATION: {
			return state;
		}
		case BudgetActionTypes.EDIT_OPERATION_SUCCESS: {
			const operations = state.operations,
				index = operations.findIndex(operation => operation.id === action.payload.id);

			operations[index] = action.payload;

			let debit = 0;

			for (const operation of operations) {
				debit += operation.value;
			}

			return { ...state, operations: operations, debit: debit };
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
				operations: state.operations.filter(operation => operation.id !== action.payload.id),
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
