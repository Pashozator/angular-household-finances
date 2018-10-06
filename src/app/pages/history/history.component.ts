import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Operation } from '../../types/operation';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { selectOperations } from '../../store/selectors/app.selectors';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-history',
	templateUrl: './history.component.html',
	styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
	public operations$: Observable<Operation[]>;
	public testOperation: Operation = new Operation('test', '2018-09-21', 123213, 'Fusce euismod tristique mattis. Mauris gravida felis sed aliquam feugiat. Vivamus ullamcorper tortor a ultrices rhoncus. Etiam cursus sit amet dolor a gravida. Fusce vitae quam eu justo placerat consequat. Nulla auctor lorem vitae maximus elementum. Praesent commodo interdum purus, imperdiet convallis risus fringilla non. ');

	constructor(private store: Store<AppState>) {
		this.operations$ = store.pipe(
			select(selectOperations),
			map(operations => operations.sort((a, b) => a.date < b.date ? 1 : -1))
		);
	}

	ngOnInit() {
	}
}
