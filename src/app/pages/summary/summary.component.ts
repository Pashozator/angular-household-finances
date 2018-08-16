import { Component, OnInit, ViewChild } from '@angular/core';
import { GoalComponent } from './components/goal/goal.component';
import { MatDialog } from '@angular/material';
import { ChartComponent } from 'angular2-chartjs';

@Component({
	selector: 'app-summary',
	templateUrl: './summary.component.html',
	styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {
	@ViewChild('yearChart') chartComp: ChartComponent;
	@ViewChild('goal') goalComp: GoalComponent;
	public year: number;
	public lineChartData = {
		labels: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
		datasets: [
			{
				label: "2017",
				data: [],
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
		public dialog: MatDialog
	) {
		this.year = new Date().getFullYear();
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
