import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthorDialogComponent } from './components/author-dialog/author-dialog.component';
import { AddOperationDialogComponent } from './components/add-operation-dialog/add-operation-dialog.component';
import { EditOperationDialogComponent } from './components/edit-operation-dialog/edit-operation-dialog.component';
import { AddGoalDialogComponent } from './components/add-goal-dialog/add-goal-dialog.component';
import { EditGoalDialogComponent } from './components/edit-goal-dialog/edit-goal-dialog.component';

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
		EditGoalDialogComponent,
	],
	entryComponents: [
		AuthorDialogComponent,
		AddOperationDialogComponent,
		EditOperationDialogComponent,
		AddGoalDialogComponent,
		EditGoalDialogComponent,
	],
	exports: [
		AuthorDialogComponent,
		AddOperationDialogComponent,
		EditOperationDialogComponent,
		AddGoalDialogComponent,
		EditGoalDialogComponent,
	]
})
export class DialogsModule {
}
