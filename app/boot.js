System.register(['angular2/platform/browser', './app.component', './maze.service', './cell.service', './pacman.service'], function(exports_1) {
    var browser_1, app_component_1, maze_service_1, cell_service_1, pacman_service_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
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
            browser_1.bootstrap(app_component_1.AppComponent, [maze_service_1.MazeService, cell_service_1.CellService, pacman_service_1.PacmanService]);
        }
    }
});
//# sourceMappingURL=boot.js.map