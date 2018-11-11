import { ActionWithPayload } from '../interfaces/action-with-payload';
import { Operation } from '../../types/operation';
import { Goal } from '../../types/goal';
import { Action } from '@ngrx/store';
import { Budget } from '../../types/budget';

export enum BudgetActionTypes {
	GET_BUDGET = '[Budget] Get budget',
	GET_BUDGET_SUCCESS = '[Budget] Get budget success',
	GET_BUDGET_FAILURE = '[Budget] Get budget failure',
	ADD_OPERATION = '[Budget] Add operation',
	ADD_OPERATION_SUCCESS = '[Budget] Add operation success',
	ADD_OPERATION_FAILURE = '[Budget] Add operation failure',
	EDIT_OPERATION = '[Budget] Edit operation',
	EDIT_OPERATION_SUCCESS = '[Budget] Edit operation success',
	EDIT_OPERATION_FAILURE = '[Budget] Edit operation failure',
	REMOVE_OPERATION = '[Budget] Remove operation',
	REMOVE_OPERATION_SUCCESS = '[Budget] Remove operation success',
	REMOVE_OPERATION_FAILURE = '[Budget] Remove operation failure',
	REDUCE_DEBIT = '[Budget] Reduce debit'
}

export class GetBudgetAction implements Action {
	readonly type = BudgetActionTypes.GET_BUDGET;
}

export class GetBudgetSuccessAction implements ActionWithPayload<Budget> {
	readonly type = BudgetActionTypes.GET_BUDGET_SUCCESS;

	constructor(public payload: Budget) {
	}
}

export class GetBudgetFailureAction implements Action {
	readonly type = BudgetActionTypes.GET_BUDGET_FAILURE;
}

export class AddOperationAction implements ActionWithPayload<Operation> {
	readonly type = BudgetActionTypes.ADD_OPERATION;

	constructor(public payload: Operation) {
	}
}

export class AddOperationSuccessAction implements ActionWithPayload<Operation> {
	readonly type = BudgetActionTypes.ADD_OPERATION_SUCCESS;

	constructor(public payload: Operation) {
	}
}

export class AddOperationFailureAction implements Action {
	readonly type = BudgetActionTypes.ADD_OPERATION_FAILURE;
}

export class EditOperationAction implements ActionWithPayload<Operation> {
	readonly type = BudgetActionTypes.EDIT_OPERATION;

	constructor(public payload: Operation) {
	}
}

export class EditOperationSuccessAction implements ActionWithPayload<Operation> {
	readonly type = BudgetActionTypes.EDIT_OPERATION_SUCCESS;

	constructor(public payload: Operation) {
	}
}

export class EditOperationFailureAction implements Action {
	readonly type = BudgetActionTypes.EDIT_OPERATION_FAILURE;
}

export class RemoveOperationAction implements ActionWithPayload<Operation> {
	readonly type = BudgetActionTypes.REMOVE_OPERATION;

	constructor(public payload: Operation) {
	}
}

export class RemoveOperationSuccessAction implements ActionWithPayload<Operation> {
	readonly type = BudgetActionTypes.REMOVE_OPERATION_SUCCESS;

	constructor(public payload: Operation) {
	}
}

export class RemoveOperationFailureAction implements Action {
	readonly type = BudgetActionTypes.REMOVE_OPERATION_FAILURE;
}

export class ReduceDebitAction implements ActionWithPayload<Goal> {
	readonly type = BudgetActionTypes.REDUCE_DEBIT;

	constructor(public payload: Goal) {
	}
}

export type BudgetActions = GetBudgetAction
	| GetBudgetSuccessAction
	| GetBudgetFailureAction
	| AddOperationAction
	| AddOperationSuccessAction
	| AddOperationFailureAction
	| EditOperationAction
	| EditOperationSuccessAction
	| EditOperationFailureAction
	| RemoveOperationAction
	| RemoveOperationSuccessAction
	| RemoveOperationFailureAction
	| ReduceDebitAction;
