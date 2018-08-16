import { Budget } from '../../types/budget';
import { BudgetActions } from '../actions/budget.actions';

const initialState: Budget = {
	years: [
		{
			id: 1,
			label: '2018',
			months: [
				{ id: 1, label: 'Styczeń', income: 0, outgo: 0, savings: 0 },
				{ id: 2, label: 'Luty', income: 0, outgo: 0, savings: 0 },
				{ id: 3, label: 'Marzec', income: 0, outgo: 0, savings: 0 },
				{ id: 4, label: 'Kwiecień', income: 0, outgo: 0, savings: 0 },
				{ id: 5, label: 'Maj', income: 0, outgo: 0, savings: 0 },
				{ id: 6, label: 'Czerwiec', income: 0, outgo: 0, savings: 0 },
				{ id: 7, label: 'Lipiec', income: 0, outgo: 0, savings: 0 },
				{ id: 8, label: 'Sierpień', income: 0, outgo: 0, savings: 0 },
				{ id: 9, label: 'Wrzesień', income: 0, outgo: 0, savings: 0 },
				{ id: 10, label: 'Październik', income: 0, outgo: 0, savings: 0 },
				{ id: 11, label: 'Listopad', income: 0, outgo: 0, savings: 0 },
				{ id: 12, label: 'Grudzień', income: 0, outgo: 0, savings: 0 }
			]
		}
	]
};

export function budgetReducer(state: Budget = initialState, action: BudgetActions): Budget {
	switch (action.type) {
		default:
			return state;
	}
}
