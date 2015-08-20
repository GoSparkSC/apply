$( window ).resize(function() {
    var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (w <= 480) {
        $('.sm').each(function(){
            $(this).after( $(this).prevUntil($('.stop')) );
        });
    }
});
