import { ActionWithPayload } from '../interfaces/action-with-payload';
import { Goal } from '../../types/goal';
import { Action } from '@ngrx/store';

export enum GoalsActionTypes {
	GET_GOALS = '[Goals] Get goals',
	GET_GOALS_SUCCESS = '[Goals] Get goals success',
	GET_GOALS_FAILURE = '[Goals] Get goals failure',
	ADD_GOAL = '[Goals] Add goal',
	ADD_GOAL_SUCCESS = '[Goals] Add goal success',
	ADD_GOAL_FAILURE = '[Goals] Add goal failure',
	EDIT_GOAL = '[Goals] Edit goal',
	EDIT_GOAL_SUCCESS = '[Goals] Edit goal success',
	EDIT_GOAL_FAILURE = '[Goals] Edit goal failure',
	REMOVE_GOAL = '[Goals] Remove goal',
	REMOVE_GOAL_SUCCESS = '[Goals] Remove goal success',
	REMOVE_GOAL_FAILURE = '[Goals] Remove goal failure',
	REALIZE_GOAL = '[Goals] Realize goal',
	REALIZE_GOAL_SUCCESS = '[Goals] Realize goal success',
	REALIZE_GOAL_FAILURE = '[Goals] Realize goal failure'
}

export class GetGoalsAction implements Action {
	readonly type = GoalsActionTypes.GET_GOALS;
}

export class GetGoalsSuccessAction implements ActionWithPayload<Goal[]> {
	readonly type = GoalsActionTypes.GET_GOALS_SUCCESS;

	constructor(public payload: Goal[]) {
	}
}

export class GetGoalsFailureAction implements Action {
	readonly type = GoalsActionTypes.GET_GOALS_FAILURE;
}

export class AddGoalAction implements ActionWithPayload<Goal> {
	readonly type = GoalsActionTypes.ADD_GOAL;

	constructor(public payload: Goal) {
	}
}

export class AddGoalSuccessAction implements ActionWithPayload<Goal> {
	readonly type = GoalsActionTypes.ADD_GOAL_SUCCESS;

	constructor(public payload: Goal) {
	}
}

export class AddGoalFailureAction implements Action {
	readonly type = GoalsActionTypes.ADD_GOAL_FAILURE;
}

export class EditGoalAction implements ActionWithPayload<Goal> {
	readonly type = GoalsActionTypes.EDIT_GOAL;

	constructor(public payload: Goal) {
	}
}

export class EditGoalSuccessAction implements ActionWithPayload<Goal> {
	readonly type = GoalsActionTypes.EDIT_GOAL_SUCCESS;

	constructor(public payload: Goal) {
	}
}

export class EditGoalFailureAction implements Action {
	readonly type = GoalsActionTypes.EDIT_GOAL_FAILURE;
}

export class RemoveGoalAction implements ActionWithPayload<Goal> {
	readonly type = GoalsActionTypes.REMOVE_GOAL;

	constructor(public payload: Goal) {
	}
}

export class RemoveGoalSuccessAction implements ActionWithPayload<Goal> {
	readonly type = GoalsActionTypes.REMOVE_GOAL_SUCCESS;

	constructor(public payload: Goal) {
	}
}

export class RemoveGoalFailureAction implements Action {
	readonly type = GoalsActionTypes.REMOVE_GOAL_FAILURE;
}

export class RealizeGoalAction implements ActionWithPayload<Goal> {
	readonly type = GoalsActionTypes.REALIZE_GOAL;

	constructor(public payload: Goal) {
	}
}

export class RealizeGoalSuccessAction implements ActionWithPayload<Goal> {
	readonly type = GoalsActionTypes.REALIZE_GOAL_SUCCESS;

	constructor(public payload: Goal) {
	}
}

export class RealizeGoalFailureAction implements Action {
	readonly type = GoalsActionTypes.REALIZE_GOAL_FAILURE;
}

export type GoalsActions = GetGoalsAction
	| GetGoalsSuccessAction
	| GetGoalsFailureAction
	| AddGoalAction
	| AddGoalSuccessAction
	| AddGoalFailureAction
	| EditGoalAction
	| EditGoalSuccessAction
	| EditGoalFailureAction
	| RemoveGoalAction
	| RemoveGoalSuccessAction
	| RemoveGoalFailureAction
	| RealizeGoalAction
	| RealizeGoalSuccessAction
	| RealizeGoalFailureAction;
