import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const environment = {
	production: false,
	base: '/api',
	devTools: StoreDevtoolsModule.instrument({
		maxAge: 10
	})
};
