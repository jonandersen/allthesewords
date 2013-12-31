Template.quoteNew.events({ 'click .modal-footer': function (e) {
    e.preventDefault();
    if($(e.target).hasClass("save")){
        var tags = $(".modal-body").find('[name=tags]').val().split(",")

        var quote = {
            quote: $(".modal-body").find('[name=quote]').val(),
            author: $(".modal-body").find('[name=author]').val(),
            tags: tags
        };
        quote._id = Quotes.insert(quote);
        Router.go('/');
    }
}
});

Template.quoteNew.rendered= function (){
    $(".tags-multiple").select2({
        allowClear: true,
        width: '100%'
    });
};

Template.quoteNew.helpers({
    tags: function() {
        return Tags.find();
    }
});
