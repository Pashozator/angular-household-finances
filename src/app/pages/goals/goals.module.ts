import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalsComponent } from './goals.component';
import { GoalsRoutingModule } from './goals-routing/goals-routing.module';

@NgModule({
	imports: [
		CommonModule,
		GoalsRoutingModule
	],
	declarations: [GoalsComponent]
})
export class GoalsModule {
}
