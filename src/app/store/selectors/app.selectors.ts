import { AppState } from '../state/app.state';

export const selectBudget = (state: AppState) => state.budget;
export const selectOperations = (state: AppState) => state.budget.operations;
