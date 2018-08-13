import { ActionWithPayload } from '../interfaces/action-with-payload';

export enum BudgetActionTypes {
	ADD_INCOME = '[Budget] Add income',
	ADD_OUTGO = '[Budget] Add outgo',
	ADD_SAVING = '[Budget] Add saving'
}

export class AddIncomeAction implements ActionWithPayload<any> {
	readonly type = BudgetActionTypes.ADD_INCOME;

	constructor(public payload: any) {
	}
}

export class AddOutgoAction implements ActionWithPayload<any> {
	readonly type = BudgetActionTypes.ADD_OUTGO;

	constructor(public payload: any) {
	}
}

export class AddSavingAction implements ActionWithPayload<any> {
	readonly type = BudgetActionTypes.ADD_SAVING;

	constructor(public payload: any) {
	}
}

export type BudgetActions = AddIncomeAction
	| AddOutgoAction
	| AddSavingAction;
