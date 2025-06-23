$(document).ready(function () {
  "use strict";
  //------ 1. Left Side Navigation Trigger START	
  $('.side-nav-trigger, .search-trigger, .drp-trigger, .match-trigger, .lst-trg').on('click', function () {

    var target = $(this).data('trigger');
    var toggleClass = $(this).data('class');

    $(target).toggleClass(toggleClass);
  });

  $(".t-icn-sr").click(function () {
    $('body').addClass('js_ser-nav');
    $('.srh_inp').focus();
  });

  $(".overlay__side-nav, .sid-nav-cls, .SrcDr_cls,.SchLng_cn-icn, .nav-cls").click(function () {
    $('body').removeClass('js_sid-nav');
    $('body').removeClass('js_ser-nav');
    $('body').removeClass('js_SchLng');
    $('body').removeClass('js-SrcDr_tp');
    $('body').removeClass('js_fltr-nav');
    $('body').removeClass('js_ftr-sts-nav');
    $('body').removeClass('js_pin-up');
    $('body').removeClass('js-npop-frm');
    $('body').removeClass('js_drp-nav');
    $('body').removeClass('res-bt_sub-nav');
    $('body').removeClass('js_MtcNoti_nav');
    $('body').removeClass('js_AutPup_nav');
    $('body').removeClass('SUpNv-on');
    $('body').removeClass('js_sid-nav-right');
  });

  //------ Left Side Navigation Trigger END


});


//------====== 2. Search  ======------//
$('.control').click(function () {
  $('body').addClass('search-active');
  $('.input-search').focus();
  $(".ovl").fadeIn(0).addClass("js-ovl");
});

$('.icon-close').click(function () {
  $('body').removeClass("search-active");

});
$('.ovl').click(function () {
  setTimeout(function () {
    $('body').removeClass("search-active");
  }, 0);

});



//------====== 3. Add class on scroll  ======------//
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
    $(".nav-trigger").addClass("nav_stk");
  } else {
    $(".nav-trigger").removeClass("nav_stk");
  }
});


//------====== 3. Add class on scroll  ======------//
$(window).scroll(function () {
  var scroll = $(window).scrollTop();

  if (scroll >= 500) {
    $(".nav-trigger").addClass("nav_stk");
  } else {
    $(".nav-trigger").removeClass("nav_stk");
  }
});


//------====== 4. Dropdown  ======------//

//$('.drp-trigger').click(function(){
//$(this).toggleClass('js-drp-open');
//});

//---- a. Dropdown Mobile ----//
$(document).ready(function () {
  [].slice.call(document.querySelectorAll('.drp-trigger .drp-lnk, .drp-trigger1 .MorOpin_li-lk')).forEach(function (el) {
    el.addEventListener('click', onClick, false);
  });

  function onClick(e) {
    //e.preventDefault();
    var el = this.parentNode;
    el.classList.contains('js-drp-open') ? hideSubMenu(el) : showSubMenu(el);
  }

  function showSubMenu(el) {
    el.classList.add('js-drp-open');
    document.addEventListener('click', function onDocClick(e) {
      //e.preventDefault();
      if (el.contains(e.target)) {
        return;
      }
      document.removeEventListener('click', onDocClick);
      hideSubMenu(el);
    });
  }

  function hideSubMenu(el) {
    el.classList.remove('js-drp-open');
  }

});


//---- b. Responsive Only for Mobile ----//

