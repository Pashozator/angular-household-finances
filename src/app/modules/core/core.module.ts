import { ModuleWithProviders, NgModule } from '@angular/core';
import { FlowdataService } from './services/flowdata.service';
import { GoalService } from './services/goal.service';

@NgModule({})
export class CoreModule {
	public static forRoot(): ModuleWithProviders {
		return {
			ngModule: CoreModule,
			providers: [
				FlowdataService,
				GoalService
			]
		};
	}
}
