import { NgModule } from '@angular/core';
import {
	DateAdapter,
	MAT_DATE_FORMATS,
	MAT_DATE_LOCALE,
	MatButtonModule,
	MatCardModule,
	MatDatepickerModule,
	MatDialogModule,
	MatFormFieldModule, MatIconModule,
	MatInputModule,
	MatProgressBarModule,
	MatSelectModule
} from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';

export const MY_FORMATS = {
	parse: {
		dateInput: 'YYYY-MM-DD',
	},
	display: {
		dateInput: 'YYYY-MM-DD',
		monthYearLabel: 'MMM YYYY',
		dateA11yLabel: 'YYYY-MM-DD',
		monthYearA11yLabel: 'MMMM YYYY',
	},
};

@NgModule({
	imports: [
		MatDialogModule,
		MatButtonModule,
		MatInputModule,
		MatSelectModule,
		MatFormFieldModule,
		MatProgressBarModule,
		MatCardModule,
		MatDatepickerModule,
		MatIconModule
	],
	exports: [
		MatDialogModule,
		MatButtonModule,
		MatInputModule,
		MatSelectModule,
		MatFormFieldModule,
		MatProgressBarModule,
		MatCardModule,
		MatDatepickerModule,
		MatIconModule
	],
	providers: [
		{ provide: MAT_DATE_LOCALE, useValue: 'pl-PL' },
		{ provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
		{ provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
	]
})
export class MaterialModule {
}
