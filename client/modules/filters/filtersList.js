Template.filtersList.helpers({
    tags: function() {
        return Tags.find();
    }
});

Template.filtersList.events({ 'click': function (e) {
    e.preventDefault();
    Session.set('tag_filter', this.tag);
    }
});


