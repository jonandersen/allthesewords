Meteor.publish('quotes', function() {
    return Quotes.find();
});

Meteor.publish('tags', function() {
    return Tags.find();
});