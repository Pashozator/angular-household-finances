import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalsComponent } from './goals.component';
import { GoalComponent } from './components/goal/goal.component';
import { MaterialModule } from '../../modules/material/material.module';
import { CoreModule } from '../../modules/core/core.module';
import { ErrorModule } from '../../modules/error/error.module';
import { LoaderModule } from '../../modules/loader/loader.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effects } from '../../store/effects/app.effects';
import { RouterTestingModule } from '@angular/router/testing';

describe('GoalsComponent', () => {
	let component: GoalsComponent;
	let fixture: ComponentFixture<GoalsComponent>;

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
			declarations: [
				GoalsComponent,
				GoalComponent
			]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(GoalsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
