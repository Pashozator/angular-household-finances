import { inject, TestBed } from '@angular/core/testing';

import { LoaderService } from './loader.service';
import { MaterialModule } from '../../material/material.module';

describe('LoaderService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				MaterialModule
			],
			providers: [LoaderService]
		});
	});

	it('should be created', inject([LoaderService], (service: LoaderService) => {
		expect(service).toBeTruthy();
	}));
});
