import { HistoryRoutingModule } from './history-routing.module';

describe('HistoryRoutingModule', () => {
	let historyRoutingModule: HistoryRoutingModule;

	beforeEach(() => {
		historyRoutingModule = new HistoryRoutingModule();
	});

	it('should create an instance', () => {
		expect(historyRoutingModule).toBeTruthy();
	});
});
