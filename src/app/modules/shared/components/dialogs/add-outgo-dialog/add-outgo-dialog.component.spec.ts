import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOutgoDialogComponent } from './add-outgo-dialog.component';

describe('AddOutgoDialogComponent', () => {
	let component: AddOutgoDialogComponent;
	let fixture: ComponentFixture<AddOutgoDialogComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [AddOutgoDialogComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(AddOutgoDialogComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