if ($(window).width() <= 768) {


  //--======== Dropdown Mobile
  $(document).ready(function () {

        [].slice.call(document.querySelectorAll('.m-nv_li .res_sub-nav_pop')).forEach(function (el) {
            el.addEventListener('click', onClick, false);
        });

        function onClick(e) {
            //e.preventDefault();
            var el = this.parentNode;
            (el.classList.contains('res-bt_sub-nav') || el.classList.contains('srs_drp') || el.classList.contains('sub-nav_vis'))  ? hideSubMenu(el) : showSubMenu(el);
        }

        function showSubMenu(el) {
            document.body.classList.add('srs_drp');
            el.classList.add('res-bt_sub-nav');
            $('.sub-nav_hr-scr').addClass('sub-nav_vis');
            document.addEventListener('click', function onDocClick(e) {
                //e.preventDefault();
                if (el.contains(e.target)) {
                    return;
                }
                document.removeEventListener('click', onDocClick);
                hideSubMenu(el);
            });
        }

        function hideSubMenu(el) {
            document.body.classList.remove('srs_drp');
            el.classList.remove('res-bt_sub-nav');
            $('.sub-nav_hr-scr').removeClass('sub-nav_vis');
        }
    });


//  $('.res').click(function (e) {
//    e.preventDefault();
//    $("body").toggleClass("srs_drp", function () {
//      $(this).focus();
//    });
//  });






  //--======== Pinup toggle class
  $('.lvB-pin_ic-sm-wr').click(function(){
      $('.lvB-pin_ic-sm-wr').toggleClass(' lvB-pin_act');
  });
  
  
  
  //--======== Expand text main 1

  
$(document).ready(function(){
              $('.Art-exp_bt-dn').click(function(){
              let cont_hig = $(this).parents('.Art-exp_cn').find('.Art-exp_wr').innerHeight();
              $(this).parents('.Art-exp_cn').toggleClass('Art-exp_less');
              if($(this).parents('.Art-exp_cn').is('.Art-exp_less')){
                   $(this).parents('.Art-exp_cn').animate({'height':cont_hig + 70});
                    $('.Art-exp_bt-lk-tx').text('Show less article ')
              }else{
                     //$('.Art-exp_cn').removeAttr("style");
                      $(this).parents('.Art-exp_cn').animate({'height':'300px',  'padding-bottom':'0'});
                      $('.Art-exp_bt-lk-tx').text('Show full article ')
             } 
      });
});

}





//------====== 5. Sticky  ======------//
$(document).ready(function () {

	"use strict";


	
	//------ Sticky Navigation
        if ($(window).width() <= 1199) {
	$(function () {
		var sc_up = $(document).scrollTop();
		var header_height = $('.sticky').outerHeight();

		$(window).scroll(function () {
			var sc_dn = $(document).scrollTop();

			if (sc_dn > header_height) {
				$('.sticky').addClass('js-stuck-down');
			} else {
				$('.sticky').removeClass('js-stuck-down');
			}

			if (sc_dn > sc_up) {
				$('.sticky').removeClass('js-stuck-up');
			} else {
				$('.sticky').addClass('js-stuck-up');
			}

			sc_up = $(document).scrollTop();
		});
	});

}



	
	//------ Sticky Navigation
        if ($(window).width() <= 1199) {
	$(function () {
		var sc_up = $(document).scrollTop();
		var header_height = $('body').outerHeight();

		$(window).scroll(function () {
			var sc_dn = $(document).scrollTop();

			if (sc_dn > header_height) {
				$('body').addClass('js-mov-down');
			} else {
				$('body').removeClass('js-mov-down');
			}

			if (sc_dn > sc_up) {
				$('body').removeClass('js-mov-up');
			} else {
				$('body').addClass('js-mov-up');
			}

			sc_up = $(document).scrollTop();
		});
	});

}

	
	});




  //--======== Market Widget Tabs

(function () {
	function market_tab() {
		if ($("[mrkt2-tbDta]").length > 0) {
			var act_tab_fstLi = $('.Mrkt2_tb-ul > li:first-child').attr('mrkt2-tbDta');
			$('.Mrkt2_tb-lk').click(function (event) {
				/* end li active navigation */
				$(this).closest('.Mrkt2_tb-cn .Mrkt2_tb-ul').find('.Mrkt2_tb-lk').removeClass('Mrkt2_tb-act');
				let act_tab = $(this).addClass('Mrkt2_tb-act').attr('mrkt2-tbDta');
				$(this).closest('.Mrkt2_tb-cn').find('> .Mrkt2_tb-DtCn > .Mrkt2_tb-dta').removeClass('Mrkt2_tb-DtShow');
				$('.Mrkt2_tb-cn').find('[mrkt2-tbDta="' + act_tab + '"]').addClass('Mrkt2_tb-DtShow') // show tab
			});
		}
	}
	market_tab();
})();





  //--======== News Ticker


/**
 * carousel-ticker by Yuriy Berezovskiy
 * The MIT License (MIT)
 * Usage $('.carousel-ticker').LvbTkr();
 * Options:
 * - speed: integer
 * - delay: integer
 * - reverse: boolean
 *
 * More information visit http://likeclever1.github.io/carousel-ticker/
 */

