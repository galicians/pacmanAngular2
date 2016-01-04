System.register(['angular2/core', './maze.service', './cell.service', './pacman.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, maze_service_1, cell_service_1, pacman_service_1, core_2, core_3, core_4, core_5;
    var AppComponent, maze, pacman;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
                core_2 = core_1_1;
                core_3 = core_1_1;
                core_4 = core_1_1;
                core_5 = core_1_1;
            },
            function (maze_service_1_1) {
                maze_service_1 = maze_service_1_1;
            },
            function (cell_service_1_1) {
                cell_service_1 = cell_service_1_1;
            },
            function (pacman_service_1_1) {
                pacman_service_1 = pacman_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.keydown = new core_4.EventEmitter();
                    this.click = new core_4.EventEmitter();
                    this.title = 'Angular2 Pacman';
                    this.grid = maze.grid;
                    console.log('this class', this);
                    k = this;
                }
                AppComponent.prototype.ngDoCheck = function () {
                    console.log('doing  a check');
                };
                AppComponent.prototype.onChange = function (x) {
                    console.log('x', x);
                };
                AppComponent.prototype.onClick = function (btn) {
                    console.log("click", btn);
                };
                AppComponent.prototype.onKeydown = function (event, ngDoCheck) {
                    console.log("keydown", event);
                    //   k.ngDoCheck() {
                    // console.log('doing  a check')
                    // }
                };
                AppComponent.prototype.ngAfterViewChecked = function () {
                    console.log('afer view checked');
                };
                AppComponent.prototype.ngAfterContentChecked = function () {
                    console.log('afterContentChecked');
                };
                AppComponent.prototype.ngOnChanges = function (grid) {
                    console.log('changes', grid);
                };
                __decorate([
                    core_2.Input(), 
                    __metadata('design:type', Object)
                ], AppComponent.prototype, "grid", void 0);
                __decorate([
                    core_3.Output(), 
                    __metadata('design:type', Object)
                ], AppComponent.prototype, "keydown", void 0);
                __decorate([
                    core_3.Output(), 
                    __metadata('design:type', Object)
                ], AppComponent.prototype, "click", void 0);
                __decorate([
                    core_5.HostBinding(), 
                    __metadata('design:type', Object)
                ], AppComponent.prototype, "maze", void 0);
                __decorate([
                    core_5.HostListener('click', ['$event.target']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object]), 
                    __metadata('design:returntype', void 0)
                ], AppComponent.prototype, "onChange", null);
                __decorate([
                    core_5.HostListener('keydown', ['$event']), 
                    __metadata('design:type', Function), 
                    __metadata('design:paramtypes', [Object, Object]), 
                    __metadata('design:returntype', void 0)
                ], AppComponent.prototype, "onKeydown", null);
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/maze-template.html',
                        styleUrls: ['css/maze.style.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
            maze = new maze_service_1.MazeService();
            pacman = new pacman_service_1.PacmanService();
            document.addEventListener('keydown', function (e) {
                // console.log('event angular', e.keyIdentifier)
                // console.log('this function', k)
                k.keydown.emit(e.keyIdentifier);
                // k.click.emit({'$event': { 'target': 'maze'}})
                pacman.move(e.keyIdentifier, maze);
                // console.log('maze', maze)
            }, maze.buildGrid(), maze.populateGrid(cell_service_1.CellService), maze.walledUpGrid(), maze.place(pacman, [1, 10]));
        }
    }
});
//# sourceMappingURL=app.component.js.map