import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SummaryComponent } from './summary.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { SummaryRoutingModule } from './summary-routing/summary-routing.module';
import { GoalComponent } from './components/goal/goal.component';
import { GoalDialogComponent } from './components/goal-dialog/goal-dialog.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../modules/material/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		SummaryRoutingModule,
		MaterialModule,
		FormsModule,
		NgxChartsModule
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
