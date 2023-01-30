$(function(){
    $('.event_item_wrapper').css('display', 'none');
    $('.jan').css('display', 'block');
    $('.bt_jan').css({'background-color':'#fff', 'color':'#000'});
    $('.bt_jan').bind('click', function(){
        $('.jan').css('display', 'block');
        $('.feb, .mar, .apr, .may, .jun, .jul, .aug, .sep, .oct, .nov, .dec').css('display', 'none');
        $('.bt_jan').css({'background-color':'#fff', 'color':'#000'});
    });
    $('.bt_feb').bind('click', function(){
        $('.feb').css('display', 'block');
        $('.jan, .mar, .apr, .may, .jun, .jul, .aug, .sep, .oct, .nov, .dec').css('display', 'none');
        $('.bt_jan').css({'background-color':'#000', 'color':'#fff'});
    });
    $('.bt_apr').bind('click', function(){
        $('.apr').css('display', 'block');
        $('.jan, .feb, .mar, .may, .jun, .jul, .aug, .sep, .oct, .nov, .dec').css('display', 'none');
        $('.bt_jan').css({'background-color':'#000', 'color':'#fff'});
    });
    $('.bt_may').bind('click', function(){
        $('.may').css('display', 'block');
        $('.jan, .feb, .mar, .apr, .jun, .jul, .aug, .sep, .oct, .nov, .dec').css('display', 'none');
        $('.bt_jan').css({'background-color':'#000', 'color':'#fff'});
    });
    $('.bt_jun').bind('click', function(){
        $('.jun').css('display', 'block');
        $('.jan, .feb, .mar, .apr, .may, .jul, .aug, .sep, .oct, .nov, .dec').css('display', 'none');
        $('.bt_jan').css({'background-color':'#000', 'color':'#fff'});
    });
    $('.bt_jul').bind('click', function(){
        $('.jul').css('display', 'block');
        $('.jan, .feb, .mar, .apr, .may, .jun, .aug, .sep, .oct, .nov, .dec').css('display', 'none');
        $('.bt_jan').css({'background-color':'#000', 'color':'#fff'});
    });
    $('.bt_oct').bind('click', function(){
        $('.oct').css('display', 'block');
        $('.jan, .feb, .mar, .apr, .may, .jun, .jul, .aug, .sep, .nov, .dec').css('display', 'none');
        $('.bt_jan').css({'background-color':'#000', 'color':'#fff'});
    });
    $('.bt_nov').bind('click', function(){
        $('.nov').css('display', 'block');
        $('.jan, .feb, .mar, .apr, .may, .jun, .jul, .aug, .sep, .oct, .dec').css('display', 'none');
        $('.bt_jan').css({'background-color':'#000', 'color':'#fff'});
    });
    $('.bt_dec').bind('click', function(){
        $('.dec').css('display', 'block');
        $('.jan, .feb, .mar, .apr, .may, .jun, .jul, .aug, .sep, .oct, .nov').css('display', 'none');
        $('.bt_jan').css({'background-color':'#000', 'color':'#fff'});
    });
});