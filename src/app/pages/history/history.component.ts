import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { selectBudget } from '../../store/selectors/app.selectors';
import { filter, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Year } from '../../types/year';

@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
	public year$: Observable<Year>;

	constructor(
		private store: Store<AppState>,
		private dialog: MatDialog
	) {
	}

	ngOnInit() {
		this.year$ = this.store.pipe(
			select(selectBudget),
			map(budget => budget.years.filter(year => year.label === '2018')[0])
		);
	}

	public openDialogAddIncome(): void {
	}

	public openDialogAddOutgo(): void {
	}
}
