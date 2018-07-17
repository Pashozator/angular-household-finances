import { Component, OnInit } from '@angular/core';
import { FlowdataService } from '../../core/services/flowdata.service';
import { MatDialog } from '@angular/material';
import { AddIncomeDialogComponent } from '../../shared/components/dialogs/add-income-dialog/add-income-dialog.component';
import { AddOutgoDialogComponent } from '../../shared/components/dialogs/add-outgo-dialog/add-outgo-dialog.component';

@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
	private incomes: number[];
	private outgos: number[];
	private savings: number[];

	constructor(
		private flowdata: FlowdataService,
		private dialog: MatDialog
	) {
	}

	ngOnInit() {
		this.incomes = this.flowdata.getIncomePerMonth();
		this.outgos = this.flowdata.getOutgoPerMonth();
		this.savings = this.flowdata.getSavePerMonth();
	}

	public openDialogAddIncome(): void {
		let incomeModal = this.dialog.open(AddIncomeDialogComponent, {
			height: '300px',
			width: '500px'
		});
		incomeModal.afterClosed().subscribe(() => {
			this.incomes = this.flowdata.getIncomePerMonth();
			this.savings = this.flowdata.getSavePerMonth();
		});
	}

	public openDialogAddOutgo(): void {
		let outgoModal = this.dialog.open(AddOutgoDialogComponent, {
			height: '300px',
			width: '500px'
		});
		outgoModal.afterClosed().subscribe(() => {
			this.outgos = this.flowdata.getOutgoPerMonth();
			this.savings = this.flowdata.getSavePerMonth();
		});
	}
}