"use strict";

(function($) {

    $.LvbTkr = function (el, settings) {
        this.settings = settings;
        this.itemsWidth = 0;
        this.timeout = null;
        this.$el = $(el);
        this.direction = -1;
        this.cloneCls = this.$el.attr("class") + '__clone';
        this.listCls = this.$el.attr("class") + "_ul";
        this.itemsCls = this.$el.attr("class") + "_li";
        this.wrapCls = this.$el.attr("class") + "__wrap";
        this.linkCls = this.$el.attr("class") + "__link";
        this.childsWidth = 0;
        this.initialize = false;
        this.cloneChildsWidth = 0;
        this.$parent = this.$el.parent();
        this.defaults = {
            speed: 1,
            delay: 30,
            reverse: false
        };

        this.touch = ('ontouchstart' in document.documentElement) ? true : false;
        // Events
        this.eventTypes = {
            mousedown: (!this.touch) ? "mousedown" : "touchstart",
            mousemove: (!this.touch) ? "mousemove" : "touchmove",
            mouseup: (!this.touch) ? "mouseup" : "touchend"
        }

        this.mousemove = false;

        this.init();
        this.resize();
    };

    $.LvbTkr.prototype = {
        init: function() {
            var self = this,
                $this = self.$el,
                $items = $this.find("." + self.itemsCls),
                $list = $this.find("." + self.listCls);

            self.options = $.extend({}, self.defaults, self.settings);
        
            if($this.children().hasClass('self.wrapCls')) return;

            self._calcItemsWidth();

            if(self.itemsWidth > self.$parent.width()) {
                self.direction = (self.options.reverse) ? 1 : -1;

                $items.each(function() {

                    self.initialize = true;

                    var $that = $(this),
                        clone;
                    
                    // if drag for a or img have tarouble, fix it
                    $this.on("dragstart", function(e) {
                         if (e.target.nodeName.toUpperCase() == "IMG" || e.target.nodeName.toUpperCase() == "A") {
                             return false;
                         }
                    });

                    if($that.hasClass(self.cloneCls)) return;
                        clone = $that.clone();
                        clone.addClass(self.cloneCls).appendTo($list);
                });
                $this.find("." + self.listCls).css({
                    'position': 'relative',
                    'left': 0,
                    'width': self.itemsWidth + self.cloneWidth
                }).wrap("<div class=" + self.wrapCls + "></div>");

                self.timeout = setInterval(function() {self._moveCarousel()}, self.options.delay);
                self._eventOver();
                self._eventOut();
                self._eventDragAndDrop();
            }
        },

        _calcItemsWidth: function() {
            var self = this,
                opt = self.options,
                $this = self.$el,
                items = $this.find("." + self.itemsCls);

            self.itemsWidth = 0;

            items.each(function() {
                var $this = $(this);
                if($this.hasClass(self.cloneCls)) return;
                        self.itemsWidth += $this.outerWidth(true);
            });

            self.cloneWidth = self.itemsWidth;
        },

        _moveCarousel: function() {
            var self = this,
                opt = self.options,
                $this = self.$el,
                $list = $this.find("." + self.listCls);

            $list.css("left", '+=' + self.direction*opt.speed);

            if(self.direction == -1) {
                if(Math.abs(parseInt($list.css("left"))) >= self.itemsWidth) {
                    $list.css("left", 0);

                }
            } else {
                if(parseInt($list.css("left")) >= 0) {
                    $list.css("left", -self.itemsWidth);
                }
            }
        },

        _eventOver: function() {
            var self = this,
                opt = self.options,
                $this = self.$el;

            $this.on("mouseover", function() {
                if(self.itemsWidth > self.$parent.width()) {
                    clearInterval(self.timeout);
                    self.timeout = false;
                }
            });
        },

        _eventOut: function() {
            var self = this,
                opt = self.options,
                $this = self.$el,
                $list = $this.find("." + self.listCls);

            $this.on("mouseleave", function() {
                if(self.mousemove) {
                    $list.off(self.eventTypes.mousemove);
                    $list.trigger(self.eventTypes.mouseup);
                }

                if(self.itemsWidth > self.$parent.width()) {
                    if(self.timeout) return;
                        self.timeout = setInterval(function() {self._moveCarousel()}, self.options.delay);
                }
            });
        },

        _eventDragAndDrop: function() {
            var self = this,
                opt = self.options,
                $this = self.$el,
                flag = false,
                $list = $this.find("." + self.listCls);

            $list.on(self.eventTypes.mousedown, function(e) {
                var start = e.clientX || event.touches[0].pageX,
                    startLeft = $list.css("left");
                $(e.target).off("click");
                flag = true;

                clearInterval(self.timeout);
                self.timeout = false;

                $list.on(self.eventTypes.mousemove, function(e) {
                    var offsetX = e.clientX || event.touches[0].pageX,
                        merg = start - offsetX; // fix for touch device
                    
                    self.direction = (merg >= 0) ? -1 : 1;
                    self.mousemove = true;

                    if(flag) {
                        if(parseFloat(startLeft) - merg >= 0) {
                            $list.css("left", "-=" + self.itemsWidth);
                            startLeft = -self.itemsWidth;
                            start = e.clientX || event.touches[0].pageX;
                        }

                        if(Math.abs(parseFloat(startLeft) - merg) >= self.itemsWidth) {
                            $list.css("left", 0);
                            startLeft = 0;
                            start = e.clientX || event.touches[0].pageX;
                        }

                        $list.css("left", parseFloat(startLeft) - merg + "px");
                    }

                });
            });
            
            $list.on(self.eventTypes.mouseup, function(e) {
                e.preventDefault();

                if($(e.target).attr("href") || $(e.target).parents().attr("href") && self.mousemove){
                    $(e.target).on("click", function(e) {
                        e.preventDefault();
                    });
                }

                flag = false;
                self.mousemove = false;
                $list.off(self.eventTypes.mousemove);
                
                if(self.timeout) clearInterval(self.timeout);
                
                if(self.touch) self.timeout = setInterval(function() {self._moveCarousel()}, self.options.delay);
            });
        },

        resize: function() {
            var self = this,
                opt = self.options,
                $this = self.$el;

            $(window).on('resize', function() {
                self._calcItemsWidth();
                if(self.$parent.width() < self.itemsWidth) {
                    if(!self.initialize) self.init();
                } else {
                    if(self.initialize) self._destructor();
                }
            });
        },

        _destructor: function() {
            var self = this,
                opt = self.options,
                $this = self.$el,
                $list = $this.find("." + self.listCls);

            $this.find("." + self.cloneCls).remove();

            if($this.find("." + self.wrapCls).length) {
                $list.unwrap();
                $list.css({'left': 'auto', 'position': 'static', 'width': 'auto'});
            }

            clearInterval(self.timeout);
            self.initialize = false;
            self.timeout = false;
        }
    };

    $.fn.LvbTkr = function(settings) {
        return this.each(function() {
            new $.LvbTkr(this, settings);
        });
    };

})(jQuery);







