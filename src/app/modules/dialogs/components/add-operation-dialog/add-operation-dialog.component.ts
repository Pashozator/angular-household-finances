import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/state/app.state';
import { AddOperationAction } from '../../../../store/actions/budget.actions';
import { MatDialogRef } from '@angular/material';
import * as moment from 'moment';

@Component({
	selector: 'app-add-operation-dialog',
	templateUrl: './add-operation-dialog.component.html',
	styleUrls: ['./add-operation-dialog.component.scss']
})
export class AddOperationDialogComponent implements OnInit {
	public form: FormGroup;

	constructor(
		private fb: FormBuilder,
		private dialogRef: MatDialogRef<AddOperationDialogComponent>,
		private store: Store<AppState>
	) {
		this.form = this.prepareForm();
	}

	ngOnInit() {
	}

	public submit(): void {
		this.dialogRef.close();
		this.store.dispatch(new AddOperationAction({
			label: this.form.get(`label`).value,
			date: moment(this.form.get(`date`).value).format(`YYYY-MM-DD`),
			value: this.form.get(`value`).value
		}));
	}

	private prepareForm(): FormGroup {
		return this.fb.group({
			label: ['', Validators.required],
			date: ['', Validators.required],
			value: [null, Validators.required]
		});
	}
}
