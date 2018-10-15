import { StoreDevtoolsModule } from '@ngrx/store-devtools';

export const environment = {
	production: false,
	devTools: StoreDevtoolsModule.instrument({
		maxAge: 10
	})
};
