import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddDialogComponent } from '../../modules/dialogs/components/add-dialog/add-dialog.component';
import { AddIncomeAction, AddOutgoAction } from '../../store/actions/budget.actions';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { Subscription } from 'rxjs';
import { selectBudget } from '../../store/selectors/app.selectors';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {
	public year: number;
	public data: any[];
	private subscriptions: Subscription[];

	constructor(
		public dialog: MatDialog,
		private store: Store<AppState>
	) {
		this.year = new Date().getFullYear();
		this.subscriptions = [];
		this.data = [];
		const budgetSubscription = this.store.pipe(
			select(selectBudget),
			map(budget => budget.years.filter(year => year.label === '2018')[0])
		)
			.subscribe(year => {
				const data = [];

				for (const month of year.months) {
					data.push({ name: month.label, value: month.income - month.outgo });
				}

				this.data = data;
			});

		this.subscriptions.push(budgetSubscription);
	}

	ngOnInit() {
	}

	ngOnDestroy() {
		for (const subscription of this.subscriptions) {
			subscription.unsubscribe();
		}
	}

	public yAxisTickFormatting(value: string): string {
		return `${value} zł`;
	}

	public onRealizeGoal(realizeGoal: boolean) {
	}

	public getSavePerYear(): number {
		return 0;
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