(function ($, undefined) {
    "use strict";
    
    $(".LvbTkr").LvbTkr({
        reverse: false
    });
})(jQuery);









  //--======== Expand text liveblog pinup

$(document).ready(function(){
              $('.lvB-pin_exp-bt-dn').click(function(){
              let cont_hig = $(this).parents('.js-lvB-pin_crd').find('.lvB-pin_rw').innerHeight();
              $(this).parents('.js-lvB-pin_crd').toggleClass('lvB-pin_less');
              if($(this).parents('.js-lvB-pin_crd').is('.lvB-pin_less')){
                   $(this).parents('.js-lvB-pin_crd').animate({'height':cont_hig + 55});
                    $(this).text('Show less')
              }else{
                     //$('.js-lvB-pin_crd').removeAttr("style");
                      $(this).parents('.js-lvB-pin_crd').animate({'height':'380px'});
                      $(this).text('Show More ')
             } 
      })
      
      
              // js for toggle collapse
              $('.Lvbg-crd_exp-bt-dn').click(function(){
              let cont_hig = $(this).parents('.js-Lvbg-crd-expn').find('.Lvbg-crd_rw').innerHeight();
              $(this).parents('.js-Lvbg-crd-expn').toggleClass('lvbg-crd_less');
              if($(this).parents('.js-Lvbg-crd-expn').is('.lvbg-crd_less')){
                   $(this).parents('.js-Lvbg-crd-expn').animate({'height':cont_hig+70});
                    $(this).text('Show less')
              }else{
                     //$('.js-Lvbg-crd-expn').removeAttr("style");
                      $(this).parents('.js-Lvbg-crd-expn').animate({'height':'380px'});
                      $(this).text('Show More')
             } 
        })
        
        
        
        
        
        function ourFun(){
                            $('body').removeClass('js-LvBg_SNP-btn');
                            setTimeout(function(){
                                   $('body').addClass('js-LvBg_SNP-btn');
                            }, 6000) 
                     
                    }
                           ourFun();   

              // show blog on click
              $('.LvBg_SNP-btn').click(function(){

                    ourFun();
                    $('.lvB-pin_crd').removeClass('cnt_hide');
                            $("html, body").animate({ 
                            scrollTop: 0 
                             }, "slow");
                             return false;
              })    
              
              
              
              
})













  //--======== bottom ad hide 200 scroll Scroll
     
