import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/summary',
		pathMatch: 'full'
	},
	{
		path: 'summary',
		loadChildren: 'src/app/pages/summary/summary.module#SummaryModule'
	},
	{
		path: 'history',
		loadChildren: 'src/app/pages/history/history.module#HistoryModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
