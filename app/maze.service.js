// import {Injectable} from 'angular2/core';
// import {CellService} from './cell.service'
System.register([], function(exports_1) {
    var MazeService;
    return {
        setters:[],
        execute: function() {
            MazeService = (function () {
                function MazeService() {
                    this.height = 30;
                    this.width = 30;
                }
                MazeService.prototype.buildGrid = function () {
                    this.grid = new Array(this.width);
                    for (var i = 0; i < this.width; i++) {
                        this.grid[i] = new Array(this.height);
                    }
                };
                MazeService.prototype.populateGrid = function (Cell) {
                    this.buildGrid();
                    for (var x = 0; x < this.width; x++) {
                        for (var y = 0; y < this.height; y++) {
                            this.grid[x][y] = new Cell();
                            ;
                            this.grid[x][y].posX = x;
                            this.grid[x][y].posY = y;
                        }
                    }
                };
                MazeService.prototype.place = function (entity, position) {
                    this.grid[position[0]][position[1]].populate(entity);
                    entity.setPosition(position[0], position[1]);
                };
                MazeService.prototype.walledUpGrid = function () {
                    for (var x = 0; x < 30; x++) {
                        for (var y = 0; y < 30; y++) {
                            if (x == 0)
                                this.grid[x][y].wallUp();
                            if (y == 0)
                                this.grid[x][y].wallUp();
                            if (x == 29)
                                this.grid[x][y].wallUp();
                            if (y == 29)
                                this.grid[x][29].wallUp();
                        }
                    }
                };
                return MazeService;
            })();
            exports_1("MazeService", MazeService);
        }
    }
});
//# sourceMappingURL=maze.service.js.map