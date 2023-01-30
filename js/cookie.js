$(function(){
/* クッキーをセットする
 -------------------------------------------------- */
  function setSiteviewCookie() {
    $('.btn-lang a').bind('click', function() {　//言語切り替えボタンを押下したときに発火
      $.cookie('siteview', $(this).data('siteview'), { path: '/' }); //siteviewという名前でcookieに値をセット
     });
  }
  setSiteviewCookie();
 
/* 日本語 or 英語を選んだ場合の処理
 -------------------------------------------------- */
  if($.cookie('siteview') == 'en') {
    //英語が選択されている場合(coockieの値にenが設定されている時)
    $('.content-en').css('display', 'block'); //英語を表示
    $('.content-jp').css('display', 'none');　//日本語を非表示
    $('.btn-lang .en').addClass('selected');　//言語切り替えボタンにクラスを振る処理
    $('.btn-lang .jp').removeClass('selected');
  } else {
    //日本語が選択されている場合
    $('.content-jp').css('display', 'block'); //日本語を表示
    $('.content-en').css('display', 'none');　//英語を非表示
    $('.btn-lang .jp').addClass('selected');
    $('.btn-lang .en').removeClass('selected');
  }
});