import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { selectBudget } from '../../store/selectors/app.selectors';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Year } from '../../types/year';
import { AddDialogComponent } from '../../modules/dialogs/components/add-dialog/add-dialog.component';
import { AddIncomeAction, AddOutgoAction } from '../../store/actions/budget.actions';

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
		this.dialog.open(AddDialogComponent, {
			data: 'Dodaj przychód'
		})
			.afterClosed()
			.toPromise()
			.then(result => this.store.dispatch(new AddIncomeAction({
				yearId: result.year,
				monthId: result.month,
				amount: result.amount
			})));
	}

	public openDialogAddOutgo(): void {
		this.dialog.open(AddDialogComponent, {
			data: 'Dodaj wydatek'
		})
			.afterClosed()
			.toPromise()
			.then(result => this.store.dispatch(new AddOutgoAction({
				yearId: result.year,
				monthId: result.month,
				amount: result.amount
			})));
	}
}
