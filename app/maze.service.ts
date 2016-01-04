// import {Injectable} from 'angular2/core';
// import {CellService} from './cell.service'

export class MazeService {
	height: number;
	width: number;
	name: string;
	content: any[];
	grid: any[];

	constructor() {
		this.height = 30;
		this.width = 30;
	}

	buildGrid() {
		this.grid = new Array(this.width)
		for (var i = 0; i < this.width; i++ ) {
			this.grid[i] = new Array(this.height)
		}
	}

	populateGrid(Cell:CellService) {
		this.buildGrid()
		for (var x = 0; x < this.width; x++) {
			for (var y = 0; y < this.height; y++) {
				this.grid[x][y] = new Cell());
				this.grid[x][y].posX = x;
				this.grid[x][y].posY = y;
			}
		}
	}

	place(entity, position) {
		this.grid[position[0]][position[1]].populate(entity)
		entity.setPosition(position[0], position[1])
	}

	walledUpGrid() {
		for (var x = 0; x < 30; x++) {
			for (var y = 0; y < 30; y++) {
				if(x == 0) this.grid[x][y].wallUp()
				if(y == 0) this.grid[x][y].wallUp()
				if(x == 29) this.grid[x][y].wallUp()
				if(y == 29) this.grid[x][29].wallUp()
			}
		}
	}
}