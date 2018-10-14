import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorDialogComponent } from './components/author-dialog/author-dialog.component';
import { AddOperationDialogComponent } from './components/add-operation-dialog/add-operation-dialog.component';
import { EditOperationDialogComponent } from './components/edit-operation-dialog/edit-operation-dialog.component';
import { AddGoalDialogComponent } from './components/add-goal-dialog/add-goal-dialog.component';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule,
		ReactiveFormsModule,
	],
	declarations: [
		AuthorDialogComponent,
		AddOperationDialogComponent,
		EditOperationDialogComponent,
		AddGoalDialogComponent,
	],
	entryComponents: [
		AuthorDialogComponent,
		AddOperationDialogComponent,
		EditOperationDialogComponent,
		AddGoalDialogComponent,
	],
	exports: [
		AuthorDialogComponent,
		AddOperationDialogComponent,
		EditOperationDialogComponent,
		AddGoalDialogComponent,
	]
})
export class DialogsModule {
}
