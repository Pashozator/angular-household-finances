import { createSelector } from '@ngrx/store';
import { selectGoalsState } from './app.selectors';
import { goalAdapter } from '../adapters/goals.adapter';

const { selectAll } = goalAdapter.getSelectors();

export const selectGoals = createSelector(
	selectGoalsState,
	selectAll
);
