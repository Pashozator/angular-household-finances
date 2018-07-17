import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPlnPipe } from './pipes/currency-pln.pipe';
import { AuthorDialogComponent } from './components/dialogs/author-dialog/author-dialog.component';
import { MaterialModule } from '../modules/material/material.module';
import { AddIncomeDialogComponent } from './components/dialogs/add-income-dialog/add-income-dialog.component';
import { AddOutgoDialogComponent } from './components/dialogs/add-outgo-dialog/add-outgo-dialog.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MaterialModule
	],
	declarations: [
		CurrencyPlnPipe,
		AuthorDialogComponent,
		AddIncomeDialogComponent,
		AddOutgoDialogComponent
	],
	entryComponents: [
		AuthorDialogComponent,
		AddIncomeDialogComponent,
		AddOutgoDialogComponent
	],
	exports: [
		CurrencyPlnPipe,
		AuthorDialogComponent,
		AddIncomeDialogComponent,
		AddOutgoDialogComponent
	]
})
export class SharedModule {
}
