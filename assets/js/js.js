$(function () {
    $(document).scroll(function () {
      var $nav = $(".sticky-top");
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
  });

  $(function() {
    $('div.icon-tab').click(function() {
        $(this).addClass('active').siblings().removeClass('active');
        setDisplay(450);
    });

    function setDisplay(time) {
        $('div.icon-tab').each(function(rang) {
            $('.item').eq(rang).css('display', 'none');

            if($(this).hasClass('active')){
                $('.item').eq(rang).fadeIn(time);
            }
        });
    }

    //Disable the animation on page load
    setDisplay(0);
});


$(window).on('load', function() {
    var $container = $('.portfolioContainer');
    var $filter = $('#filter');
    $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });
    $filter.find('a').click(function() {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
});

$(window).on('load', function() {
    var $container = $('.portfolioContainer2');
    var $filter = $('#filter2');
    $container.isotope({
        filter: '*',
        layoutMode: 'masonry',
        animationOptions: {
            duration: 750,
            easing: 'linear'
        }
    });
    $filter.find('a').click(function() {
        var selector = $(this).attr('data-filter');
        $filter.find('a').removeClass('active');
        $(this).addClass('active');
        $container.isotope({
            filter: selector,
            animationOptions: {
                animationDuration: 750,
                easing: 'linear',
                queue: false,
            }
        });
        return false;
    });
});
