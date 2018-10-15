import { ActionWithPayload } from '../interfaces/action-with-payload';
import { Operation } from '../../types/operation';
import { Goal } from '../../types/goal';

export enum BudgetActionTypes {
	ADD_OPERATION = '[Budget] Add operation',
	EDIT_OPERATION = '[Budget] Edit operation',
	REMOVE_OPERATION = '[Budget] Remove operation',
	REDUCE_DEBIT = '[Budget] Reduce debit'
}

export class AddOperationAction implements ActionWithPayload<Operation> {
	readonly type = BudgetActionTypes.ADD_OPERATION;

	constructor(public payload: Operation) {
	}
}

export class EditOperationAction implements ActionWithPayload<Operation> {
	readonly type = BudgetActionTypes.EDIT_OPERATION;

	constructor(public payload: Operation) {
	}
}

export class RemoveOperationAction implements ActionWithPayload<Operation> {
	readonly type = BudgetActionTypes.REMOVE_OPERATION;

	constructor(public payload: Operation) {
	}
}

export class ReduceDebitAction implements ActionWithPayload<Goal> {
	readonly type = BudgetActionTypes.REDUCE_DEBIT;

	constructor(public payload: Goal) {
	}
}

export type BudgetActions = AddOperationAction
	| EditOperationAction
	| RemoveOperationAction
	| ReduceDebitAction;
