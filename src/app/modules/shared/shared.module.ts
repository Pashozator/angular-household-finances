import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyPlnPipe } from './pipes/currency-pln.pipe';
import { MaterialModule } from '../material/material.module';
import { FormsModule } from '@angular/forms';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		MaterialModule
	],
	declarations: [
		CurrencyPlnPipe
	],
	exports: [
		CurrencyPlnPipe
	]
})
export class SharedModule {
}
