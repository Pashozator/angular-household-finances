import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/state/app.state';
import { AddOperationAction } from '../../../../store/actions/budget.actions';
import { MatDialogRef } from '@angular/material';
import { guid } from '../../../shared/utils/guid-util';
import { Operation } from '../../../../types/operation';
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
		this.store.dispatch(new AddOperationAction(new Operation(
			guid(),
			this.form.get(`label`).value,
			moment(this.form.get(`date`).value).format(`YYYY-MM-DD`),
			this.form.get(`value`).value,
			this.form.get(`description`).value
		)));
	}

	private prepareForm(): FormGroup {
		return this.fb.group({
			label: ['', Validators.required],
			date: [moment().format(`YYYY-MM-DD`), Validators.required],
			value: [null, Validators.required],
			description: ''
		});
	}
}