$(window).scroll(function(){
	var win_hig =200;
        if($(window).scrollTop()>win_hig)
        {
               $("body").addClass("alpha");

        }
        else
        {
               $("body").removeClass("alpha");
        }
});




//---- Social Native ----//
$('.crd_shr').on('click', function () {
  if (navigator.share !== undefined) {
    navigator.share({
      title: "NDTV Sports",
      url: "https://ndtv.com"
    });
  }
})

//---- Social Native ----//
$('.SSR_btn-lnk').on('click', function () {
  if (navigator.share !== undefined) {
    navigator.share({
      title: "NDTV Sports",
      url: "https://ndtv.com"
    });
  }
})


//---- Social Native ----//

        if ($(window).width() >= 768) {
$('.lvB-SS_btn-lnk').on('click', function () {
  if (navigator.share !== undefined) {
    navigator.share({
      title: "NDTV Sports",
      url: "https://ndtv.com"
    });
  }
})
 };

//------====== 4. Page Refresh Responsive  ======------//
//$(window).resize(function() {
//  var descTop = $('html').width()
//if (descTop < 826){
//       window.location.reload();
//}
//if (descTop > 826){
//       window.location.reload();
//}
//});


//------====== 4. Inview  ======------//
function logParameters(elPosTop, elHeight, inView, windowHeight) {
  console.log(`IN VIEW?: ${inView}`)
}

const els = document.querySelectorAll('.inview_ani, .inview')
const buffer = window.innerHeight / 7

function getElPosTop(el) {
  return el.getBoundingClientRect().top
}

function getElHeight(el) {
  return el.offsetHeight
}

function isInView(elPosTop, windowHeight, elHeight) {
  if (elPosTop < windowHeight - buffer) {
    return true
  }
  return false
}

window.addEventListener('resize', function () {
  for (let i = 0; i < els.length; i++) {
    if (
      isInView(
        getElPosTop(els[i]),
        window.innerHeight,
        getElHeight(els[i])
      )
    ) {
      els[i].classList.add('inview')
      els[i].classList.remove('inview_fade')
    } else {
      els[i].classList.remove('inview')
      els[i].classList.add('inview_fade')
    }
  }
})

window.addEventListener('scroll', function () {
  for (let i = 0; i < els.length; i++) {
    if (
      isInView(
        getElPosTop(els[i]),
        window.innerHeight,
        getElHeight(els[i])
      )
    ) {
      els[i].classList.add('inview')
      els[i].classList.remove('inview_fade')
    } else {
      els[i].classList.remove('inview')
      els[i].classList.add('inview_fade')
    }
  }
});
//------ scroll 1px ------//
// window.scrollTo(window.scrollX, window.scrollY + 1);


