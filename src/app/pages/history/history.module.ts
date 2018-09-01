import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { SharedModule } from '../../modules/shared/shared.module';
import { HistoryRoutingModule } from './history-routing/history-routing.module';
import { MaterialModule } from '../../modules/material/material.module';
import { OperationComponent } from './components/operation/operation.component';

@NgModule({
	imports: [
		CommonModule,
		SharedModule,
		HistoryRoutingModule,
		MaterialModule
	],
	declarations: [
		HistoryComponent,
		OperationComponent
	]
})
export class HistoryModule {
}
