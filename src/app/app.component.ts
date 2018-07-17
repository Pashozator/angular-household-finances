import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthorDialogComponent } from './shared/components/dialogs/author-dialog/author-dialog.component';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	public title: string;
	public year: number;

	constructor(
		public dialog: MatDialog
	) {
		this.title = 'Domowe finanse';
		this.year = new Date().getFullYear();
	}

	public openDialogAuthor(): void {
		this.dialog.open(AuthorDialogComponent);
	}
}
