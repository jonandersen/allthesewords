//if (Quotes.find().count() === 0) {
//    var tags = [];
//
//    for (var i = 0; i < 10; i++) {
//        var tag = Fake.word();
//        tags.push(tag);
//        Tags.insert({
//            tag: tag
//        });
//    }
//
//
//    for (i = 0; i < 50; i++) {
//        var nbrTags = Math.floor((Math.random() * 3) + 1);
//
//        var quoteTags = [];
//        for(var j = 0; j < nbrTags; j ++){
//            var randomIndex = Math.floor(Math.random() * tags.length);
//            tag = tags[randomIndex];
//            if(quoteTags.indexOf(tag) == -1){
//                quoteTags.push(tag)
//            }
//        }
//
//        Quotes.insert({
//            quote: Fake.sentence(5 + Math.floor((Math.random() * 20) + 1)),
//            author: Fake.word(),
//            tags: quoteTags
//        });
//    }
//}