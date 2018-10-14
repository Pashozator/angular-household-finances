import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/state/app.state';
import { AddGoalAction } from '../../../../store/actions/goals.actions';
import { Goal } from '../../../../types/goal';
import { guid } from '../../../shared/utils/guid-util';

@Component({
	selector: 'app-add-goal-dialog',
	templateUrl: './add-goal-dialog.component.html',
	styleUrls: ['./add-goal-dialog.component.scss']
})
export class AddGoalDialogComponent implements OnInit {
	public form: FormGroup;

	constructor(
		private fb: FormBuilder,
		private dialogRef: MatDialogRef<AddGoalDialogComponent>,
		private store: Store<AppState>
	) {
		this.form = this.prepareForm();
	}

	ngOnInit() {
	}

	public submit(): void {
		this.dialogRef.close();
		this.store.dispatch(new AddGoalAction(new Goal(
			guid(),
			this.form.get('label').value,
			this.form.get('description').value,
			this.form.get('value').value
		)));
	}

	private prepareForm(): FormGroup {
		return this.fb.group({
			label: ['', Validators.required],
			value: [null, Validators.required],
			description: ''
		});
	}
}
