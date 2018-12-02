import { OperationsState } from './operations.state';

export interface BudgetState {
	operations: OperationsState;
	debit: number;
}
