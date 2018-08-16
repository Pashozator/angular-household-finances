import { Month } from './month';

export class Year {
	constructor(
		public id: number = 0,
		public label: string = '',
		public months: Month[] = []
	) {
	}
}
