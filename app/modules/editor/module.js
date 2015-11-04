define(["app", "hbs!editor/template"], function (App, Template) {

    App.module("Editor", function (Layout, App, Backbone, Marionette, $, _) {

        var View = Marionette.LayoutView.extend({
            template: Template
        });

        view = new View();

        App.regions.center.show(view);


        $('.dropme')

            .sortable({
                axis: "y",

                connectWith: '.dropme',
                placeholder: "ui-state-highlight",
                cursor: 'pointer'
            })

            .droppable({

                accept: '.block-preview',

                activeClass: 'highlight',
                hoverClass: "ui-state-hover",

                drop: function (event, ui) {
                    var $li = $('<div>').html('List ' + ui.draggable.html());
                    $li.appendTo(this);
                }

            });

    });

    return App.Editor;
});
