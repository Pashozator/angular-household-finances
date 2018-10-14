import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Goal } from '../../../../types/goal';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/state/app.state';
import { RemoveGoalAction } from '../../../../store/actions/goals.actions';

@Component({
	selector: 'app-goal',
	templateUrl: './goal.component.html',
	styleUrls: ['./goal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class GoalComponent implements OnInit {
	@Input() goal: Goal;
	@Input() debit: number;

	constructor(private store: Store<AppState>) {
		this.goal = new Goal();
		this.debit = 0;
	}

	ngOnInit() {
	}

	public getPercentage(): number {
		return 100 - (this.goal.value - this.debit) / this.goal.value * 100;
	}

	public remove(): void {
		this.store.dispatch(new RemoveGoalAction(this.goal));
	}
}
