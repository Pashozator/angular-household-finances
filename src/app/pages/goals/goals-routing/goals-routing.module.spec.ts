import { GoalsRoutingModule } from './goals-routing.module';

describe('GoalsRoutingModule', () => {
	let goalsRoutingModule: GoalsRoutingModule;

	beforeEach(() => {
		goalsRoutingModule = new GoalsRoutingModule();
	});

	it('should create an instance', () => {
		expect(goalsRoutingModule).toBeTruthy();
	});
});
