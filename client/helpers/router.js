Router.configure({
    layoutTemplate: 'layout',
	waitOn: function() { 
		return [Meteor.subscribe('quotes'), Meteor.subscribe('tags')]
	}
});

Router.route('/', {
  	name: 'quotesIndex',
	data: function() { return  {
            quotes: Quotes.find(),
            tags: Tags.find()
        };
    }
});

Router.route('/add', {
  	name: 'quoteNew',
	data: function() { return  {
            tags: Tags.find()
        };
    }
});

