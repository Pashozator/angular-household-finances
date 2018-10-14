import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Goal } from '../../../../types/goal';

@Component({
	selector: 'app-goal',
	templateUrl: './goal.component.html',
	styleUrls: ['./goal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalComponent implements OnInit {
	@Input() goal: Goal;
	@Input() debit: number;

	constructor() {
		this.goal = new Goal();
		this.debit = 0;
	}

	ngOnInit() {
	}

	public getPercentage(): number {
		return 100 - (this.goal.value - this.debit) / this.goal.value * 100;
	}
}
