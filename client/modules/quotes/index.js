QuotesIndexController = RouteController.extend({
    template: 'quotesIndex',

    before: function () {
    },

    after: function () {
    },

    waitOn: function () {
        return [Meteor.subscribe('quotes'), Meteor.subscribe('tags')];
    },

    data: function () {
        return {
            quotes: Quotes.find(),
            tags: Tags.find()
        };
    }
});

Template.quoteItem.events({ 'click .remove': function (e) {
        e.preventDefault();
        if (confirm("Press a button")){
            var currentPostId = this._id;
            Quotes.remove(currentPostId);
        }
    }
});


Template.quoteItem.rendered = function () {
    var container = $("#quotes");
    if (!container.hasClass("isotope") && (container.find(".quoteItem").length == Quotes.find().count())) {
        // This seems to run once per block. Wasteful.
        // console.log("Initialize isotope");
        // Initialize isotope

        container.isotope({
            itemSelector: '.quoteItem',
            layoutMode: 'masonry',
            masonry: {
                columnWidth: 300
            }
        });


    }

    $('.tags').find('a').click(function () {
        var selector = $(this).attr('data-filter');
        $("#quotes").isotope({ filter: selector });
        return false;
    });

    $('#filters').find('a').click(function () {
        var selector = $(this).attr('data-filter');
        $("#quotes").isotope({ filter: selector });
        return false;
    });

};
