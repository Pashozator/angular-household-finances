import { AppState } from '../state/app.state';

export const selectBudget = (state: AppState) => state.budget;
export const selectGoalsState = (state: AppState) => state.goals;
