import { ActionWithPayload } from '../interfaces/action-with-payload';
import { Goal } from '../../types/goal';

export enum GoalsActionTypes {
	ADD_GOAL = '[Goals] Add goal',
	EDIT_GOAL = '[Goals] Edit goal',
	REMOVE_GOAL = '[Goals] Remove goal',
	REALIZE_GOAL = '[Goals] Realize goal'
}

export class AddGoalAction implements ActionWithPayload<Goal> {
	readonly type = GoalsActionTypes.ADD_GOAL;

	constructor(public payload: Goal) {
	}
}

export class EditGoalAction implements ActionWithPayload<Goal> {
	readonly type = GoalsActionTypes.EDIT_GOAL;

	constructor(public payload: Goal) {
	}
}

export class RemoveGoalAction implements ActionWithPayload<Goal> {
	readonly type = GoalsActionTypes.REMOVE_GOAL;

	constructor(public payload: Goal) {
	}
}

export class RealizeGoalAction implements ActionWithPayload<Goal> {
	readonly type = GoalsActionTypes.REALIZE_GOAL;

	constructor(public payload: Goal) {
	}
}

export type GoalsActions = AddGoalAction
	| EditGoalAction
	| RemoveGoalAction
	| RealizeGoalAction;
