import {
	AddOperationAction,
	AddOperationFailureAction,
	AddOperationSuccessAction,
	BudgetActionTypes,
	EditOperationAction,
	EditOperationSuccessAction,
	GetBudgetAction,
	GetBudgetFailureAction,
	GetBudgetSuccessAction,
	ReduceDebitAction,
	RemoveOperationAction,
	RemoveOperationFailureAction,
	RemoveOperationSuccessAction
} from './budget.actions';
import { Budget } from '../../types/budget';
import { guid } from '../../modules/shared/utils/guid-util';
import { Operation } from '../../types/operation';
import { Update } from '@ngrx/entity';
import { Goal } from '../../types/goal';

describe('GetBudgetAction', () => {
	it('should create an action', () => {
		const action = new GetBudgetAction();

		expect({ ...action }).toEqual({ type: BudgetActionTypes.GET_BUDGET });
	});
});

describe('GetBudgetSuccessAction', () => {
	it('should create an action', () => {
		const payload: Budget = {
			operations: [
				new Operation(guid(), 'Test', '2018-12-02', 3000, 'Opis')
			],
			debit: 3000
		};

		const action = new GetBudgetSuccessAction(payload);

		expect({ ...action }).toEqual({ type: BudgetActionTypes.GET_BUDGET_SUCCESS, payload });
	});
});

describe('GetBudgetFailureAction', () => {
	it('should create an action', () => {
		const action = new GetBudgetFailureAction();

		expect({ ...action }).toEqual({ type: BudgetActionTypes.GET_BUDGET_FAILURE });
	});
});

describe('AddOperationAction', () => {
	it('should create an action', () => {
		const payload: Operation = new Operation(guid(), 'Test', '2018-12-02', 3000, 'Opis'),
			action = new AddOperationAction(payload);

		expect({ ...action }).toEqual({ type: BudgetActionTypes.ADD_OPERATION, payload });
	});
});

describe('AddOperationSuccessAction', () => {
	it('should create an action', () => {
		const payload: Operation = new Operation(guid(), 'Test', '2018-12-02', 3000, 'Opis'),
			action = new AddOperationSuccessAction(payload);

		expect({ ...action }).toEqual({ type: BudgetActionTypes.ADD_OPERATION_SUCCESS, payload });
	});
});

describe('AddOperationFailureAction', () => {
	it('should create an action', () => {
		const action = new AddOperationFailureAction();

		expect({ ...action }).toEqual({ type: BudgetActionTypes.ADD_OPERATION_FAILURE });
	});
});

describe('EditOperationAction', () => {
	it('should create an action', () => {
		const payload: { operation: Operation, oldValue: number } = {
				operation: new Operation(guid(), 'Test', '2018-12-01', 300, 'Opis'),
				oldValue: 400
			},
			action = new EditOperationAction(payload);

		expect({ ...action }).toEqual({ type: BudgetActionTypes.EDIT_OPERATION, payload });
	});
});

describe('EditOperationSuccessAction', () => {
	it('should create an action', () => {
		const id = guid(),
			payload: { operation: Update<Operation>, oldValue: number } = {
				operation: {
					id: id,
					changes: new Operation(id, 'Test', '2018-12-01', 300, 'Opis')
				}, oldValue: 400
			},
			action = new EditOperationSuccessAction(payload);

		expect({ ...action }).toEqual({ type: BudgetActionTypes.EDIT_OPERATION_SUCCESS, payload });
	});
});

describe('RemoveOperationAction', () => {
	it('should create an action', () => {
		const payload: Operation = new Operation(guid(), 'Test', '2018-12-01', 300, 'Opis'),
			action = new RemoveOperationAction(payload);

		expect({ ...action }).toEqual({ type: BudgetActionTypes.REMOVE_OPERATION, payload });
	});
});

describe('RemoveOperationSuccessAction', () => {
	it('should create an action', () => {
		const payload: Operation = new Operation(guid(), 'Test', '2018-12-01', 300, 'Opis'),
			action = new RemoveOperationSuccessAction(payload);

		expect({ ...action }).toEqual({ type: BudgetActionTypes.REMOVE_OPERATION_SUCCESS, payload });
	});
});

describe('RemoveOperationFailureAction', () => {
	it('should create an action', () => {
		const action = new RemoveOperationFailureAction();

		expect({ ...action }).toEqual({ type: BudgetActionTypes.REMOVE_OPERATION_FAILURE });
	});
});

describe('ReduceDebitAction', () => {
	it('should create an action', () => {
		const payload: Goal = new Goal(guid(), 'Test', 'Opis', 300),
			action = new ReduceDebitAction(payload);

		expect({ ...action }).toEqual({ type: BudgetActionTypes.REDUCE_DEBIT, payload });
	});
});
