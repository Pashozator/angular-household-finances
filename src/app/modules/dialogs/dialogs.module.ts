import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorDialogComponent } from './components/author-dialog/author-dialog.component';
import { MaterialModule } from '../material/material.module';
import { AddDialogComponent } from './components/add-dialog/add-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		ReactiveFormsModule
	],
	declarations: [
		AuthorDialogComponent,
		AddDialogComponent
	],
	entryComponents: [
		AuthorDialogComponent,
		AddDialogComponent
	],
	exports: [
		AuthorDialogComponent,
		AddDialogComponent
	]
})
export class DialogsModule {
}
