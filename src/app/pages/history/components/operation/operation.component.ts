import { Component, Input, OnInit } from '@angular/core';
import { Operation } from '../../../../types/operation';

@Component({
	selector: 'app-operation',
	templateUrl: './operation.component.html',
	styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
	@Input() operation: Operation;
	public expanded: boolean;

	constructor() {
		this.operation = new Operation();
		this.expanded = false;
	}

	ngOnInit() {
	}

	public expand(): void {
		this.expanded = !this.expanded;
	}
}
