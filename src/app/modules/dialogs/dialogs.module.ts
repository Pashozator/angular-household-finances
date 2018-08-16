import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthorDialogComponent } from './components/author-dialog/author-dialog.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
	imports: [
		CommonModule,
		MaterialModule
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
