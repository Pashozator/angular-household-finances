import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Goal } from '../../../../types/goal';
import { MatDialog } from '@angular/material';

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
		public dialog: MatDialog
	) {
	}

	ngOnInit() {
	}

	public realizeGoal(): void {
	}

	public getProgress(): number {
		return 0;
	}

	public deleteGoal(): void {
	}

	public openDialogGoal(): void {
	}
}
