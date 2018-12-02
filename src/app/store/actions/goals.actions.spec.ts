import {
	AddGoalAction,
	AddGoalFailureAction,
	AddGoalSuccessAction,
	EditGoalAction,
	EditGoalFailureAction,
	EditGoalSuccessAction,
	GetGoalsAction,
	GetGoalsFailureAction,
	GetGoalsSuccessAction,
	GoalsActionTypes,
	RealizeGoalAction,
	RealizeGoalFailureAction,
	RealizeGoalSuccessAction,
	RemoveGoalAction,
	RemoveGoalFailureAction,
	RemoveGoalSuccessAction
} from './goals.actions';
import { Goal } from '../../types/goal';
import { guid } from '../../modules/shared/utils/guid-util';
import { Update } from '@ngrx/entity';

describe('GetGoalsAction', () => {
	it('should create an action', () => {
		const action = new GetGoalsAction();

		expect({ ...action }).toEqual({ type: GoalsActionTypes.GET_GOALS });
	});
});

describe('GetGoalsSuccessAction', () => {
	it('should create an action', () => {
		const payload: Goal[] = [
			new Goal(guid(), 'Cel', 'Opis', 300),
			new Goal(guid(), 'Cel 2', 'Opis', 500),
		];

		const action = new GetGoalsSuccessAction(payload);

		expect({ ...action }).toEqual({ type: GoalsActionTypes.GET_GOALS_SUCCESS, payload });
	});
});

describe('GetGoalsFailureAction', () => {
	it('should create an action', () => {
		const action = new GetGoalsFailureAction();

		expect({ ...action }).toEqual({ type: GoalsActionTypes.GET_GOALS_FAILURE });
	});
});


describe('AddGoalAction', () => {
	it('should create an action', () => {
		const payload: Goal = new Goal(guid(), 'Test', 'Opis', 3000),
			action = new AddGoalAction(payload);

		expect({ ...action }).toEqual({ type: GoalsActionTypes.ADD_GOAL, payload });
	});
});

describe('AddGoalSuccessAction', () => {
	it('should create an action', () => {
		const payload: Goal = new Goal(guid(), 'Test', 'Opis', 300),
			action = new AddGoalSuccessAction(payload);

		expect({ ...action }).toEqual({ type: GoalsActionTypes.ADD_GOAL_SUCCESS, payload });
	});
});

describe('AddGoalFailureAction', () => {
	it('should create an action', () => {
		const action = new AddGoalFailureAction();

		expect({ ...action }).toEqual({ type: GoalsActionTypes.ADD_GOAL_FAILURE });
	});
});

describe('EditGoalAction', () => {
	it('should create an action', () => {
		const payload: Goal = new Goal(guid(), 'Test', 'Opis', 300),
			action = new EditGoalAction(payload);

		expect({ ...action }).toEqual({ type: GoalsActionTypes.EDIT_GOAL, payload });
	});
});

describe('EditGoalSuccessAction', () => {
	it('should create an action', () => {
		const id = guid(),
			payload: Update<Goal> = { id: id, changes: new Goal(id, 'Test', 'Opis', 399) },
			action = new EditGoalSuccessAction(payload);

		expect({ ...action }).toEqual({ type: GoalsActionTypes.EDIT_GOAL_SUCCESS, payload });
	});
});


describe('EditGoalFailureAction', () => {
	it('should create an action', () => {
		const action = new EditGoalFailureAction();

		expect({ ...action }).toEqual({ type: GoalsActionTypes.EDIT_GOAL_FAILURE });
	});
});

describe('RemoveGoalAction', () => {
	it('should create an action', () => {
		const payload: Goal = new Goal(guid(), 'Test', 'Opis', 300),
			action = new RemoveGoalAction(payload);

		expect({ ...action }).toEqual({ type: GoalsActionTypes.REMOVE_GOAL, payload });
	});
});

describe('RemoveGoalSuccessAction', () => {
	it('should create an action', () => {
		const payload: Goal = new Goal(guid(), 'Test', 'Opis', 300),
			action = new RemoveGoalSuccessAction(payload);

		expect({ ...action }).toEqual({ type: GoalsActionTypes.REMOVE_GOAL_SUCCESS, payload });
	});
});

describe('RemoveGoalFailureAction', () => {
	it('should create an action', () => {
		const action = new RemoveGoalFailureAction();

		expect({ ...action }).toEqual({ type: GoalsActionTypes.REMOVE_GOAL_FAILURE });
	});
});

describe('RealizeGoalAction', () => {
	it('should create an action', () => {
		const payload: Goal = new Goal(guid(), 'Test', 'Opis', 300),
			action = new RealizeGoalAction(payload);

		expect({ ...action }).toEqual({ type: GoalsActionTypes.REALIZE_GOAL, payload });
	});
});

describe('RealizeGoalSuccessAction', () => {
	it('should create an action', () => {
		const id = guid(),
			payload: Update<Goal> = { id: id, changes: new Goal(id, 'Test', 'Opis', 300) },
			action = new RealizeGoalSuccessAction(payload);

		expect({ ...action }).toEqual({ type: GoalsActionTypes.REALIZE_GOAL_SUCCESS, payload });
	});
});

describe('RealizeGoalFailureAction', () => {
	it('should create an action', () => {
		const action = new RealizeGoalFailureAction();

		expect({ ...action }).toEqual({ type: GoalsActionTypes.REALIZE_GOAL_FAILURE });
	});
});
