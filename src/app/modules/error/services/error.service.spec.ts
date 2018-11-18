import { inject, TestBed } from '@angular/core/testing';

import { ErrorService } from './error.service';
import { MaterialModule } from '../../material/material.module';

describe('ErrorService', () => {
	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [
				MaterialModule
			],
			providers: [ErrorService]
		});
	});

	it('should be created', inject([ErrorService], (service: ErrorService) => {
		expect(service).toBeTruthy();
	}));
});
