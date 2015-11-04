define(["marionette", "handlebars"], function(Marionette){

    var App = new Marionette.Application();

    App.on("before:start", function(){
        console.log("Before Start");
    });

    App.on("start", function(){
        console.log("Start");
    });

    require(["main-layout/module"], function(Layout) {

        require(["editor/module"], function(Editor) {

        });

        require(["blocks/module"], function(Blocks) {

        })

    });

    return App;
});