import { EntityState } from '@ngrx/entity';
import { Goal } from '../../types/goal';

export interface GoalsState extends EntityState<Goal> {
}
