import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOperationDialogComponent } from './add-operation-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from '../../../core/core.module';
import { MaterialModule } from '../../../material/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { ErrorModule } from '../../../error/error.module';
import { LoaderModule } from '../../../loader/loader.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../../../store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effects } from '../../../../store/effects/app.effects';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('AddOperationDialogComponent', () => {
	let component: AddOperationDialogComponent;
	let fixture: ComponentFixture<AddOperationDialogComponent>;

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
			declarations: [AddOperationDialogComponent],
			providers: [
				{ provide: MatDialogRef, useValue: {} }
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddOperationDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
