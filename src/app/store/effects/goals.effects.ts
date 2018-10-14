import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionWithPayload } from '../interfaces/action-with-payload';
import { GoalsActionTypes } from '../actions/goals.actions';
import { map } from 'rxjs/operators';
import { ReduceDebitAction } from '../actions/budget.actions';
import { Goal } from '../../types/goal';

@Injectable()
export class GoalsEffects {
	@Effect()
	public realizeGoal$ = this.actions$
		.pipe(
			ofType(GoalsActionTypes.REALIZE_GOAL),
			map((action: ActionWithPayload<Goal>) => new ReduceDebitAction(action.payload))
		);

	constructor(private actions$: Actions) {
	}
}
