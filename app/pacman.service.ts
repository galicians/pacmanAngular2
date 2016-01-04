
export class PacmanService {

	score: number;
	lives: number;
	name: string;
	posX: number;
	posY: number;
	invulnerable: boolean;
	type: string;

	constructor() {
		this.name = 'nameArg';
		this.score = 0;
		this.lives = 3;
		this.type = 'pacman';
		this.invulnerable = false;
	}
	isAlive(): boolean {
		return this.lives > 0
	}
	setPosition(posX: number, posY: number) {
		this.posX = posX;
		this.posY = posY
	}
	updateScore(bonus: number) {
		this.score += bonus
	}
	updateLives(lives: number) {
		this.lives += lives
	}
	newPosition(direction: string) {
		var newX: number = this.posX;
		var newY: number = this.posY;

		if(direction == 'Up') {
			newX = this.posX;
			newY = this.posY - 1;
		}
		if(direction == 'Down') {
			newX = this.posX + 1;
			newY = this.posY;
		}
		if(direction == 'Left') {
			newX = this.posX;
			newY = this.posY - 1;
		}
 		if(direction == 'Right') {
			newX = this.posX;
			newY = this.posY + 1;
		}
		return [newX, newY]
	}
	checkCellState(cell:any):string {
		return cell.getContent()
	}
	move(direction: string, maze) {
		var position = this.newPosition(direction);
		var cell = maze.grid[position[0]][position[1]]
		if (this.checkCellState(cell) == 'phantom') {
			if(!this.invulnerable)this.lives -= 1;
			maze.place(cell.content, [this.posX, this.posY])
		}
		if (this.checkCellState(cell) !== 'wall') cell.populate(this)
		
	}

}