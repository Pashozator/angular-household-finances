import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Operation } from '../../types/operation';

const sortByDate = (prev: Operation, next: Operation) => prev.date < next.date ? 1 : -1;

export const operationAdapter: EntityAdapter<Operation> = createEntityAdapter<Operation>({
	sortComparer: sortByDate
});
