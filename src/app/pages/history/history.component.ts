import { Component, OnInit } from '@angular/core';
import { FlowdataService } from '../../modules/core/services/flowdata.service';
import { MatDialog } from '@angular/material';
import { AddIncomeDialogComponent } from '../../modules/shared/components/dialogs/add-income-dialog/add-income-dialog.component';
import { AddOutgoDialogComponent } from '../../modules/shared/components/dialogs/add-outgo-dialog/add-outgo-dialog.component';

@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
	public incomes: number[];
	public outgos: number[];
	public savings: number[];

	constructor(
		private flowdata: FlowdataService,
		private dialog: MatDialog
	) {
		this.incomes = flowdata.getIncomePerMonth();
		this.outgos = flowdata.getOutgoPerMonth();
		this.savings = flowdata.getSavePerMonth();
	}

	ngOnInit() {
	}

	public openDialogAddIncome(): void {
		this.dialog.open(AddIncomeDialogComponent, {
			height: '300px',
			width: '500px'
		})
			.afterClosed()
			.subscribe(() => {
				this.incomes = this.flowdata.getIncomePerMonth();
				this.savings = this.flowdata.getSavePerMonth();
			});
	}

	public openDialogAddOutgo(): void {
		this.dialog.open(AddOutgoDialogComponent, {
			height: '300px',
			width: '500px'
		})
			.afterClosed()
			.subscribe(() => {
				this.outgos = this.flowdata.getOutgoPerMonth();
				this.savings = this.flowdata.getSavePerMonth();
			});
	}
}
