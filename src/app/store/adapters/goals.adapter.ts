import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Goal } from '../../types/goal';

const selectGoalId = (goal: Goal): string => goal.id;
const sortByDate = (prev: Goal, next: Goal): number => prev.date < next.date ? 1 : -1;

export const goalAdapter: EntityAdapter<Goal> = createEntityAdapter<Goal>({
	selectId: selectGoalId,
	sortComparer: sortByDate
});
