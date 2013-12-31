Handlebars.registerHelper('ArrayConvert', function (array) {
    return array.join(" ");
});

Handlebars.registerHelper('IsotopeFilter', function (tags) {
    var html = "";
    for(var i = 0; i < tags.length; i ++){
        html += '<a href="#" data-filter=".'+ tags[i] +'">' + tags[i] +'</a> ';
    }
    return html;
});