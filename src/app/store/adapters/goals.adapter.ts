import { createEntityAdapter, EntityAdapter } from '@ngrx/entity';
import { Goal } from '../../types/goal';

export const goalAdapter: EntityAdapter<Goal> = createEntityAdapter<Goal>();
