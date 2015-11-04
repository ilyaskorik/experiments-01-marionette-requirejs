define(["app", "jquery-ui-layout", "hbs!main-layout/template"], function (App, UiLayout, Template) {

    App.module("Layout", function (Layout, App, Backbone, Marionette, $, _) {

        var LayoutView = Marionette.LayoutView.extend({
            el: ".application",
            template: Template,
            regions: {
                center: ".ui-layout-center",
                north: ".ui-layout-north",
                south: ".ui-layout-south",
                east: ".ui-layout-east",
                west: ".ui-layout-west"
            }
        });

        App.regions = new LayoutView();
        App.regions.render();

        $('.application').layout({applyDefaultStyles: true});

    });

    return App.Layout;
});