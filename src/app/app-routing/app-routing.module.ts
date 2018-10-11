import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/history',
		pathMatch: 'full'
	},
	{
		path: 'history',
		loadChildren: 'src/app/pages/history/history.module#HistoryModule'
	},
	{
		path: 'goals',
		loadChildren: 'src/app/pages/goals/goals.module#GoalsModule'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
