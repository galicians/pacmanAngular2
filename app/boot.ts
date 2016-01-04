import {bootstrap} from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {MazeService} from './maze.service'
import {CellService} from './cell.service'
import {PacmanService} from './pacman.service'
export {document} from 'angular2/platform/browser'

bootstrap(AppComponent, [MazeService, CellService, PacmanService]);