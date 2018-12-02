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
		if (this.ref) {
			return;
		}

		// setTimeout(() => this.ref = this.dialog.open(LoaderComponent));
	}

	public close(): void {
		if (!this.ref) {
			return;
		}

		this.ref.close();
		this.ref = null;
	}
}
