import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ErrorComponent } from './error.component';
import { ErrorService } from './services/error.service';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule
	],
	declarations: [
		ErrorComponent
	],
	entryComponents: [
		ErrorComponent
	],
	providers: [
		ErrorService
	]
})
export class ErrorModule {
}
