(function( $ ){
    $.fn.valList = function(){
        return $.map( this, function (elem) {
            return elem.value || "";
        });
    };
})( jQuery );