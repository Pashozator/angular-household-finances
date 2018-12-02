import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalComponent } from './goal.component';
import { MaterialModule } from '../../../../modules/material/material.module';
import { CoreModule } from '../../../../modules/core/core.module';
import { ErrorModule } from '../../../../modules/error/error.module';
import { LoaderModule } from '../../../../modules/loader/loader.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../../../store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effects } from '../../../../store/effects/app.effects';
import { RouterTestingModule } from '@angular/router/testing';

describe('GoalComponent', () => {
	let component: GoalComponent;
	let fixture: ComponentFixture<GoalComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				MaterialModule,
				CoreModule,
				ErrorModule,
				LoaderModule,
				StoreModule.forRoot(reducers),
				EffectsModule.forRoot(effects),
				RouterTestingModule.withRoutes([])
			],
			declarations: [GoalComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GoalComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
