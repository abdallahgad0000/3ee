
//----------------------------------------------------------------

$(function() {
    'use strict';


    //Ui Animation
    AOS.init({
        easing: 'ease-in-out-sine'
    });

    hljs.initHighlightingOnLoad();
    $('.hero__scroll').on('click', function(e) {
        $('html, body').animate({
            scrollTop: $(window).height()
        }, 1200);
    });
    //Ui Animation end

    $(".carousel").swipe({
        swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },
        allowPageScroll: "vertical"
    });

    // //Masonry
    // //--------------------------------------------------------
    // var girdFieldObj = $('.grid');
    // girdFieldObj.masonry({
    //     itemSelector: '.grid-item',
    //     percentPosition: true
    // });

    // //Facts Counter
    // //--------------------------------------------------------
    // var counterObj = $('.fact-counter');
    // counterObj.counterUp({
    //     delay: 10,
    //     time: 500
    // });

    // //Category Filter (MixItUp Plugin)
    // //--------------------------------------------------------
    // var folioFilterObj = $('#category-filter, #category-filter-v2');
    // folioFilterObj.mixItUp();

  
    // Strar rating
    var $star_rating = $('.star-rating-v2 .fa');

    var SetRatingStar = function() {
        return $star_rating.each(function() {
            if (parseInt($star_rating.siblings('input.rating-value').val()) >= parseInt($(this).data('rating'))) {
                return $(this).removeClass('fa-star-o').addClass('fa-star');
            } else {
                return $(this).removeClass('fa-star').addClass('fa-star-o');
            }
        });
    };
    $star_rating.on('click', function() {
        $star_rating.siblings('input.rating-value').val($(this).data('rating'));
        return SetRatingStar();
    });
    SetRatingStar();

});

// ---------------- wish list active -----------

let wishListBtn = document.getElementById("wishListBtn");
wishListBtn.onclick = function(){
    $(wishListBtn).toggleClass("wishlist-added")
}