export class Goal {
	constructor(
		public id: string = '',
		public label: string = '',
		public description: string = '',
		public value: number = null,
		public realized: boolean = false,
		public date: Date = null
	) {
		this.date = date === null ? new Date() : date;
	}
}
