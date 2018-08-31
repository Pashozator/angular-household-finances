import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { GoalComponent } from './components/goal/goal.component';
import { MatDialog } from '@angular/material';
import { ChartComponent } from 'angular2-chartjs';
import { AddDialogComponent } from '../../modules/dialogs/components/add-dialog/add-dialog.component';
import { AddIncomeAction, AddOutgoAction } from '../../store/actions/budget.actions';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {
	@ViewChild('yearChart') chartComp: ChartComponent;
	@ViewChild('goal') goalComp: GoalComponent;
	public year: number;
	private subscriptions: Subscription[];

	constructor(
		public dialog: MatDialog,
		private store: Store<AppState>
	) {
		this.year = new Date().getFullYear();
		this.subscriptions = [];
	}

	ngOnInit() {
	}

	ngOnDestroy() {
		for (const subscription of this.subscriptions) {
			subscription.unsubscribe();
		}
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
