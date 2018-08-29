import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../../../store/state/app.state';
import { Budget } from '../../../../types/budget';
import { Observable } from 'rxjs';
import { selectBudget } from '../../../../store/selectors/app.selectors';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
	selector: 'app-add-dialog',
	templateUrl: './add-dialog.component.html',
	styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {
	public form: FormGroup;
	public budget$: Observable<Budget>;

	constructor(
		@Inject(MAT_DIALOG_DATA) public title: string,
		private dialogRef: MatDialogRef<AddDialogComponent>,
		private fb: FormBuilder,
		private store: Store<AppState>
	) {
		this.form = this.prepareForm();
		this.budget$ = store.pipe(select(selectBudget));
	}

	ngOnInit() {
	}

	public submit(): void {
		this.dialogRef.close(this.form.value);
	}

	private prepareForm(): FormGroup {
		return this.fb.group({
			amount: ['', Validators.required],
			year: ['', Validators.required],
			month: ['', Validators.required]
		});
	}
}
