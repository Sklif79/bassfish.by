;(function ($) {
    $(function () {
        MainJs.init({
            fancyboxLink: 'a.fancybox',
            scrollToBtn: '.js_scroll-to'
        });

        Header.init({
            header: '.header',
            headerInner: '.header-inner'
        });
    });
})(jQuery);

var Header = {
    init: function (config) {
        this.header = $(config.header);
        this.headerInner = config.headerInner;
    },

    resize: function () {
        $(window).resize(function () {
        }.bind(this));
    }
};

var MainJs = {
    init: function (config) {
        // this.fancyboxLink = $(config.fancyboxLink);

        // if (this.fancyboxLink.length) {
        //     this.fancyboxPopup();
        // }

        this.resize();
    },

    fancyboxPopup: function () {
        this.fancyboxLink.fancybox({
            closeBtn: true,
            padding: [0, 0, 0, 0],
            prevEffect: 'none',
            nextEffect: 'none',
            maxWidth: 720,
            helpers: {
                overlay: {
                    css: {
                        'background': 'rgba(33,0,39,0.25)'
                    },
                },
                title: {type: 'inside'},
                thumbs: {
                    width: 50,
                    height: 50
                }
            },
            backFocus: false,
            mouseWheel: false
        });
    },

    scrollToID: function () {
        this.scrollToBtn.on('click', function () {
            var ID = $(this).data('scroll-to-id'),
                scrollTop = $('#' + ID).offset().top - $('.header').height();

            $('body, html').animate({scrollTop: scrollTop}, 500);
        });
    },

    resize: function () {
        $(window).resize(function () {

        }.bind(this));
    }
};