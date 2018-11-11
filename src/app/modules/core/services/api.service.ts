import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { DefaultResponse } from '../../../types/default-response';
import { Goal } from '../../../types/goal';
import { HttpClient } from '@angular/common/http';
import { Budget } from '../../../types/budget';
import { Operation } from '../../../types/operation';

@Injectable()
export class ApiService {
	private base: string;

	constructor(private http: HttpClient) {
		this.base = environment.base;
	}

	public getGoals(): Observable<DefaultResponse<Goal[]>> {
		return this.http.get<DefaultResponse<Goal[]>>(`${this.base}/goals`);
	}

	public addGoal(goal: Goal): Observable<DefaultResponse<Goal>> {
		return this.http.post<DefaultResponse<Goal>>(`${this.base}/goals`, goal);
	}

	public editGoal(goal: Goal): Observable<DefaultResponse<boolean>> {
		return this.http.put<DefaultResponse<boolean>>(`${this.base}/goals/${goal.id}`, goal);
	}

	public removeGoal(goal: Goal): Observable<DefaultResponse<boolean>> {
		return this.http.delete<DefaultResponse<boolean>>(`${this.base}/goals/${goal.id}`);
	}

	public realizeGoal(goal: Goal): Observable<DefaultResponse<boolean>> {
		return this.http.patch<DefaultResponse<boolean>>(`${this.base}/goals/${goal.id}`, {});
	}

	public getBudget(): Observable<DefaultResponse<Budget>> {
		return this.http.get<DefaultResponse<Budget>>(`${this.base}/budget`);
	}

	public addOperation(operation: Operation): Observable<DefaultResponse<Operation>> {
		return this.http.post<DefaultResponse<Operation>>(`${this.base}/budget/operations`, operation);
	}

	public editOperation(operation: Operation): Observable<DefaultResponse<boolean>> {
		return this.http.put<DefaultResponse<boolean>>(`${this.base}/budget/operations/${operation.id}`, operation);
	}

	public removeOperation(operation: Operation): Observable<DefaultResponse<boolean>> {
		return this.http.delete<DefaultResponse<boolean>>(`${this.base}/budget/operations/${operation.id}`);
	}
}
