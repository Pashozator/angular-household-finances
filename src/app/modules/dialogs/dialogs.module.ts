import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorDialogComponent } from './components/author-dialog/author-dialog.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		ReactiveFormsModule
	],
	declarations: [
		AuthorDialogComponent
	],
	entryComponents: [
		AuthorDialogComponent
	],
	exports: [
		AuthorDialogComponent
	]
})
export class DialogsModule {
}
