import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/state/app.state';
import { EditOperationAction } from '../../../../store/actions/budget.actions';
import { Operation } from '../../../../types/operation';
import * as moment from 'moment';

@Component({
	selector: 'app-edit-operation-dialog',
	templateUrl: './edit-operation-dialog.component.html',
	styleUrls: ['./edit-operation-dialog.component.scss']
})
export class EditOperationDialogComponent implements OnInit {
	public form: FormGroup;

	constructor(
		@Inject(MAT_DIALOG_DATA) private operation: Operation,
		private fb: FormBuilder,
		private dialogRef: MatDialogRef<EditOperationDialogComponent>,
		private store: Store<AppState>
	) {
		this.form = this.prepareForm(operation);
	}

	ngOnInit() {
	}

	public submit(): void {
		this.dialogRef.close();
		this.store.dispatch(new EditOperationAction({
			operation: {
				id: this.operation.id,
				label: this.form.get(`label`).value,
				date: moment(this.form.get(`date`).value).format(`YYYY-MM-DD`),
				value: this.form.get(`value`).value,
				description: this.form.get(`description`).value
			},
			oldValue: this.operation.value
		}));
	}

	private prepareForm(operation: Operation): FormGroup {
		return this.fb.group({
			label: [operation.label, Validators.required],
			date: [operation.date, Validators.required],
			value: [operation.value, Validators.required],
			description: operation.description
		});
	}
}
