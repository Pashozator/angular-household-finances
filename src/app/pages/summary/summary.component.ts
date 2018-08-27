import { Component, OnInit, ViewChild } from '@angular/core';
import { GoalComponent } from './components/goal/goal.component';
import { MatDialog } from '@angular/material';
import { ChartComponent } from 'angular2-chartjs';
import { SUMMARY_CHART } from '../../modules/shared/charts/summary-chart';

@Component({
	selector: 'app-summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
	@ViewChild('yearChart') chartComp: ChartComponent;
	@ViewChild('goal') goalComp: GoalComponent;
	public summaryChart: any;
	public year: number;

	constructor(
		public dialog: MatDialog
	) {
		this.year = new Date().getFullYear();
		this.summaryChart = SUMMARY_CHART;
	}

	ngOnInit() {
		// this.lineChartData.datasets[0].data = this.flowdata.getSavePerMonth();
	}

	public onRealizeGoal(realizeGoal: boolean) {
	}

	public getSavePerYear(): number {
		return 0;
	}

	public openDialogAddIncome(): void {
	}

	public openDialogAddOutgo(): void {
	}
}
