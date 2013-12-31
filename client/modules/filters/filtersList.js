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

Template.filtersList.events({ 'click .remove': function (e) {
    e.preventDefault();
    if (confirm("Do you want to remove " + this.tag + "?")){
        var currentTagId = this._id;
        Tags.remove(currentTagId);
    }
}
});


