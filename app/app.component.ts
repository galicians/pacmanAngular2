import {Component} from 'angular2/core';
import {MazeService} from './maze.service';
import {CellService} from './cell.service';
import {PacmanService} from './pacman.service';
import {OnInit} from 'angular2/core';
import {Input} from 'angular2/core';
import {Output} from 'angular2/core';
import {EventEmitter} from 'angular2/core';
import {HostListener, HostBinding} from 'angular2/core';
import {OnChanges, DoCheck, SimpleChange, AfterContentChecked, AfterViewInit, AfterViewChecked} from 'angular2/core';


@Component({
    selector: 'my-app',
    templateUrl: 'app/maze-template.html',
    styleUrls: ['css/maze.style.css']
})

export class AppComponent { 
	@Input() grid;
	@Output() keydown = new EventEmitter();
	@Output() click = new EventEmitter();
	public title = 'Angular2 Pacman';
	public grid = maze.grid;
	public k;
	public check;

	constructor() {
		console.log('this class', this)
		k = this
	}

	@HostBinding() maze.grid

	ngDoCheck() {
		console.log('doing  a check')
	}

	@HostListener('click', ['$event.target'])
	
	onChange(x) {
		console.log('x',x)
	}

	onClick(btn) {
	   console.log("click", btn);
	}
	@HostListener('keydown', ['$event'])

	onKeydown(event, ngDoCheck) {
	   console.log("keydown", event);
	 //   k.ngDoCheck() {
		// console.log('doing  a check')
		// }
	}

	ngAfterViewChecked(){
		console.log('afer view checked')
	}
	ngAfterContentChecked() {
		console.log('afterContentChecked')
	}

	ngOnChanges(grid) {
		console.log('changes', grid)
	}
	

	var maze = new MazeService();
	var pacman = new PacmanService();

	document.addEventListener('keydown', function(e) {
		// console.log('event angular', e.keyIdentifier)
		// console.log('this function', k)
		k.keydown.emit(e.keyIdentifier)
		// k.click.emit({'$event': { 'target': 'maze'}})
		pacman.move(e.keyIdentifier, maze)
		// console.log('maze', maze)
	}




	maze.buildGrid()
	maze.populateGrid(CellService)
	maze.walledUpGrid()
	maze.place(pacman, [1,10])
	// maze.place(pacman, [2,20])



}
