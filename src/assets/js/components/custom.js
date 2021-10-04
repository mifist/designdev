(function ($) {
    'use_strict';


    $.fn.equalHeight = function () {
        let tallest = 0;
        this.each(function () {
            let thisHeight = $(this).height();
            tallest = (thisHeight > tallest) ? thisHeight : tallest;
        });
        return this.height(tallest);
    };

    let is_chrome = navigator.userAgent.indexOf('Chrome') > -1;
    let is_explorer = navigator.userAgent.indexOf('MSIE') > -1;
    let is_firefox = navigator.userAgent.indexOf('Firefox') > -1;
    let is_safari = navigator.userAgent.indexOf("Safari") > -1;
    let is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
    if ((is_chrome) && (is_safari)) {
        is_safari = false;
    }
    if ((is_chrome) && (is_opera)) {
        is_chrome = false;
    }

    const getUrlVars = () => {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    };

    var url_vars = getUrlVars();

    let wpml_flag_letters = () => {
        if ($(document).find('li.wpml-ls-item').length > 0) {
            $(document).find('li.wpml-ls-item').each(function (e) {
                let lang = $(this).find('a > .wpml-ls-flag').attr('alt');
                $(this).find('a .wpml-ls-flag').after('<span>' + lang + '</span>');
                $(this).find('a span:nth-of-type(2)').hide();
            });
        }
    };


  /**
   * Preloader
   * */
  window.addEventListener("load", () => {
    let preloaderGroup = document.getElementById("preloaderGroup");
    console.log(preloaderGroup);
    if ( preloaderGroup ) {
      preloaderGroup.classList.add("vanish");
      setTimeout(() => {
        preloaderGroup.style.display = "none";
      }, 2000);
    }
  });
  // END - Preloader


    $(document).ready(function () {

        if (navigator.userAgent.indexOf('Mac') > 0)
            $('body').addClass('mac-os');


    });

    $(window).on('ready resize orientationChange', function () {
    });






})(jQuery);


/*if (window.matchMedia("(min-width: 1024px)").matches) {


}*/


