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
		case BudgetActionTypes.ADD_OPERATION: {
			return { ...state, operations: [action.payload, ...state.operations], debit: state.debit + action.payload.value };
		}
		case BudgetActionTypes.EDIT_OPERATION: {
			const operations = state.operations,
				index = operations.findIndex(operation => operation.id === action.payload.id);

			operations[index] = action.payload;

			let debit = 0;

			for (const operation of operations) {
				debit += operation.value;
			}

			return { ...state, operations: operations, debit: debit };
		}
		case BudgetActionTypes.REMOVE_OPERATION: {
			return {
				...state,
				operations: state.operations.filter(operation => operation.id !== action.payload.id),
				debit: state.debit - action.payload.value
			};
		}
		case BudgetActionTypes.REDUCE_DEBIT: {
			const operation = new Operation(
				guid(),
				`Realizacja celu: ${action.payload.label}`,
				moment().format('YYYY-MM-DD'),
				-action.payload.value,
				action.payload.description
			);

			return { ...state, operations: [operation, ...state.operations], debit: state.debit - action.payload.value };
		}
		default:
			return state;
	}
}
