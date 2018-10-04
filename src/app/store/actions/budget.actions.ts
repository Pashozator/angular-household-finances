import { ActionWithPayload } from '../interfaces/action-with-payload';
import { Operation } from '../../types/operation';

export enum BudgetActionTypes {
	ADD_OPERATION = '[Budget] Add operation',
	REMOVE_OPERATION = '[Budget] Remove operation'
}

export class AddOperationAction implements ActionWithPayload<Operation> {
	readonly type = BudgetActionTypes.ADD_OPERATION;

	constructor(public payload: Operation) {
	}
}

export class RemoveOperationAction implements ActionWithPayload<Operation> {
	readonly type = BudgetActionTypes.REMOVE_OPERATION;

	constructor(public payload: Operation) {
	}
}

export type BudgetActions = AddOperationAction
	| RemoveOperationAction;
