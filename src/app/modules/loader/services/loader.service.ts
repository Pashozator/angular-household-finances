import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { LoaderComponent } from '../loader.component';

@Injectable()
export class LoaderService {
	private ref: MatDialogRef<LoaderComponent>;

	constructor(private dialog: MatDialog) {
		this.ref = null;
	}

	public open(): void {
		this.ref = this.dialog.open(LoaderComponent);
	}

	public close(): void {
		this.ref.close();
		this.ref = null;
	}
}
