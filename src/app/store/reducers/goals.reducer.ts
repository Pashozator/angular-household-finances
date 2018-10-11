import { Goal } from '../../types/goal';
import { GoalsActions, GoalsActionTypes } from '../actions/goals.actions';

const initialState: Goal[] = [];

export function goalsReducer(state: Goal[] = initialState, action: GoalsActions): Goal[] {
	switch (action.type) {
		case GoalsActionTypes.ADD_GOAL:
			return [action.payload, ...state];
		case GoalsActionTypes.EDIT_GOAL:
			const goals = [...state],
				index = goals.findIndex(goal => goal.id === action.payload.id);

			goals[index] = action.payload;

			return goals;
		case GoalsActionTypes.REMOVE_GOAL:
			return [...state.filter(goal => goal.id !== action.payload.id)];
		default:
			return state;
	}
}
