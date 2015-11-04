requirejs.config({

    baseUrl: 'app/modules',

    urlArgs: "cache=" + (new Date()).getTime(),

    paths: {

        app: '../app',

        "jquery": "../../vendor/jquery/dist/jquery.min",
        "jquery-ui": "../../vendor/jquery-ui/jquery-ui.min",
        "jquery-ui-layout": "../../vendor/jquery-ui-layout/source/stable/jquery.layout_and_plugins.min",
        "backbone": "../../vendor/backbone/backbone-min",
        "underscore": "../../vendor/underscore/underscore-min",
        "marionette": "../../vendor/backbone.marionette/lib/backbone.marionette.min",

        "hbs": "../../vendor/hbs/hbs",
        "text": "../../vendor/text/text",
        "json2": "../../vendor/json2/json2",

        "handlebars": "../../vendor/handlebars/handlebars.amd.min"

        //spin: "vendor/spin",
        //tpl: "vendor/underscore-tpl",
        //json2: "vendor/json2",
        //"spin.jquery": "vendor/spin.jquery",
        //localstorage: "vendor/backbone.localstorage",
        //"backbone.picky": "vendor/backbone.picky",
        //"backbone.syphon": "vendor/backbone.syphon",
    },

    shim: {

        "jquery-ui": ["jquery"],
        "jquery-ui-layout": ["jquery"],

        "underscore": {
            exports: "_"
        },

        "backbone": {
            deps: ["jquery", "underscore"],
            exports: "Backbone"
        },

        "marionette": {
            deps: ["backbone"],
            exports: "Marionette"
        },

        "handlebars":{
            "exports":"Handlebars"
        }


        //"backbone.picky": ["backbone"],
        //"backbone.syphon": ["backbone"],
        //localstorage: ["backbone"],
        //"spin.jquery": ["spin", "jquery"],
        //tpl: ["text"]
    },

    hbs: {
        templateExtension: "hbs",
        helperDirectory: "templates/helpers/",
        i18nDirectory: "templates/i18n/",

        compileOptions: {}        // options object which is passed to Handlebars compiler
    }

});

require(["app", "marionette", "jquery-ui"], function (App) {
    App.start();
});