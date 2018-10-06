import { Component, Input, OnInit } from '@angular/core';
import { Operation } from '../../../../types/operation';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../store/state/app.state';
import { RemoveOperationAction } from '../../../../store/actions/budget.actions';

@Component({
	selector: 'app-operation',
	templateUrl: './operation.component.html',
	styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
	@Input() operation: Operation;
	public expanded: boolean;

	constructor(private store: Store<AppState>) {
		this.operation = new Operation();
		this.expanded = false;
	}

	ngOnInit() {
	}

	public expand(): void {
		this.expanded = !this.expanded;
	}

	public remove(): void {
		this.store.dispatch(new RemoveOperationAction(this.operation));
	}
}
