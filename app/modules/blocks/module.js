define(["app", "hbs!blocks/template", "hbs!blocks/item", "hbs!blocks/items"], function(App, Template, ItemTemplate, ItemsTemplate){

    App.module("Blocks", function(Layout, App, Backbone, Marionette, $, _){

        var Item = Marionette.ItemView.extend({
            template: ItemTemplate
        });

        var Items = Marionette.CompositeView.extend({
            childView: Item,
            childViewContainer: "div.blocks",
            template: ItemsTemplate,
            collection: new Backbone.Collection()
        });

        var FooBar = Backbone.Model.extend({
            defaults: {
                isFoo: false
            }
        });

        var foo = new FooBar({
            isFoo: true
        });
        var bar = new FooBar({
            isFoo: false
        });

        var items = new Items();

        items.collection.add(foo);
        items.collection.add(bar);

        App.regions.east.show(items);


        $( ".block-preview" ).draggable({
            connectWith: '.dropme',
            revert: "invalid",
            helper: "clone",
            appendTo: "body",
            cursor: 'pointer',
            opacity: 0.5,
            zIndex: 300

        });

    });

    return App.Blocks;
});
