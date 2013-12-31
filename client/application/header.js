Handlebars.registerHelper('isEditing', function () {
    return Session.get("editing");
});

Template.header.events({ 'click .edit': function (e) {
    e.preventDefault();
    if(Session.get("editing")){
        Session.set("editing", false)
    }else{
        Session.set("editing", true)
    }
}
});
