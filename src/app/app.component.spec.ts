import { async, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './modules/shared/shared.module';
import { DialogsModule } from './modules/dialogs/dialogs.module';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MaterialModule } from './modules/material/material.module';
import { CoreModule } from './modules/core/core.module';
import { ErrorModule } from './modules/error/error.module';
import { LoaderModule } from './modules/loader/loader.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects/app.effects';
import { APP_BASE_HREF } from '@angular/common';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				BrowserModule,
				BrowserAnimationsModule,
				SharedModule,
				DialogsModule,
				AppRoutingModule,
				MaterialModule,
				CoreModule,
				ErrorModule,
				LoaderModule,
				StoreModule.forRoot(reducers),
				EffectsModule.forRoot(effects),
			],
			declarations: [
				AppComponent
			],
			providers: [
				{ provide: APP_BASE_HREF, useValue: '/' }
			]
		}).compileComponents();
	}));
	it('should create the app', async(() => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.debugElement.componentInstance;
		expect(app).toBeTruthy();
	}));
});
