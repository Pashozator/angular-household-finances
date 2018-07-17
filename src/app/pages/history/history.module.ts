import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HistoryComponent } from './history.component';
import { CoreModule } from '../../core/core.module';
import { SharedModule } from '../../shared/shared.module';
import { HistoryRoutingModule } from './history-routing/history-routing.module';
import { MaterialModule } from '../../modules/material/material.module';

@NgModule({
	imports: [
		CommonModule,
		CoreModule,
		SharedModule,
		HistoryRoutingModule,
		MaterialModule
	],
	declarations: [
		HistoryComponent
	]
})
export class HistoryModule {
}
