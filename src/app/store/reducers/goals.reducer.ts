import { GoalsActions, GoalsActionTypes } from '../actions/goals.actions';
import { GoalsState } from '../state/goals.state';
import { goalAdapter } from '../adapters/goals.adapter';

export const initialState: GoalsState = goalAdapter.getInitialState();

export function goalsReducer(state: GoalsState = initialState, action: GoalsActions): GoalsState {
	switch (action.type) {
		case GoalsActionTypes.GET_GOALS: {
			return state;
		}
		case GoalsActionTypes.GET_GOALS_SUCCESS: {
			return goalAdapter.addAll(action.payload, state);
		}
		case GoalsActionTypes.GET_GOALS_FAILURE: {
			return state;
		}
		case GoalsActionTypes.ADD_GOAL: {
			return state;
		}
		case GoalsActionTypes.ADD_GOAL_SUCCESS: {
			return goalAdapter.addOne(action.payload, state);
		}
		case GoalsActionTypes.ADD_GOAL_FAILURE: {
			return state;
		}
		case GoalsActionTypes.EDIT_GOAL: {
			return state;
		}
		case GoalsActionTypes.EDIT_GOAL_SUCCESS: {
			return goalAdapter.updateOne(action.payload, state);
		}
		case GoalsActionTypes.EDIT_GOAL_FAILURE: {
			return state;
		}
		case GoalsActionTypes.REMOVE_GOAL: {
			return state;
		}
		case GoalsActionTypes.REMOVE_GOAL_SUCCESS: {
			return goalAdapter.removeOne(action.payload.id, state);
		}
		case GoalsActionTypes.REMOVE_GOAL_FAILURE: {
			return state;
		}
		case GoalsActionTypes.REALIZE_GOAL: {
			return state;
		}
		case GoalsActionTypes.REALIZE_GOAL_SUCCESS: {
			action.payload.changes.realized = true;

			return goalAdapter.updateOne(action.payload, state);
		}
		case GoalsActionTypes.REALIZE_GOAL_FAILURE: {
			return state;
		}
		default:
			return state;
	}
}