//------====== 5. LAZY LOAD  ======------//
! function (t, e) {
  "use strict";


  $(function () {
    function r(r, a, i, u, l) {
      function f() {
        L = t.devicePixelRatio > 1, i = c(i), a.delay >= 0 && setTimeout(function () {
          s(!0)
        }, a.delay), (a.delay < 0 || a.combined) && (u.e = v(a.throttle, function (t) {
          "resize" === t.type && (w = B = -1), s(t.all)
        }), u.a = function (t) {
          t = c(t), i.push.apply(i, t)
        }, u.g = function () {
          return i = n(i).filter(function () {
            return !n(this).data(a.loadedName)
          })
        }, u.f = function (t) {
          for (var e = 0; e < t.length; e++) {
            var r = i.filter(function () {
              return this === t[e]
            });
            r.length && s(!1, r)
          }
        }, s(), n(a.appendScroll).on("scroll." + l + " resize." + l, u.e))
      }

      function c(t) {
        var i = a.defaultImage,
          o = a.placeholder,
          u = a.imageBase,
          l = a.srcsetAttribute,
          f = a.loaderAttribute,
          c = a._f || {};
        t = n(t).filter(function () {
          var t = n(this),
            r = m(this);
          return !t.data(a.handledName) && (t.attr(a.attribute) || t.attr(l) || t.attr(f) || c[r] !== e)
        }).data("plugin_" + a.name, r);
        for (var s = 0, d = t.length; s < d; s++) {
          var A = n(t[s]),
            g = m(t[s]),
            h = A.attr(a.imageBaseAttribute) || u;
          g === N && h && A.attr(l) && A.attr(l, b(A.attr(l), h)), c[g] === e || A.attr(f) || A.attr(f, c[g]), g === N && i && !A.attr(E) ? A.attr(E, i) : g === N || !o || A.css(O) && "none" !== A.css(O) || A.css(O, "url('" + o + "')")
        }
        return t
      }

      function s(t, e) {
        if (!i.length)
          return void(a.autoDestroy && r.destroy());
        for (var o = e || i, u = !1, l = a.imageBase || "", f = a.srcsetAttribute, c = a.handledName, s = 0; s < o.length; s++)
          if (t || e || A(o[s])) {
            var g = n(o[s]),
              h = m(o[s]),
              b = g.attr(a.attribute),
              v = g.attr(a.imageBaseAttribute) || l,
              p = g.attr(a.loaderAttribute);
            g.data(c) || a.visibleOnly && !g.is(":visible") || !((b || g.attr(f)) && (h === N && (v + b !== g.attr(E) || g.attr(f) !== g.attr(F)) || h !== N && v + b !== g.css(O)) || p) || (u = !0, g.data(c, !0), d(g, h, v, p))
          }
        u && (i = n(i).filter(function () {
          return !n(this).data(c)
        }))
      }

      function d(t, e, r, i) {
        ++z;
        var o = function () {
          y("onError", t), p(), o = n.noop
        };
        y("beforeLoad", t);
        var u = a.attribute,
          l = a.srcsetAttribute,
          f = a.sizesAttribute,
          c = a.retinaAttribute,
          s = a.removeAttribute,
          d = a.loadedName,
          A = t.attr(c);
        if (i) {
          var g = function () {
            s && t.removeAttr(a.loaderAttribute), t.data(d, !0), y(T, t), setTimeout(p, 1), g = n.noop
          };
          t.off(I).one(I, o).one(D, g), y(i, t, function (e) {
            e ? (t.off(D), g()) : (t.off(I), o())
          }) || t.trigger(I)
        } else {
          var h = n(new Image);
          h.one(I, o).one(D, function () {
            t.hide(), e === N ? t.attr(C, h.attr(C)).attr(F, h.attr(F)).attr(E, h.attr(E)) : t.css(O, "url('" + h.attr(E) + "')"), t[a.effect](a.effectTime), s && (t.removeAttr(u + " " + l + " " + c + " " + a.imageBaseAttribute), f !== C && t.removeAttr(f)), t.data(d, !0), y(T, t), h.remove(), p()
          });
          var m = (L && A ? A : t.attr(u)) || "";
          h.attr(C, t.attr(f)).attr(F, t.attr(l)).attr(E, m ? r + m : null), h.complete && h.trigger(D)
        }
      }

      function A(t) {
        var e = t.getBoundingClientRect(),
          r = a.scrollDirection,
          n = a.threshold,
          i = h() + n > e.top && -n < e.bottom,
          o = g() + n > e.left && -n < e.right;
        return "vertical" === r ? i : "horizontal" === r ? o : i && o
      }

      function g() {
        return w >= 0 ? w : w = n(t).width()
      }

      function h() {
        return B >= 0 ? B : B = n(t).height()
      }

      function m(t) {
        return t.tagName.toLowerCase()
      }

      function b(t, e) {
        if (e) {
          var r = t.split(",");
          t = "";
          for (var a = 0, n = r.length; a < n; a++)
            t += e + r[a].trim() + (a !== n - 1 ? "," : "")
        }
        return t
      }

      function v(t, e) {
        var n, i = 0;
        return function (o, u) {
          function l() {
            i = +new Date, e.call(r, o)
          }
          var f = +new Date - i;
          n && clearTimeout(n), f > t || !a.enableThrottle || u ? l() : n = setTimeout(l, t - f)
        }
      }

      function p() {
        --z, i.length || z || y("onFinishedAll")
      }

      function y(t, e, n) {
        return !!(t = a[t]) && (t.apply(r, [].slice.call(arguments, 1)), !0)
      }
      var z = 0,
        w = -1,
        B = -1,
        L = !1,
        T = "afterLoad",
        D = "load",
        I = "error",
        N = "img",
        E = "src",
        F = "srcset",
        C = "sizes",
        O = "background-image";
      "event" === a.bind || o ? f() : n(t).on(D + "." + l, f)
    }

    function a(a, o) {
      var u = this,
        l = n.extend({}, u.config, o),
        f = {},
        c = l.name + "-" + ++i;
      return u.config = function (t, r) {
        return r === e ? l[t] : (l[t] = r, u)
      }, u.addItems = function (t) {
        return f.a && f.a("string" === n.type(t) ? n(t) : t), u
      }, u.getItems = function () {
        return f.g ? f.g() : {}
      }, u.update = function (t) {
        return f.e && f.e({}, !t), u
      }, u.force = function (t) {
        return f.f && f.f("string" === n.type(t) ? n(t) : t), u
      }, u.loadAll = function () {
        return f.e && f.e({
          all: !0
        }, !0), u
      }, u.destroy = function () {
        return n(l.appendScroll).off("." + c, f.e), n(t).off("." + c), f = {}, e
      }, r(u, l, a, f, c), l.chainable ? a : u
    }
    var n = t.jQuery || t.Zepto,
      i = 0,
      o = !1;
    n.fn.Lazy = n.fn.lz_img = function (t) {
      return new a(this, t)
    }, n.Lazy = n.lz_img = function (t, r, i) {
      if (n.isFunction(r) && (i = r, r = []), n.isFunction(i)) {
        t = n.isArray(t) ? t : [t], r = n.isArray(r) ? r : [r];
        for (var o = a.prototype.config, u = o._f || (o._f = {}), l = 0, f = t.length; l < f; l++)
          (o[t[l]] === e || n.isFunction(o[t[l]])) && (o[t[l]] = i);
        for (var c = 0, s = r.length; c < s; c++)
          u[r[c]] = t[0]
      }
    }, a.prototype.config = {
      name: "lz_img",
      chainable: !0,
      autoDestroy: !0,
      bind: "load",
      threshold: 500,
      visibleOnly: !1,
      appendScroll: t,
      scrollDirection: "both",
      imageBase: null,
      defaultImage: "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==",
      placeholder: null,
      delay: -1,
      combined: !1,
      attribute: "data-src",
      srcsetAttribute: "data-srcset",
      sizesAttribute: "data-sizes",
      retinaAttribute: "data-retina",
      loaderAttribute: "data-loader",
      imageBaseAttribute: "data-imagebase",
      removeAttribute: !0,
      handledName: "handled",
      loadedName: "loaded",
      effect: "show",
      effectTime: 0,
      enableThrottle: !0,
      throttle: 250,
      beforeLoad: e,
      afterLoad: e,
      onError: e,
      onFinishedAll: e
    }, n(t).on("load", function () {
      o = !0
    })
    $('.lz_img').lz_img({
      beforeLoad: function (element) {
        console.log('image "' + stripTime(element.data('src')) + '" is about to be loaded');
      },
    });

  });

  function stripTime(a) {}


}(window);


