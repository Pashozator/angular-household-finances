import { Action } from '@ngrx/store';
import { NavigationExtras } from '@angular/router';
import { ActionWithPayload } from '../interfaces/action-with-payload';

export enum RouterActionTypes {
	GO = '[Router] Go',
	BACK = '[Router] Back',
	FORWARD = '[Router] Forward'
}

export class RouterGoAction implements ActionWithPayload<{
	path: any[];
	query?: object;
	extras?: NavigationExtras;
}> {
	readonly type = RouterActionTypes.GO;

	constructor(public payload: {
		path: any[];
		query?: object;
		extras?: NavigationExtras;
	}) {
	}
}

export class RouterBackAction implements Action {
	readonly type = RouterActionTypes.BACK;
}

export class RouterForwardAction implements Action {
	readonly type = RouterActionTypes.FORWARD;
}

export type RouterActions =
	| RouterGoAction
	| RouterBackAction
	| RouterForwardAction;
