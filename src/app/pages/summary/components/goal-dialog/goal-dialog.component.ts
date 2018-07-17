import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
	selector: 'app-goal-dialog',
	templateUrl: './goal-dialog.component.html',
	styleUrls: ['./goal-dialog.component.scss']
})
export class GoalDialogComponent implements OnInit {
	private description: string;
	private amount: number;

	constructor(private dialogRef: MatDialogRef<any>) {
	}

	ngOnInit() {
	}

	public addGoalModal(): void {
		if (this.amount !== undefined && this.description !== undefined) {
			if (this.amount > 0) {
				this.dialogRef.close({
					'description': this.description,
					'amount': this.amount
				});
			}
		}
	}

	public closeModal(): void {
		this.dialogRef.close();
	}

	public getDescription(): string {
		return this.description;
	}
}