//------====== 6. Story Font Size  ======------//

$('.fts_ft-sm').click(function () {
  $('body').addClass("fts_ft-sm");
  $('body').removeClass("fts_ft-md");
  $('body').removeClass("fts_ft-lg");

});
$('.fts_ft-md').click(function () {
  $('body').addClass("fts_ft-md");
  $('body').removeClass("fts_ft-sm");
  $('body').removeClass("fts_ft-lg");

});
$('.fts_ft-lg').click(function () {
  $('body').addClass("fts_ft-lg");
  $('body').removeClass("fts_ft-sm");
  $('body').removeClass("fts_ft-md");

});
$('.fts_focus').click(function () {
  $('body').toggleClass("fts_focus");

});


//------====== 7. Image Loading Transition  ======------//

$('.img_trn').each(function (i) {

  var childrenSpan = $(this).children('span').length;

  $(this).addClass('childrenSpan-' + childrenSpan);

  if ($(window).scrollTop() + $(window).height() > $(this).offset().top + $(this).outerHeight()) {
    $(this).addClass('img_trn-in');
  }

});

$(window).scroll(function () {
  $('.img_trn').each(function (i) {
    if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
      $(this).addClass('img_trn-in');
    }
  });

});


//------====== 8. Setting Day & Night  ======------//

