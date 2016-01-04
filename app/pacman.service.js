System.register([], function(exports_1) {
    var PacmanService;
    return {
        setters:[],
        execute: function() {
            PacmanService = (function () {
                function PacmanService() {
                    this.name = 'nameArg';
                    this.score = 0;
                    this.lives = 3;
                    this.type = 'pacman';
                    this.invulnerable = false;
                }
                PacmanService.prototype.isAlive = function () {
                    return this.lives > 0;
                };
                PacmanService.prototype.setPosition = function (posX, posY) {
                    this.posX = posX;
                    this.posY = posY;
                };
                PacmanService.prototype.updateScore = function (bonus) {
                    this.score += bonus;
                };
                PacmanService.prototype.updateLives = function (lives) {
                    this.lives += lives;
                };
                PacmanService.prototype.newPosition = function (direction) {
                    var newX = this.posX;
                    var newY = this.posY;
                    if (direction == 'Up') {
                        newX = this.posX;
                        newY = this.posY - 1;
                    }
                    if (direction == 'Down') {
                        newX = this.posX + 1;
                        newY = this.posY;
                    }
                    if (direction == 'Left') {
                        newX = this.posX;
                        newY = this.posY - 1;
                    }
                    if (direction == 'Right') {
                        newX = this.posX;
                        newY = this.posY + 1;
                    }
                    return [newX, newY];
                };
                PacmanService.prototype.checkCellState = function (cell) {
                    return cell.getContent();
                };
                PacmanService.prototype.move = function (direction, maze) {
                    var position = this.newPosition(direction);
                    var cell = maze.grid[position[0]][position[1]];
                    if (this.checkCellState(cell) == 'phantom') {
                        if (!this.invulnerable)
                            this.lives -= 1;
                        maze.place(cell.content, [this.posX, this.posY]);
                    }
                    if (this.checkCellState(cell) !== 'wall')
                        cell.populate(this);
                };
                return PacmanService;
            })();
            exports_1("PacmanService", PacmanService);
        }
    }
});
//# sourceMappingURL=pacman.service.js.map