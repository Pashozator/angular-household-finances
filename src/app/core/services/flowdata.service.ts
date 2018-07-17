import { Injectable } from '@angular/core';
import { Year } from '../models/year';

@Injectable()
export class FlowdataService {
	private year: Year;

	constructor() {
		this.year = {
			months: [
				{ income: 0, outgo: 0, savings: 0 },
				{ income: 0, outgo: 0, savings: 0 },
				{ income: 0, outgo: 0, savings: 0 },
				{ income: 0, outgo: 0, savings: 0 },
				{ income: 0, outgo: 0, savings: 0 },
				{ income: 0, outgo: 0, savings: 0 },
				{ income: 0, outgo: 0, savings: 0 },
				{ income: 0, outgo: 0, savings: 0 },
				{ income: 0, outgo: 0, savings: 0 },
				{ income: 0, outgo: 0, savings: 0 },
				{ income: 0, outgo: 0, savings: 0 },
				{ income: 0, outgo: 0, savings: 0 }
			]
		};
	}

	public addIncome(monthNumber: number, amount: number): void {
		this.year.months[monthNumber].income += amount;
		this.recalculateSavings(monthNumber);
	}

	public addOutgo(monthNumber: number, amount: number): void {
		this.year.months[monthNumber].outgo += amount;
		this.recalculateSavings(monthNumber);
	}

	public recalculateSavings(monthNumber: number): void {
		this.year.months[monthNumber].savings = this.year.months[monthNumber].income - this.year.months[monthNumber].outgo;
	}

	public getSavePerYear(): number {
		let sum = 0;
		for (let i = 0; i < 12; i++) {
			sum += this.year.months[i].savings;
		}
		return sum;
	}

	public getSavePerMonth(): Array<number> {
		let sum = [];
		for (let i = 0; i < 12; i++) {
			sum.push(this.year.months[i].savings);
		}
		return sum;
	}

	public getIncomePerMonth(): Array<number> {
		let sum = [];
		for (let i = 0; i < 12; i++) {
			sum.push(this.year.months[i].income);
		}
		return sum;
	}

	public getOutgoPerMonth(): Array<number> {
		let sum = [];
		for (let i = 0; i < 12; i++) {
			sum.push(this.year.months[i].outgo);
		}
		return sum;
	}
}
