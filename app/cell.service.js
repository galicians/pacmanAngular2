System.register([], function(exports_1) {
    var CellService;
    return {
        setters:[],
        execute: function() {
            CellService = (function () {
                function CellService() {
                    this.state = "empty";
                    this.content = {};
                }
                ;
                CellService.prototype.populate = function (entity) {
                    this.content = entity;
                    this.state = 'populated';
                };
                ;
                CellService.prototype.getContent = function () {
                    return (this.state === 'populated') ? this.content.type : this.state;
                };
                CellService.prototype.wallUp = function () {
                    this.content = 'wall';
                    this.state = 'wall';
                };
                return CellService;
            })();
            exports_1("CellService", CellService);
        }
    }
});
//# sourceMappingURL=cell.service.js.map