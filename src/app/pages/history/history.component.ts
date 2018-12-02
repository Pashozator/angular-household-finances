import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from '../../types/operation';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { GetBudgetAction } from '../../store/actions/budget.actions';
import { selectDebit, selectOperations } from '../../store/selectors/budget.selectors';

@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
	public operations$: Observable<Operation[]>;
	public debit$: Observable<number>;

	constructor(private store: Store<AppState>) {
		this.operations$ = store.pipe(select(selectOperations));
		this.debit$ = store.pipe(select(selectDebit));
	}

	ngOnInit() {
		this.store.dispatch(new GetBudgetAction());
	}
}
