import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ActionWithPayload } from '../interfaces/action-with-payload';
import {
	AddGoalFailureAction,
	AddGoalSuccessAction,
	EditGoalFailureAction,
	EditGoalSuccessAction,
	GetGoalsFailureAction,
	GetGoalsSuccessAction,
	GoalsActionTypes,
	RealizeGoalFailureAction,
	RealizeGoalSuccessAction,
	RemoveGoalFailureAction,
	RemoveGoalSuccessAction
} from '../actions/goals.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { ReduceDebitAction } from '../actions/budget.actions';
import { Goal } from '../../types/goal';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { ApiService } from '../../modules/core/services/api.service';
import { ErrorService } from '../../modules/error/services/error.service';
import { LoaderService } from '../../modules/loader/services/loader.service';
import { Update } from '@ngrx/entity';

@Injectable()
export class GoalsEffects {
	@Effect()
	public getGoals$: Observable<ActionWithPayload<any> | Action> = this.actions$
		.pipe(
			ofType(GoalsActionTypes.GET_GOALS),
			tap(() => this.loader.open()),
			switchMap(() => this.api.getGoals()
				.pipe(
					tap(() => this.loader.close()),
					map(res => new GetGoalsSuccessAction(res.data)),
					catchError(() => of(new GetGoalsFailureAction()))
				)
			)
		);

	@Effect()
	public addGoal$: Observable<ActionWithPayload<any> | Action> = this.actions$
		.pipe(
			ofType(GoalsActionTypes.ADD_GOAL),
			tap(() => this.loader.open()),
			switchMap((action: ActionWithPayload<Goal>) => this.api.addGoal(action.payload)
				.pipe(
					tap(() => this.loader.close()),
					map(res => new AddGoalSuccessAction(res.data)),
					catchError(() => of(new AddGoalFailureAction()))
				)
			)
		);

	@Effect()
	public editGoal$: Observable<ActionWithPayload<any> | Action> = this.actions$
		.pipe(
			ofType(GoalsActionTypes.EDIT_GOAL),
			tap(() => this.loader.open()),
			switchMap((action: ActionWithPayload<Goal>) => this.api.editGoal(action.payload)
				.pipe(
					tap(() => this.loader.close()),
					map(() => new EditGoalSuccessAction({ id: action.payload.id, changes: action.payload })),
					catchError(() => of(new EditGoalFailureAction()))
				)
			)
		);

	@Effect()
	public removeGoal$: Observable<ActionWithPayload<any> | Action> = this.actions$
		.pipe(
			ofType(GoalsActionTypes.REMOVE_GOAL),
			tap(() => this.loader.open()),
			switchMap((action: ActionWithPayload<Goal>) => this.api.removeGoal(action.payload)
				.pipe(
					tap(() => this.loader.close()),
					map(() => new RemoveGoalSuccessAction(action.payload)),
					catchError(() => of(new RemoveGoalFailureAction()))
				)
			)
		);

	@Effect()
	public realizeGoal$: Observable<ActionWithPayload<any> | Action> = this.actions$
		.pipe(
			ofType(GoalsActionTypes.REALIZE_GOAL),
			tap(() => this.loader.open()),
			switchMap((action: ActionWithPayload<Goal>) => this.api.realizeGoal(action.payload)
				.pipe(
					tap(() => this.loader.close()),
					map(() => new RealizeGoalSuccessAction({ id: action.payload.id, changes: action.payload })),
					catchError(() => of(new RealizeGoalFailureAction()))
				)
			)
		);

	@Effect()
	public realizeGoalSuccess$ = this.actions$
		.pipe(
			ofType(GoalsActionTypes.REALIZE_GOAL_SUCCESS),
			map((action: ActionWithPayload<Update<Goal>>) => new ReduceDebitAction(<Goal>action.payload.changes))
		);

	@Effect({ dispatch: false })
	public failure$ = this.actions$
		.pipe(
			ofType(
				GoalsActionTypes.GET_GOALS_FAILURE,
				GoalsActionTypes.ADD_GOAL_FAILURE,
				GoalsActionTypes.EDIT_GOAL_FAILURE,
				GoalsActionTypes.REMOVE_GOAL_FAILURE,
				GoalsActionTypes.REALIZE_GOAL_FAILURE
			),
			tap(() => {
				this.loader.close();
				this.error.occurs();
			})
		);

	constructor(
		private actions$: Actions,
		private error: ErrorService,
		private loader: LoaderService,
		private api: ApiService
	) {
	}
}
