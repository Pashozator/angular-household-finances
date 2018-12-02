import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { Observable } from 'rxjs';
import { Goal } from '../../types/goal';
import { GetGoalsAction } from '../../store/actions/goals.actions';
import { selectGoals } from '../../store/selectors/goals.selectors';
import { selectDebit } from '../../store/selectors/budget.selectors';

@Component({
	selector: 'app-goals',
	templateUrl: './goals.component.html',
	styleUrls: ['./goals.component.scss']
})
export class GoalsComponent implements OnInit {
	public goals$: Observable<Goal[]>;
	public debit$: Observable<number>;

	constructor(private store: Store<AppState>) {
		this.goals$ = store.pipe(select(selectGoals));
		this.debit$ = store.pipe(select(selectDebit));
	}

	ngOnInit() {
		this.store.dispatch(new GetGoalsAction());
	}
}
