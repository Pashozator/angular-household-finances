import { Component, OnInit } from '@angular/core';
import { FlowdataService } from '../../../../core/services/flowdata.service';
import { MatDialogRef } from '@angular/material';

@Component({
	selector: 'app-add-outgo-dialog',
	templateUrl: './add-outgo-dialog.component.html',
	styleUrls: ['./add-outgo-dialog.component.scss']
})
export class AddOutgoDialogComponent implements OnInit {
	public outgo: number;
	public month: number;
	public months: any[] = [
		{ number: 0, name: 'Styczeń' },
		{ number: 1, name: 'Luty' },
		{ number: 2, name: 'Marzec' },
		{ number: 3, name: 'Kwiecień' },
		{ number: 4, name: 'Maj' },
		{ number: 5, name: 'Czerwiec' },
		{ number: 6, name: 'Lipiec' },
		{ number: 7, name: 'Sierpień' },
		{ number: 8, name: 'Wrzesień' },
		{ number: 9, name: 'Październik' },
		{ number: 10, name: 'Listopad' },
		{ number: 11, name: 'Grudzień' },
	];

	constructor(
		private flowdata: FlowdataService,
		private dialogRef: MatDialogRef<any>
	) {
	}

	ngOnInit() {
	}

	public addOutgo(): void {
		if (this.outgo > 0 && this.month !== undefined) {
			this.flowdata.addOutgo(this.month, this.outgo);
			this.dialogRef.close();
		}
	}

	public closeModal(): void {
		this.dialogRef.close();
	}
}
