Template.quoteNew.events({ 'submit form#createQuote': function (e) {
	    e.preventDefault();
        var tags = $("#tags").val().split(',');
	
		tags = _.map(tags, function(tag){
			return tag.toLowerCase().trim();
		});
	
		_.each(tags, function(tag) {
			if(!Tags.findOne({tag: tag})){
				Tags.insert({tag: tag});
			}	
		});
	
        var quote = {
            quote: $("#quote").val(),
            author: $("#author").val(),
            tags: tags
        };
        Quotes.insert(quote);
	    Session.set('lastUpdate', new Date() );	
		$("#quote").val("");
		$("#author").val("");
		$("#tags").val("");
				
	    $('#quotes').isotope('reloadItems');
		
    }
});



Template.quoteNew.helpers({
    tags: function () {
        return Tags.find();
    }
});
