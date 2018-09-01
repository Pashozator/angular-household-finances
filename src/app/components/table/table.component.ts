import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Year } from '../../types/year';
import { select, Store } from '@ngrx/store';
import { AppState } from '../../store/state/app.state';
import { MatDialog } from '@angular/material';
import { selectBudget } from '../../store/selectors/app.selectors';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-table',
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
	public year$: Observable<Year>;

	constructor(private store: Store<AppState>) {
	}

	ngOnInit() {
		this.year$ = this.store.pipe(
			select(selectBudget),
			map(budget => budget.years.filter(year => year.label === '2018')[0])
		);
	}
}
