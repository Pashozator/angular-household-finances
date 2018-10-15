import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthorDialogComponent } from './modules/dialogs/components/author-dialog/author-dialog.component';
import { Store } from '@ngrx/store';
import { AppState } from './store/state/app.state';
import { AddOperationDialogComponent } from './modules/dialogs/components/add-operation-dialog/add-operation-dialog.component';
import { AddGoalDialogComponent } from './modules/dialogs/components/add-goal-dialog/add-goal-dialog.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public title: string;
	public year: number;

	constructor(
		private dialog: MatDialog,
		private store: Store<AppState>
	) {
		this.title = 'Domowe finanse';
		this.year = new Date().getFullYear();
	}

	public openDialogAuthor(): void {
		this.dialog.open(AuthorDialogComponent);
	}

	public addOperation(): void {
		this.dialog.open(AddOperationDialogComponent);
	}

	public addGoal(): void {
		this.dialog.open(AddGoalDialogComponent);
	}
}
