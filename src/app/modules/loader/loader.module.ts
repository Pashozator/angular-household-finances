import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { MaterialModule } from '../material/material.module';
import { LoaderService } from './services/loader.service';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule
	],
	declarations: [
		LoaderComponent
	],
	entryComponents: [
		LoaderComponent
	],
	providers: [
		LoaderService
	]
})
export class LoaderModule {
}
