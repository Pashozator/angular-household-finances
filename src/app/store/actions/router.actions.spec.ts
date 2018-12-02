import { NavigationExtras } from '@angular/router';
import { RouterActionTypes, RouterBackAction, RouterForwardAction, RouterGoAction } from './router.actions';

describe('RouterGoAction', () => {
	it('should create an action', () => {
		const payload: {
				path: any[];
				query?: object;
				extras?: NavigationExtras;
			} = { path: ['/'] },
			action = new RouterGoAction(payload);

		expect({ ...action }).toEqual({ type: RouterActionTypes.GO, payload });
	});
});

describe('RouterBackAction', () => {
	it('should create an action', () => {
		const action = new RouterBackAction();

		expect({ ...action }).toEqual({ type: RouterActionTypes.BACK });
	});
});

describe('RouterForwardAction', () => {
	it('should create an action', () => {
		const action = new RouterForwardAction();

		expect({ ...action }).toEqual({ type: RouterActionTypes.FORWARD });
	});
});
