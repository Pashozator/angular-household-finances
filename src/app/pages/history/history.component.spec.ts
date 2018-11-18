import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryComponent } from './history.component';
import { MaterialModule } from '../../modules/material/material.module';
import { CoreModule } from '../../modules/core/core.module';
import { ErrorModule } from '../../modules/error/error.module';
import { LoaderModule } from '../../modules/loader/loader.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effects } from '../../store/effects/app.effects';
import { OperationComponent } from './components/operation/operation.component';

describe('HistoryComponent', () => {
	let component: HistoryComponent;
	let fixture: ComponentFixture<HistoryComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				MaterialModule,
				CoreModule,
				ErrorModule,
				LoaderModule,
				StoreModule.forRoot(reducers),
				EffectsModule.forRoot(effects),
			],
			declarations: [
				HistoryComponent,
				OperationComponent
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(HistoryComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
