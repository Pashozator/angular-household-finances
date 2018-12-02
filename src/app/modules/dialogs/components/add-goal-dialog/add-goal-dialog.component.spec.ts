import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGoalDialogComponent } from './add-goal-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../material/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { MatDialogRef } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../../../store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effects } from '../../../../store/effects/app.effects';
import { ErrorModule } from '../../../error/error.module';
import { LoaderModule } from '../../../loader/loader.module';
import { CoreModule } from '../../../core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddGoalDialogComponent', () => {
	let component: AddGoalDialogComponent;
	let fixture: ComponentFixture<AddGoalDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				BrowserAnimationsModule,
				CoreModule,
				MaterialModule,
				SharedModule,
				ErrorModule,
				LoaderModule,
				StoreModule.forRoot(reducers),
				EffectsModule.forRoot(effects),
				ReactiveFormsModule,
				RouterTestingModule.withRoutes([])
			],
			declarations: [AddGoalDialogComponent],
			providers: [
				{ provide: MatDialogRef, useValue: {} }
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddGoalDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
