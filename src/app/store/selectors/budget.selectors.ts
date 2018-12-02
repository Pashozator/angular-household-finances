import { AppState } from '../state/app.state';
import { operationAdapter } from '../adapters/operations.adapter';
import { createSelector } from '@ngrx/store';

export const selectDebit = (state: AppState) => state.budget.debit;
export const selectOperationsState = (state: AppState) => state.budget.operations;

const { selectAll } = operationAdapter.getSelectors();

export const selectOperations = createSelector(
	selectOperationsState,
	selectAll
);
