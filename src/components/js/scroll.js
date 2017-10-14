import $ from 'jquery';

export default () => {
  $(document).ready(function(){
        // $fn.scrollSpeed(step, speed, easing);
        jQuery.scrollSpeed(300, 750);
  });

  // Custom scrolling speed with jQuery
  // Source: github.com/ByNathan/jQuery.scrollSpeed
  // Version: 1.0.2

  (function($) {
      
    jQuery.scrollSpeed = function(step, speed, easing) {
        
      let $document = $(document),
        $window = $(window),
        $body = $('html, body'),
        option = easing || 'default',
        // window.root = 0,
        scroll = false,
        scrollY,
        scrollX,
        view;
          
      if (window.navigator.msPointerEnabled) {
        return false;
      }
      $("html, body").on('scrollY', (e) => {
        let deltaY = e.originalEvent.wheelDeltaY,
        detail = e.originalEvent.detail;
        if (deltaY < 0 || detail > 0) {
          window.root = (window.root + view) >= $document.height() ? window.root : window.root += step;
        }
        if (deltaY > 0 || detail < 0) {
          window.root = window.root <= 0 ? 0 : window.root -= step;
        }
      })
          
      $window.on('mousewheel DOMMouseScroll', (e) => {
        let deltaY = e.originalEvent.wheelDeltaY,
        detail = e.originalEvent.detail;
        scrollY = $document.height() > $window.height();
        scrollX = $document.width() > $window.width();
        scroll = true;
        
        if (scrollY) {
          view = $window.height();
          if (deltaY < 0 || detail > 0) {
            window.root = (window.root + view) >= $document.height() ? window.root : window.root += step;
          }
          if (deltaY > 0 || detail < 0) {
            window.root = window.root <= 0 ? 0 : window.root -= step;
          }
          $body.stop().animate({
            scrollTop: window.root
          }, speed, option, function() {
            scroll = false;
          });
        }
      return false;
      }).on('scroll', function() {
        if (scrollY && !scroll) {window.root = $window.scrollTop();}
        if (scrollX && !scroll) window.root = $window.scrollLeft();
      }).on('resize', function() {
        if (scrollY && !scroll) {view = $window.height()};
        if (scrollX && !scroll) view = $window.width();
      });       
    };
    
    jQuery.easing.default = (x,t,b,c,d) => {
      return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };
      
  })(jQuery);
};
