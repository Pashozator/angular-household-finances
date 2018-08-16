import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { SummaryRoutingModule } from './summary-routing/summary-routing.module';
import { GoalComponent } from './components/goal/goal.component';
import { GoalDialogComponent } from './components/goal-dialog/goal-dialog.component';
import { ChartModule } from 'angular2-chartjs';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		SummaryRoutingModule,
		MaterialModule,
		FormsModule,
		ChartModule
	],
	declarations: [
		SummaryComponent,
		GoalComponent,
		GoalDialogComponent
	],
	entryComponents: [
		GoalDialogComponent
	]
})
export class SummaryModule {
}
