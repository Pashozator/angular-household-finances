import { Injectable } from '@angular/core';
import { Goal } from '../../../types/goal';

@Injectable()
export class GoalService {
	private currentGoal: Goal;
	private realizedGoals: Goal[] = [];

	constructor() {
		this.currentGoal = new Goal(0,'');
		this.realizedGoals = new Array<Goal>(0);
	}

	getCurrentGoal(): Goal {
		return this.currentGoal;
	}

	realizeGoal(goal: Goal): Goal[] {
		this.realizedGoals.push(this.currentGoal);
		this.currentGoal = new Goal(0,'');

		return this.realizedGoals;
	}

	getRealizedGoals(): Goal[] {
		return this.realizedGoals;
	}

	newGoal(amount: number, description: string): Goal {
		this.currentGoal = new Goal(amount, description);
		return this.currentGoal;
	}

	deleteGoal(): Goal {
		this.currentGoal = new Goal(0,'');
		return this.currentGoal;
	}
}
