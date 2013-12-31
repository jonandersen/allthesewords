Template.tagsNew.events({ 'click .modal-footer': function (e) {
    e.preventDefault();
    var tagString = $(".modal-body").find('[name=tag]').val();
    if($(e.target).hasClass("save") && !Tags.findOne({tag: tagString})){
        var tag = {
            tag: tagString
        };
        tag._id = Tags.insert(tag);
    }
}
});