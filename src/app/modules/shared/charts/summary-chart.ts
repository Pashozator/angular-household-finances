export const SUMMARY_CHART = {
	data: {
		labels: [
			'Styczeń',
			'Luty',
			'Marzec',
			'Kwiecień',
			'Maj',
			'Czerwiec',
			'Lipiec',
			'Sierpień',
			'Wrzesień',
			'Październik',
			'Listopad',
			'Grudzień'
		],
		datasets: [
			{
				label: '',
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
	},
	type: 'bar',
	options: {
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
					callback: value => value.toFixed(1) + ' zł'
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
				label: tooltipItems => tooltipItems.yLabel + ' zł'
			}
		}
	}
};
