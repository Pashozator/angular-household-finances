import { Goal } from '../../types/goal';
import { GoalsActions, GoalsActionTypes } from '../actions/goals.actions';

const initialState: Goal[] = [];

export function goalsReducer(state: Goal[] = initialState, action: GoalsActions): Goal[] {
	switch (action.type) {
		case GoalsActionTypes.GET_GOALS: {
			return state;
		}
		case GoalsActionTypes.GET_GOALS_SUCCESS: {
			return action.payload;
		}
		case GoalsActionTypes.GET_GOALS_FAILURE: {
			return state;
		}
		case GoalsActionTypes.ADD_GOAL: {
			return state;
		}
		case GoalsActionTypes.ADD_GOAL_SUCCESS: {
			return [action.payload, ...state];
		}
		case GoalsActionTypes.ADD_GOAL_FAILURE: {
			return state;
		}
		case GoalsActionTypes.EDIT_GOAL: {
			return state;
		}
		case GoalsActionTypes.EDIT_GOAL_SUCCESS: {
			const goals = [...state],
				index = goals.findIndex(goal => goal.id === action.payload.id);

			goals[index] = action.payload;

			return goals;
		}
		case GoalsActionTypes.EDIT_GOAL_FAILURE: {
			return state;
		}
		case GoalsActionTypes.REMOVE_GOAL: {
			return state;
		}
		case GoalsActionTypes.REMOVE_GOAL_SUCCESS: {
			return [...state.filter(goal => goal.id !== action.payload.id)];
		}
		case GoalsActionTypes.REMOVE_GOAL_FAILURE: {
			return state;
		}
		case GoalsActionTypes.REALIZE_GOAL: {
			return state;
		}
		case GoalsActionTypes.REALIZE_GOAL_SUCCESS: {
			const goals = [...state],
				index = goals.findIndex(_goal => _goal.id === action.payload.id);

			goals[index].realized = true;

			return goals;
		}
		case GoalsActionTypes.REALIZE_GOAL_FAILURE: {
			return state;
		}
		default:
			return state;
	}
}
