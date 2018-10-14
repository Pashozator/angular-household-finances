import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Operation } from '../../../../types/operation';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/state/app.state';
import { RemoveOperationAction } from '../../../../store/actions/budget.actions';
import { MatDialog } from '@angular/material';
import { EditOperationDialogComponent } from '../../../../modules/dialogs/components/edit-operation-dialog/edit-operation-dialog.component';

@Component({
	selector: 'app-operation',
	templateUrl: './operation.component.html',
	styleUrls: ['./operation.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class OperationComponent implements OnInit {
	@Input() operation: Operation;
	public expanded: boolean;

	constructor(
		private dialog: MatDialog,
		private store: Store<AppState>
	) {
		this.operation = new Operation();
		this.expanded = false;
	}

	ngOnInit() {
	}

	public expand(): void {
		this.expanded = !this.expanded;
	}

	public edit(): void {
		this.dialog.open(EditOperationDialogComponent, {
			data: this.operation
		});
	}

	public remove(): void {
		this.store.dispatch(new RemoveOperationAction(this.operation));
	}
}
