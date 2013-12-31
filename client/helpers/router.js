Router.configure({
    layoutTemplate: 'layout'
});

Router.map(function () {
    this.route('quotesIndex', {
        path: '/',
        controller: QuotesIndexController,
        load: function () {
            Session.set('active', "quotesIndex");
        }
    });
});