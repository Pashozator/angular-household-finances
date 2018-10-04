import { Component, Input, OnInit } from '@angular/core';
import { Operation } from '../../../../types/operation';

@Component({
	selector: 'app-operation',
	templateUrl: './operation.component.html',
	styleUrls: ['./operation.component.scss']
})
export class OperationComponent implements OnInit {
	@Input() operation: Operation;

	constructor() {
		this.operation = new Operation();
	}

	ngOnInit() {
	}
}
