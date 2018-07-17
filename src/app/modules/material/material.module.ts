import { NgModule } from '@angular/core';
import {
	MatButtonModule,
	MatCardModule,
	MatDialogModule,
	MatFormFieldModule,
	MatInputModule,
	MatProgressBarModule,
	MatSelectModule
} from '@angular/material';

@NgModule({
	imports: [
		MatDialogModule,
		MatButtonModule,
		MatInputModule,
		MatSelectModule,
		MatFormFieldModule,
		MatProgressBarModule,
		MatCardModule,
	],
	exports: [
		MatDialogModule,
		MatButtonModule,
		MatInputModule,
		MatSelectModule,
		MatFormFieldModule,
		MatProgressBarModule,
		MatCardModule,
	]
})
export class MaterialModule {
}
