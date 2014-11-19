Template.quoteItem.events({ 'submit .remove': function (e) {
        e.preventDefault();
        if (confirm("Do you want to remove " + this.quote + "?")){
            var currentPostId = this._id;
            Quotes.remove(currentPostId);
        }
    }
});

Template.quotesIndex.lastUpdate = function () {
    return Session.get('lastUpdate');
};


Template.quotesIndex.rendered = function () {
    var container = $("#quotes");
	console.log(container.find(".quoteItem").length);
	console.log(Quotes.find().count());
    if (!container.hasClass("isotope") && (container.find(".quoteItem").length === Quotes.find().count())) {
        // This seems to run once per block. Wasteful.
        console.log("Initialize isotope");
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
