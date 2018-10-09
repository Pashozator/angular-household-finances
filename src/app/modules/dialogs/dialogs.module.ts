import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorDialogComponent } from './components/author-dialog/author-dialog.component';
import { AddOperationDialogComponent } from './components/add-operation-dialog/add-operation-dialog.component';
import { EditOperationDialogComponent } from './components/edit-operation-dialog/edit-operation-dialog.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		ReactiveFormsModule
	],
	declarations: [
		AuthorDialogComponent,
		AddOperationDialogComponent,
		EditOperationDialogComponent
	],
	entryComponents: [
		AuthorDialogComponent,
		AddOperationDialogComponent,
		EditOperationDialogComponent
	],
	exports: [
		AuthorDialogComponent,
		AddOperationDialogComponent,
		EditOperationDialogComponent
	]
})
export class DialogsModule {
}
