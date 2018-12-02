import { Injectable } from '@angular/core';
import { Location } from '@angular/common';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { Action, Store } from '@ngrx/store';
import { RouterActionTypes } from '../actions/router.actions';
import { map, tap } from 'rxjs/operators';
import { ActionWithPayload } from '../interfaces/action-with-payload';
import { AppState } from '../state/app.state';
import { Router } from '@angular/router';

@Injectable()
export class RouterEffects {
	@Effect({ dispatch: false })
	public go$: Observable<Action> = this.actions$
		.pipe(
			ofType(RouterActionTypes.GO),
			map((action: ActionWithPayload<any>) => action.payload),
			tap(({ path, query: queryParams, extras }) => this.router.navigate(path, { queryParams, ...extras }))
		);

	@Effect({ dispatch: false })
	public back$ = this.actions$
		.pipe(
			ofType(RouterActionTypes.BACK),
			tap(() => this.location.back())
		);

	@Effect({ dispatch: false })
	public forward$ = this.actions$
		.pipe(
			ofType(RouterActionTypes.FORWARD),
			tap(() => this.location.forward())
		);

	constructor(
		private actions$: Actions,
		private store: Store<AppState>,
		private router: Router,
		private location: Location
	) {
	}
}
