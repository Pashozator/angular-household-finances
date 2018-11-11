import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ErrorComponent } from '../error.component';

@Injectable()
export class ErrorService {
	constructor(private dialog: MatDialog) {
	}

	public occurs(): void {
		this.dialog.open(ErrorComponent);
	}
}
