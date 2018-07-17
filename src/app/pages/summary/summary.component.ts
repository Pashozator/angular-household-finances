import { Component, OnInit, ViewChild } from '@angular/core';
import { GoalComponent } from './components/goal/goal.component';
import { FlowdataService } from '../../core/services/flowdata.service';
import { MatDialog } from '@angular/material';
import { AddIncomeDialogComponent } from '../../shared/components/dialogs/add-income-dialog/add-income-dialog.component';
import { AddOutgoDialogComponent } from '../../shared/components/dialogs/add-outgo-dialog/add-outgo-dialog.component';
import { ChartComponent } from 'angular2-chartjs';

@Component({
	selector: 'app-summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
	@ViewChild('yearChart') chartComp: ChartComponent;
	@ViewChild('goal') goalComp: GoalComponent;
	public lineChartData = {
		labels: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
		datasets: [
			{
				label: "2017",
				data: this.flowdata.getSavePerMonth(),
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)',
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)',
					'rgba(255,99,132,1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			}
		]
	};
	public lineChartType: string = 'bar';
	public lineChartOptions: any = {
		responsive: true,
		maintainAspectRatio: false,
		scales: {
			yAxes: [{
				scaleLabel: {
					display: true,
					labelString: 'Zaoszczędzona kwota'
				},
				ticks: {
					beginAtZero: true,
					callback: function (value) {
						return value.toFixed(1) + ' zł';
					}
				}
			}]
		},
		title: {
			display: true,
			text: 'Roczne podsumowanie oszczędności'
		},
		legend: {
			display: false
		},
		tooltips: {
			callbacks: {
				label: function (tooltipItems, data) {
					return tooltipItems.yLabel + ' zł';
				}
			}
		}
	};

	constructor(
		private flowdata: FlowdataService,
		public dialog: MatDialog
	) {
	}

	ngOnInit() {
		this.lineChartData.datasets[0].data = this.flowdata.getSavePerMonth();
	}

	public onRealizeGoal(realizeGoal: boolean) {
		if (realizeGoal) {
			this.lineChartData.datasets[0].data = this.flowdata.getSavePerMonth();
			this.chartComp.chart.update();
		}
	}

	public getSavePerYear(): number {
		return this.flowdata.getSavePerYear();
	}

	public openDialogAddIncome(): void {
		let incomeModal = this.dialog.open(AddIncomeDialogComponent, {
			height: '300px',
			width: '500px'
		});
		incomeModal.afterClosed().subscribe(result => {
			this.lineChartData.datasets[0].data = this.flowdata.getSavePerMonth();
			this.chartComp.chart.update();
		});
	}

	public openDialogAddOutgo(): void {
		let outgoModal = this.dialog.open(AddOutgoDialogComponent, {
			height: '300px',
			width: '500px'
		});
		outgoModal.afterClosed().subscribe(() => {
			this.lineChartData.datasets[0].data = this.flowdata.getSavePerMonth();
			this.chartComp.chart.update();
		});
	}
}
