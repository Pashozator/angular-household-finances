import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditOperationDialogComponent } from './edit-operation-dialog.component';
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
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditOperationDialogComponent', () => {
	let component: EditOperationDialogComponent;
	let fixture: ComponentFixture<EditOperationDialogComponent>;

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
			declarations: [EditOperationDialogComponent],
			providers: [
				{ provide: MatDialogRef, useValue: {} },
				{ provide: MAT_DIALOG_DATA, useValue: {} }
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(EditOperationDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
