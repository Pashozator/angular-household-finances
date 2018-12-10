import { goalsReducer, initialState } from './goals.reducer';
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
	RealizeGoalAction,
	RealizeGoalFailureAction,
	RealizeGoalSuccessAction,
	RemoveGoalAction,
	RemoveGoalFailureAction,
	RemoveGoalSuccessAction
} from '../actions/goals.actions';
import { Goal } from '../../types/goal';
import { GoalsState } from '../state/goals.state';

describe('GoalsReducer', () => {
	describe('undefined action', () => {
		it('should return default state', () => {
			const action = {},
				// @ts-ignore
				state = goalsReducer(undefined, action);

			expect(state).toBe(initialState);
		});
	});

	describe('GET_GOALS action', () => {
		it('should return previous state', () => {
			const previousState = initialState,
				action = new GetGoalsAction(),
				state = goalsReducer(previousState, action);

			expect(state).toBe(previousState);
		});
	});

	describe('GET_GOALS_SUCCESS action', () => {
		it('should add all goals to state', () => {
			const previousState = initialState,
				goals = [new Goal()],
				action = new GetGoalsSuccessAction(goals),
				state = goalsReducer(previousState, action);

			expect(state.ids.length).toBe(1);
		});
	});

	describe('GET_GOALS_FAILURE action', () => {
		it('should return previous state', () => {
			const previousState = initialState,
				action = new GetGoalsFailureAction(),
				state = goalsReducer(previousState, action);

			expect(state).toBe(previousState);
		});
	});

	describe('ADD_GOAL action', () => {
		it('should return previous state', () => {
			const previousState = initialState,
				action = new AddGoalAction(new Goal()),
				state = goalsReducer(previousState, action);

			expect(state).toBe(previousState);
		});
	});

	describe('ADD_GOAL_SUCCESS action', () => {
		it('should add goal to state', () => {
			const previousState = initialState,
				action = new AddGoalSuccessAction(new Goal()),
				state = goalsReducer(previousState, action);

			expect(state.ids.length).toBe(1);
		});
	});

	describe('ADD_GOAL_FAILURE action', () => {
		it('should return previous state', () => {
			const previousState = initialState,
				action = new AddGoalFailureAction(),
				state = goalsReducer(previousState, action);

			expect(state).toBe(previousState);
		});
	});

	describe('EDIT_GOAL action', () => {
		it('should return previous state', () => {
			const previousState = initialState,
				action = new EditGoalAction(new Goal()),
				state = goalsReducer(previousState, action);

			expect(state).toBe(previousState);
		});
	});

	describe('EDIT_GOAL_SUCCESS action', () => {
		it('should edit existed goal', () => {
			const goal = new Goal('a1', 'Test'),
				editedGoal = { ...goal, label: 'Test 2' },
				previousState: GoalsState = { ids: [goal.id], entities: { [goal.id]: goal } },
				action = new EditGoalSuccessAction({ id: goal.id, changes: editedGoal }),
				state = goalsReducer(previousState, action);

			expect(state.entities[goal.id].label).toBe(editedGoal.label);
		});
	});

	describe('EDIT_GOAL_FAILURE action', () => {
		it('should return previous state', () => {
			const previousState = initialState,
				action = new EditGoalFailureAction(),
				state = goalsReducer(previousState, action);

			expect(state).toBe(previousState);
		});
	});

	describe('REMOVE_GOAL action', () => {
		it('should return previous state', () => {
			const previousState = initialState,
				action = new RemoveGoalAction(new Goal()),
				state = goalsReducer(previousState, action);

			expect(state).toBe(previousState);
		});
	});

	describe('REMOVE_GOAL_SUCCESS action', () => {
		it('should remove goal from state', () => {
			const goal = new Goal('1'),
				previousState = { ...initialState, ids: [goal.id], entities: { [goal.id]: goal } },
				action = new RemoveGoalSuccessAction(goal),
				state = goalsReducer(previousState, action);

			expect(state.ids.length).toBe(0);
		});
	});

	describe('REMOVE_GOAL_FAILURE action', () => {
		it('should return previous state', () => {
			const previousState = initialState,
				action = new RemoveGoalFailureAction(),
				state = goalsReducer(previousState, action);

			expect(state).toBe(previousState);
		});
	});

	describe('REALIZE_GOAL action', () => {
		it('should return previous state', () => {
			const previousState = initialState,
				action = new RealizeGoalAction(new Goal()),
				state = goalsReducer(previousState, action);

			expect(state).toBe(previousState);
		});
	});

	describe('REALIZE_GOAL_SUCCESS action', () => {
		it('it should set realized property to true', () => {
			const goal = new Goal('1'),
				previousState = { ...initialState, ids: [goal.id], entities: { [goal.id]: goal } },
				action = new RealizeGoalSuccessAction({ id: goal.id, changes: goal }),
				state = goalsReducer(previousState, action);

			expect(state.entities[goal.id].realized).toBeTruthy();
		});
	});

	describe('REALIZE_GOAL_FAILURE action', () => {
		it('should return previous state', () => {
			const previousState = initialState,
				action = new RealizeGoalFailureAction(),
				state = goalsReducer(previousState, action);

			expect(state).toBe(previousState);
		});
	});
});
