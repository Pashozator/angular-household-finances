import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Goal } from '../../../../types/goal';
import { FlowdataService } from '../../../../modules/core/services/flowdata.service';
import { GoalService } from '../../../../modules/core/services/goal.service';
import { MatDialog } from '@angular/material';
import { GoalDialogComponent } from '../goal-dialog/goal-dialog.component';

@Component({
	selector: 'app-goal',
	templateUrl: './goal.component.html',
	styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
	@Output() onRealizeGoal = new EventEmitter<boolean>();
	private currentGoal: Goal;
	private realizedGoals: Goal[] = [];

	constructor(
		private flowdata: FlowdataService,
		private goalService: GoalService,
		public dialog: MatDialog
	) {
		this.currentGoal = this.goalService.getCurrentGoal();
		this.realizedGoals = this.goalService.getRealizedGoals();
	}

	ngOnInit() {
	}

	public realizeGoal(): void {
		let now = new Date();

		this.realizedGoals = this.goalService.realizeGoal(this.currentGoal);
		this.flowdata.addOutgo(now.getMonth(), this.currentGoal.amount);
		this.currentGoal = this.goalService.deleteGoal();

		this.onRealizeGoal.emit(true);
	}

	public getProgress(): number {
		let result: number = this.flowdata.getSavePerYear() / this.currentGoal.amount;
		if (result >= 1) {
			return 1;
		} else if (result <= 0) {
			return 0;
		} else {
			return result;
		}
	}

	public deleteGoal(): void {
		this.currentGoal = this.goalService.deleteGoal();
	}

	public openDialogGoal(): void {
		let dialogRef = this.dialog.open(GoalDialogComponent, {
			height: '300px',
			width: '500px'
		});

		dialogRef.afterClosed().subscribe(result => {
			this.currentGoal = this.goalService.newGoal(result.amount, result.description);
		});
	}
}
