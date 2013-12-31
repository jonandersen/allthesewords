Quotes = new Meteor.Collection('quotes');

Quotes.allow({
    insert: function(userId, doc) {
        return !! userId;
    }
});