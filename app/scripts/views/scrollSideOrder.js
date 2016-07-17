import $ from 'jquery';

function stickyScroll() {
  let fixedTop = $('.side-order').offset().top;
      $(window).scroll(function() {
          var currentScroll = $(window).scrollTop();
          if (currentScroll >= fixedTop - 80 - 80) {
              $('.side-order').css({
                  position: 'fixed',
                  top: '1em',
                  right: '15em',
                  width: 'calc(25% - 20px)'
              });
          } else {
              $('.side-order').css({
                  position: 'static',
                  width: 'calc(20%)'
              });
          }
      });
  return fixedTop;
}

export default stickyScroll;
