
export class CellService {
	posX: number;
	posY: number;
	content: any;
	state: string;
	
	constructor() {
		this.state =  "empty"
		this.content = {};
	};
	populate(entity: any) {
		this.content = entity
		this.state = 'populated'
	};
	getContent():string {
		return (this.state === 'populated') ? this.content.type : this.state
	}
	wallUp() {
		this.content = 'wall'
		this.state = 'wall'
	}
}