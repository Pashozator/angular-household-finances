import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './goals.component';
import { GoalsRoutingModule } from './goals-routing/goals-routing.module';
import { MaterialModule } from '../../modules/material/material.module';
import { GoalComponent } from './components/goal/goal.component';
import { SharedModule } from '../../modules/shared/shared.module';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		SharedModule,
		GoalsRoutingModule
	],
	declarations: [GoalsComponent, GoalComponent]
})
export class GoalsModule {
}