$('.day_night-wrp, .fts_drp-drk').click(function () {
  $('body').toggleClass("day_night");
  $('.day_Night input').is(':checked');
});
$('.day_Night input').change(function () {
  $('body').toggleClass('day_night', $(this).is(':checked'))
});






//--======== 10. Notification toggle button ========--//

$('.scr_swt-inp').click(function () {
    var swtToggle = $(this).parent('.scr_swt-tgl');
    if ($(swtToggle).find('input.scr_swt-inp').is(':checked')) {
      $(swtToggle).addClass('js-scr_swt-act');
    } else {
      $(swtToggle).removeClass('js-scr_swt-act');
    }
  })
  
  
  //-- Match Notification toggle --//
  $('.MtcNoti_TogBt-inp').click(function () {
    var swtToggle = $(this).parent('.MtcNoti_TogBt');
    if ($(swtToggle).find('input.MtcNoti_TogBt-inp').is(':checked')) {
      $(swtToggle).addClass('js-MtcNoti_TogBt-act');
      $('.MtcNoti_TogBt').click(function(e){$(this).parent().addClass('MtcNoti_opn');});
    } else {
      $(swtToggle).removeClass('js-MtcNoti_TogBt-act');
      $('.MtcNoti_TogBt').click(function(e){$(this).parent().removeClass('MtcNoti_opn');});
    }
  })




//------====== 11. Comments Slidein ======------//
$(".cmt-ac").click(function () {
  $("body").addClass("js-op-cmt");
  setTimeout(function () {
    $('.nav-trigger').removeClass('js-nav-open');
  }, 3000);


  //--- drop animation
  var pos = $(this).offset();
  $(".drp-wrp").css({
    top: pos.top + "px",
    right: 0 + "px"
  });
  $(".cmt-cnt").fadeIn(0);
  $(".ovl").fadeIn(0).addClass("js-ovl");
});

$(".ovl, .cls-btn").click(function () {
  $("body").removeClass("js-op-cmt");
  $(".cmt-cnt").fadeIn(0).delay(1000).fadeOut(0);
  $(".ovl").fadeIn(0).removeClass("js-ovl").delay(100).fadeOut(0);
});


$(window).scroll(function () {
  if ($(this).scrollTop() > 400) {
    $('.cmt-ac').fadeIn().addClass("cmt-dn");
  } else {
    $('.cmt-ac').removeClass("cmt-dn");
  }
});


//------====== 12. Trigger Class ======------//
$('.trigger').on('click', function () {

  var target = $(this).data('trigger');
  var toggleClass = $(this).data('class');

  $(target).toggleClass(toggleClass);
});


//------====== 14. Back to top ======------//

// browser window scroll (in pixels) after which the "back to top" link is shown
var offset = 60,
  //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
  offset_opacity = 900,
  //duration of the top scrolling animation (in ms)
  scroll_top_duration = 600,
  //grab the "back to top" link
  $back_to_top = $('.back-to-top');

//hide or show the "back to top" link
$(window).scroll(function () {
  ($(this).scrollTop() > offset) ? $back_to_top.addClass('js-back-to-top'): $back_to_top.removeClass('js-bkt-visible js-bkt-out');
  if ($(this).scrollTop() > offset_opacity) {
    $back_to_top.addClass('js-bkt-out');
  }
});

//------ Back to top Button
$(".back-to-top, .fltr_nav-src").click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 400);
});

// Initialize Sticky Sidebar
