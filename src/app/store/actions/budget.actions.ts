import { ActionWithPayload } from '../interfaces/action-with-payload';

export enum BudgetActionTypes {
	ADD_INCOME = '[Budget] Add income',
	ADD_OUTGO = '[Budget] Add outgo'
}

export class AddIncomeAction implements ActionWithPayload<{ yearId: number, monthId: number, amount: number }> {
	readonly type = BudgetActionTypes.ADD_INCOME;

	constructor(public payload: { yearId: number, monthId: number, amount: number }) {
	}
}

export class AddOutgoAction implements ActionWithPayload<{ yearId: number, monthId: number, amount: number }> {
	readonly type = BudgetActionTypes.ADD_OUTGO;

	constructor(public payload: { yearId: number, monthId: number, amount: number }) {
	}
}

export type BudgetActions = AddIncomeAction
	| AddOutgoAction;
