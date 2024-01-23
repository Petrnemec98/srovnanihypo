/*
 *
 * FIREMNI AJTACI
 * Author: Martin Winkler
 * url: http://www.martinwinkler.cz/
 *
 */

var sliders = [];

/****************************************************************************************************************************************************************************************
DOCUMENT READY
****************************************************************************************************************************************************************************************/

jQuery(document).ready(function($) {

/**********************************************
VARIOUS
**********************************************/

	// Scrollování ke kotvě
	$('.to-anchor').scrollToAnchor();

	// Show/hide
	$('.sh-trig').toggler();

	// Scrollspy
	$('.scrollspy').scrollSpy();

	// Tabs
	$('.tabs').liteTabs();

	// Language switcher
	$('.lng > a').on('click', function() {
		var lng = $(this).closest('.lng');

		if (!lng.hasClass('active')) {
			lng.addClass('active');
		} else {
			lng.removeClass('active');
		}
	});

	// Wrap table - responsive hack
	$('table').wrap('<div class="table-wrap"></div>');

	// FAQ
	$('.accordion .item-head').on('click', function() {
		var item = $(this).closest('.item');

		if (!item.hasClass('active')) {
			item.addClass('active');
		} else {
			item.removeClass('active');
		}
	});

	// File input txt change
  $('.custom-file-input input[type="file"]').on('change', function(e){
    $(this).closest('.wpcf7-form-control-wrap').siblings('.txt').html(e.target.files[0].name);
  });

  // Services - show items
  $('.services .item').slice(6,100).addClass('hidden');

  $('[data-purpose="show-items"]').on('click', function() {

  	// Hide btn
  	$(this).addClass('hidden');

  	// Show all items
  	var item = $('.services .item.hidden');

  	item.each(function(index,el) {
  		var itemHidden = $(this);
  		setTimeout(function() {
  			itemHidden.removeClass('hidden').addClass('animate');
  		}, 100 * index);
  	});

  	return false;
  });

	// Fixed header
	$(window).on('load scroll', function() {
		var scrollTop = $(window).scrollTop();
		var winW = $(window).width();

		//if (scrollTop > 210 && winW > 991) {
		if (scrollTop > 230) {
			$('.header').addClass('fixed');
			$('body').addClass('header-fixed');
		} else {
			$('.header').removeClass('fixed');
			$('body').removeClass('header-fixed');
		}
	});

	// Rollable footer items
	$('.foot-item .head').on('click', function() {
		var item = $(this).closest('.foot-item');

		if (!item.hasClass('active')) {
			item.addClass('active');
		} else {
			item.removeClass('active');
		}
	});

	// Header dropdown
	$('.trig-sluzby, [data-dropdown="sluzby"]').on('mouseover', function() {
		var trig = $('.trig-sluzby');
		var nav = $('[data-dropdown="sluzby"]');

		trig.addClass('active');
		nav.addClass('active');
	});

	$('.trig-sluzby, [data-dropdown="sluzby"]').on('mouseout', function() {
		var trig = $('.trig-sluzby');
		var nav = $('[data-dropdown="sluzby"]');

		trig.removeClass('active');
		nav.removeClass('active');
	});

	// Clients - show more
	$('.clients').each(function() {
		var items = $(this).find('.item');
		var count = items.length;

		/*if (count > 12) {
			$(this).find('.item-list').append('<a href="javascript:void(0)" class="show-more">Zobrazit více</a>')
		}*/
	});

	$('body').on('click', '.clients .show-more', function() {
		$(this).closest('.clients').addClass('active');
	});

	/**********************************************
  FIX BANNER
  **********************************************/

	$(function() {
		var cookie = 'fixBanner';

		if (ReadCookie(cookie) != 'true') {
			$('.fix-banner').addClass('active');

			$('.fix-banner a').on('click', function() {
				SetCookie(cookie, 'true', 365);
			});
		}

		$('.fix-banner .close').on('click', function() {
			$('.fix-banner').removeClass('active');
		});
	});

	/**********************************************
  FORM STYLING
  **********************************************/

  var checkbox = $('form.std input[type="checkbox"]');

  checkbox.each(function(index, element) {
    var wrapper = $(element).wrap('<div class="checker"></div>');

    $(element).on('change tickle', function() {
    	wrapper = $(this).closest('.checker');

      if (element.checked) {
        wrapper.addClass('active');
      } else {
        wrapper.removeClass('active');
      }
    });
  }).trigger('tickle');

	/**********************************************
	MODAL BOX
	**********************************************/

  $(function() {
    var trigger = $('.modal-trigger');
    var close = $('.modal-close');

    trigger.each(function(index, element) {
      var id = element.hash;
      var modal = $(id);

      $(element).on('click', function() {
        modal.addClass('active');
        $('body').addClass('modal-opened');
      });
    });

    // Close link
    close.on('click', function() {
      $('.modal').removeClass('active');
      $('body').removeClass('modal-opened');
    });

    // Overlay click
    $(window).on('click', function(e) {
      $('.modal-box-wrap').each(function(index, element) {
        if (e.target === element) {
          $('.modal').removeClass('active');
          $('body').removeClass('modal-opened');
        }
      });
    });

    // Escape close
    $(window).on('keyup', function(e) {
      if (e.keyCode === 27) {
        $('.modal').removeClass('active');
        $('body').removeClass('modal-opened');
      }
    });
  });

	/**********************************************
	AJAX FORM
	**********************************************/

	var ajaxContent = $("#form-ajax-content");
	var siteUrl = window.location.href;

	$('body').on('change','.form-ajax input, .form-ajax select', function(e) {
		var parameters = $(this).closest('form').serialize(); // Get form parameters
		var url = window.location.pathname + '?' + parameters;

		window.history.replaceState(null, null, url); // Change url

		if (!url) {
			return;
		}
		url = url + " #form-ajax-content > .inner";
		ajaxContent.addClass('loading').load(url, function() {
			ajaxContent.removeClass('loading');

			$(window).trigger('filterLoad');
		});
	});

	/**********************************************
	CONTACT FORM 7
	**********************************************/

	// Nascrolluje na chybovou hlášku
	document.addEventListener('wpcf7invalid', function(event) {
	  if (!$('.modal.active').length > 0) {
	  	$('html:not(:animated),body:not(:animated)').animate({ scrollTop: $('.wpcf7-form').offset().top - 20 - $('.header').height() }, 1000 );
		}
	}, false );

  // Nascrolluje na success hlášku
  document.addEventListener('wpcf7mailsent', function(event) {
	  if (!$('.modal.active').length > 0) {
	  	$('html:not(:animated),body:not(:animated)').animate({ scrollTop: $('.wpcf7-form').offset().top - 20 - $('.header').height() }, 1000 );
		}
	}, false );

  // CF7 redirect
	document.addEventListener('wpcf7mailsent', function(event) {
	  location = 'https://www.firemniajtaci.cz/zprava-byla-uspesne-odeslana/';
	}, false );

	/**********************************************
	FIXER
	**********************************************/

	$(window).on('load scroll', function() {
		if ($('.fixer').length) {
			$('.fixer-start').each(function() {
				var scrollTop = $(window).scrollTop();
				var winH = $(window).height();
				var fixElWrapper = $(this);
				var fixEl = fixElWrapper.find('.fixer');
				var offset = 0;
				if (fixEl.attr('data-offset')) {
					var offset = fixEl.data('offset');
				}

				var fixElWrapperTop = fixElWrapper.offset().top + offset;

				var fixElHeight = fixEl.height();
				var end = $('.fixer-end').height() + $('.fixer-end').offset().top - fixEl.height();

				// Top panel
				if (scrollTop > fixElWrapperTop) {
					fixEl.addClass('fixed');

					// Hide in the end
					if (scrollTop > end) {
						fixEl.fadeOut();
					}
					else {
						fixEl.fadeIn();
					}
				}
				else {
					fixEl.removeClass('fixed');
				}
			});
		}
	});

	/**********************************************
	MOBILE NAV
	**********************************************/

	$(function() {
		var body              = $('body');
	  var mobileNav         = $('.mobile-nav');
	  var mobileNavOverlay  = $('.mobile-nav-overlay');

	  function showNav() {
	    body.addClass('mobile-nav-opened');
	  }

	  function hideNav() {
	    body.removeClass('mobile-nav-opened');
	  }

	  // Navigation button
	  $('.nav-btn').on('click', function(e) {
	    if (!body.hasClass('mobile-nav-opened')) {
	      showNav();
	    }
	    else {
	      hideNav();
	    }
	    return false;
	  });

	  // Mobile nav overlay close
	  $('.mobile-nav-overlay').on('click', function(e) {
	    hideNav();
	  });

	  $('.mobile-nav li a').each(function(e) {
	    if ($(this).siblings('ul').length > 0) {
	      $(this).append('<span class="more"></span>');
	    }
	  });

	  // Mobile nav accordion
	  $('.mobile-nav li .more').on('click', function(e) {
	    var link = $(this).closest('a');
	    var ul = link.siblings('ul');

	    if (ul.length > 0) {
	      if (!ul.hasClass('active')) {
	        link.addClass('active');
	        ul.addClass('active');
	      } else {
	        link.removeClass('active');
	        ul.removeClass('active');
	      }
	      return false;
	    }
	  });
	});

	/**********************************************
	RESIZE END / SCROLL END
	**********************************************/

	var resizeEnd;
	$(window).on('resize', function() {
		clearTimeout(resizeEnd);
		resizeEnd = setTimeout(function() {
			$(window).trigger('resizeEnd');
		}, 100);
	});

	var scrollEnd;
	$(window).on('scroll', function() {
		clearTimeout(scrollEnd);
		scrollEnd = setTimeout(function() {
			$(window).trigger('scrollEnd');
		}, 100);
	});

	/**********************************************
  SIMPLE LIGHTBOX
  **********************************************/

  // Simple lightbox
	var lightbox = new SimpleLightbox({
	  elements: ".fancybox, a[href$='.jpg'], a[href$='.jpeg'], a[href$='.webp'], a[href$='.png'], a[href$='.gif'], [data-fancybox='gallery']"
	});

	var videolightbox = new SimpleLightbox({
	  elements: "[data-purpose='play']"
	});

	// Swipe
	document.addEventListener('swiped-left', function(e) {
	  if ($('html.slbActive').length > 0) {
	    lightbox.next();
	  }
	});

	document.addEventListener('swiped-right', function(e) {
	  if ($('html.slbActive').length > 0) {
	    lightbox.prev();
	  }
	});

	/**********************************************
	GLIDE
	**********************************************/

	// Case slider
  if (document.querySelector('.case-slider')) {
    var caseSlider = new Glide('.case-slider', {
      type: 'carousel',
      startAt: 0,
      perView: 2,
      //perSwipe: '|',
      //focusAt: 'center',
      animationDuration: 1000,
      gap: 30,
      swipeThreshold: true,
      dragThreshold: false,
      autoplay: 0,
      breakpoints: {
        991: {
          perView: 1
        },
        767: {
          perView: 2
        },
        575: {
          perView: 1
        }
      }
    });

    var nextButton = document.querySelector('.case-studies .next');
    var prevButton = document.querySelector('.case-studies .prev');

    nextButton.addEventListener('click', function (event) {
      event.preventDefault();

      caseSlider.go('>');
    });

    prevButton.addEventListener('click', function (event) {
      event.preventDefault();

      caseSlider.go('<');
    });

    caseSlider.mount();
  }

  // Offer slider
  if (document.querySelector('.offer-slider')) {
    var offerSlider = new Glide('.offer-slider', {
      type: 'carousel',
      startAt: 0,
      perView: 3,
      //perSwipe: '|',
      //focusAt: 'center',
      animationDuration: 1000,
      gap: 40,
      swipeThreshold: true,
      dragThreshold: false,
      autoplay: 0,
      breakpoints: {
        991: {
          perView: 2,
          gap: 30
        },
        767: {
          perView: 2,
          gap: 20
        },
        575: {
          perView: 1
        }
      }
    });

    var nextButton = document.querySelector('.offer .next');
    var prevButton = document.querySelector('.offer .prev');

    nextButton.addEventListener('click', function (event) {
      event.preventDefault();

      offerSlider.go('>');
    });

    prevButton.addEventListener('click', function (event) {
      event.preventDefault();

      offerSlider.go('<');
    });

    offerSlider.mount();

    // Hide nav
	  $(window).on('load resize', function() {
	  	var perView = offerSlider.settings.perView;
	  	var currentSlides = $('.offer-slider .panel:not(.glide__slide--clone)').length;

	  	//console.log(perView);
	  	//console.log(currentSlides);

	  	if (perView >= currentSlides) {
	  		$('.offer').addClass('hide-nav');
	  	} else {
	  		$('.offer').removeClass('hide-nav');
	  	}
	  });
  }

	// Item slider
	if ($('.item-slider').length > 0) {

		$('.item-slider').each(function() {
			var el = $(this);
			var id = el.attr('id');
			sliders[id] = [];

			el.attr('data-slides') ? sliders[id]['slideNum'] = el.attr('data-slides') : sliders[id]['slideNum'] = 1;
			el.attr('data-slides-desktop') ? sliders[id]['slideNumDesktop'] = el.attr('data-slides-desktop') : sliders[id]['slideNumDesktop'] = sliders[id]['slideNum'];
			el.attr('data-slides-tablet') ? sliders[id]['slideNumTablet'] = el.attr('data-slides-tablet') : sliders[id]['slideNumTablet'] = sliders[id]['slideNumDesktop'];
			el.attr('data-slides-phablet') ? sliders[id]['slideNumPhablet'] = el.attr('data-slides-phablet') : sliders[id]['slideNumPhablet'] = sliders[id]['slideNumTablet'];
			el.attr('data-slides-mobile') ? sliders[id]['slideNumMobile'] = el.attr('data-slides-mobile') : sliders[id]['slideNumMobile'] = sliders[id]['slideNumPhablet'];

			el.attr('data-focus') ? sliders[id]['slideFocus'] = el.attr('data-focus') : sliders[id]['slideFocus'] = 'center';
			el.attr('data-focus-desktop') ? sliders[id]['slideFocusDesktop'] = el.attr('data-focus-desktop') : sliders[id]['slideFocusDesktop'] = sliders[id]['slideFocus'];
			el.attr('data-focus-tablet') ? sliders[id]['slideFocusTablet'] = el.attr('data-focus-tablet') : sliders[id]['slideFocusTablet'] = sliders[id]['slideFocusDesktop'];
			el.attr('data-focus-phablet') ? sliders[id]['slideFocusPhablet'] = el.attr('data-focus-phablet') : sliders[id]['slideFocusPhablet'] = sliders[id]['slideFocusTablet'];
			el.attr('data-focus-mobile') ? sliders[id]['slideFocusMobile'] = el.attr('data-focus-mobile') : sliders[id]['slideFocusMobile'] = sliders[id]['slideFocusPhablet'];

			el.attr('data-gap') ? sliders[id]['slideGap'] = el.attr('data-gap') : sliders[id]['slideGap'] = 0;

			sliders[id] = new Glide('#' + id, {
		    type: 'carousel',
		    startAt: 0,
		    perView: sliders[id]['slideNum'],
		    focusAt: sliders[id]['slideFocus'],
		    gap: sliders[id]['slideGap'],
		    swipeThreshold: true,
		    dragThreshold: false,
		    breakpoints: {
		      1199: {
		        perView: sliders[id]['slideNumDesktop'],
		        focusAt: sliders[id]['slideFocusDesktop'],
		      },
		      991: {
		        perView: sliders[id]['slideNumTablet'],
		        focusAt: sliders[id]['slideFocusTablet']
		      },
		      767: {
		        perView: sliders[id]['slideNumPhablet'],
		        focusAt: sliders[id]['slideFocusPhablet']
		      },
		      575: {
		      	perView: sliders[id]['slideNumMobile'],
		        focusAt: sliders[id]['slideFocusMobile']
		      }
		    }
		  }).mount()
		});
	}

});

/****************************************************************************************************************************************************************************************
FUNCTIONS
****************************************************************************************************************************************************************************************/

// Scrollspy
(function($) {
	$.fn.scrollSpy = function (settings) {
		settings = jQuery.extend({
			showSpeed: 100,
			callback: function() {}
		}, settings);

		var topMenu = $(this);

		if (topMenu.length) {
			// Cache selectors
			var lastId,
				topMenuHeight = topMenu.outerHeight(),

				// All list items
				menuItems = topMenu.find("a"),

				// Anchors corresponding to menu items
				scrollItems = menuItems.map(function(){
					var item = $( $(this).attr("href") );
					if (item.length) { return item; }
				});

			// Bind to scroll
			$(window).on('load scroll', function(){
				// Get container scroll position
				var fromTop = $(this).scrollTop() + topMenuHeight + 50;

				// Get id of current scroll item
				var cur = scrollItems.map(function(){
					if ($(this).offset().top < fromTop)
					return this;
				});
				// Get the id of the current element
				cur = cur[cur.length-1];
				var id = cur && cur.length ? cur[0].id : "";

				if (lastId !== id) {
					lastId = id;
					// Set/remove active class
					menuItems
					.parent().removeClass("active")
					.end().filter("[href*=\\#" + id + "]").parent().addClass("active");
				}
			});
		}
	}
})(jQuery);

// Univerzální show/hide
(function($) {
	$.fn.toggler = function (settings) {

		settings = jQuery.extend({
			showSpeed: 100,
			hideSpeed: 100,
			hideTrigger: false,
			slide: false,
			scrollToContent: false,
			offsetScroll: 0,
			hideOnDocumentClick: false,
			documentClickElement: '',
			hideOnEscape: false
		}, settings);

		$(this).each(function(index,value) {

			var trigger = $(this);
			var content = $('#' + trigger.data('content'));

			// Radio nebo checkbox
			if ( trigger.is(':radio') || trigger.is(':checkbox') ) {
				var name = trigger.attr('name');

				$('[name=' + name + ']').on('change', function() {
					content.hide();
				});
				trigger.on('change', function() {
					if ( $(this).is(':checked') ) {
						content.fadeIn(settings.showSpeed);
					}
					else {
						content.hide();
					}
				});
				$(window).on('load',function() {
					if ( trigger.is(':checked') ) {
						content.fadeIn(settings.showSpeed);
					}
				});
			}
			// Standardní element
			else {
				function scrollToContent() {
					var offset = 0;
					if ( settings.offsetScroll ) {
						offset = settings.offsetScroll
					}
					$("html:not(:animated),body:not(:animated)").animate({ scrollTop: $(content).offset().top + offset }, 500);
				}

				function scrollToTrigger() {
					var offset = 0;
					if ( settings.offsetScroll ) {
						offset = settings.offsetScroll + 200
					}
					$("html:not(:animated),body:not(:animated)").animate({ scrollTop: $('[data-content=' + trigger.attr('data-content') + ']').offset().top + offset }, 500);
				}

				trigger.on('click',function(event) {
					if ( content.is(':hidden') ) {
						if ( settings.slide ) {
							content.slideDown(settings.showSpeed,function() {
								if ( settings.scrollToContent ) {
									scrollToContent();
								};
							});
						}
						else {
							content.fadeIn(settings.showSpeed,function() {
								if ( settings.scrollToContent ) {
									scrollToContent();
								};
							});
						}

						$(this).addClass('active').find('.text').text( $(this).attr('data-less') );

						if ( settings.hideTrigger ) {
							trigger.hide();
						}
					}
					else {
						if ( settings.slide ) {
							content.slideUp(settings.hideSpeed,function() {
								if ( settings.scrollToContent ) {
									scrollToTrigger();
								};
							});
						}
						else {
							content.fadeOut(settings.hideSpeed,function() {
								if ( settings.scrollToContent ) {
									scrollToTrigger();
								};
							});
						}
						$(this).removeClass('active').find('.text').text( $(this).attr('data-more') );

						if ( settings.hideTrigger ) {
							$('[data-content=' + trigger.attr('data-content') + ']').fadeIn(settings.hideSpeed);
						}
					}
					event.preventDefault();
					//return false;
				});
			}
			// Hide on document click
			if ( settings.hideOnDocumentClick || trigger.attr('data-hideonclick') == 'true' ) {
				$(document).on('click', function(e) {
					if ( (! $(settings.documentClickElement).is(e.target) && $(settings.documentClickElement).has(e.target).length === 0) && ( ! trigger.is(e.target) && trigger.has(e.target).length === 0 ) )  {
						content.fadeOut();
						trigger.removeClass('active');
					}
				});
			}
			// Escape button
			if ( settings.hideOnEscape ) {
				$(document).keyup(function(e){
					if (e.keyCode === 27) {
						content.fadeOut();
						trigger.removeClass('active');
					}
				});
			}
		});
	}
})(jQuery);

// Plynulý scroll ke kotvě
(function($) {
	$.fn.scrollToAnchor = function(settings) {

		settings = jQuery.extend({
			speed : 750
		}, settings);

		return this.each(function(){
			var caller = this
			$(caller).click(function (event) {
				event.preventDefault()
				var locationHref = window.location.href;
				var elementClick = $(caller).attr("href");

				var offset = 0;
				if ($('.header.fixed').length > 0) {
					offset = offset + $('.header.fixed').height();
				}
				if ($('.notification-bar').length > 0) {
					offset = offset + $('.notification-bar').height();
				}

				var destination = $(elementClick).offset().top - offset;

				$("html:not(:animated),body:not(:animated)").animate({
						scrollTop: destination
					}, {
				  	duration: settings.speed,
				  	//easing: "easeInOutQuint",
				  	complete: function() {
							history.pushState(null, null, elementClick);

							var offset = 0;
							if ($('.header.fixed').length > 0) {
								offset = offset + $('.header.fixed').height();
							}
							if ($('.notification-bar').length > 0) {
								offset = offset + $('.notification-bar').height();
							}

							$("html:not(:animated),body:not(:animated)").animate({
									scrollTop: $(elementClick).offset().top - offset
								}, {
									duration: settings.speed
							});
						}
					}
				);
				return false;
			});
		});
	}
})(jQuery);

// Lite tabs
(function($) {
	$.fn.liteTabs = function(options) {
    return this.each(function() {
  		var defaults = {
  			fadeIn 			: false,
  			height 			: 'auto',
  			hideHash 		: false,
  			hashTag 		: true,
  			selectedTab : 1,
  			width 			: 500
  		};

  		// Merge defaults with options in new settings object
  		var settings = $.extend({}, defaults, options);

  		// Define key variables
  		var $this = $(this);
  		var $ul = $this.find('.tab-nav ul');
  		var $tab = $ul.find('a');
  		var $div = $this.find('.tab-content').first().find('.tab');

			// Tab click
			$tab.click(function(e) {
				var hash = this.hash;
				var id = hash.replace('#','');
				var selectedPanel = $div.filter('[id="' + id + '"]');
				var filterHash = $div.removeClass('selected').filter('[id="' + id + '"]');

				// defaults: add selected class to tab
				$tab.removeClass('selected').filter(this).addClass('selected');

				// Rodičovská záložka zůstane otevřená při kliku na vnořené záložky v záložce
				var parentId = $tab.filter(this).closest('.tab').attr('id');

				$('.tab[id="' + parentId + '"]').addClass('selected');
				$('.tab-nav a[href="' + parentId + '"]').addClass('selected');

				if ($tab.parents('.tabs').length > 1 ) {
					e.preventDefault();
				}

				// Show panel
				filterHash.addClass('selected');

				// Option: hide hash change
				if (settings.hideHash) {
					e.preventDefault();
				}

				return false;
			});

			// Option: set selected tab
			if (settings.selectedTab) {
			 	$tab.eq(settings.selectedTab - 1).addClass('selected');
			 	$div.eq(settings.selectedTab - 1).addClass('selected');
			}

			// If hash tag..
			var hash = window.location.hash.substring(1);
			$('[href="#' + hash + '"]').click();
    });
	};
})(jQuery);

// Exit intent
(function ($) {
	'use strict';

	var timer;

	function trackLeave(ev) {
		if (ev.clientY > 0) {
			return;
		}

		if (timer) {
			clearTimeout(timer);
		}

		if ($.exitIntent.settings.sensitivity <= 0) {
			$.event.trigger('exitintent');
			return;
		}

		timer = setTimeout(
			function() {
				timer = null;
				$.event.trigger('exitintent');
			}, $.exitIntent.settings.sensitivity);
	}

	function trackEnter() {
		if (timer) {
			clearTimeout(timer);
			timer = null;
		}
	}

	$.exitIntent = function(enable, options) {
		$.exitIntent.settings = $.extend($.exitIntent.settings, options);

		if (enable == 'enable') {
			$(window).mouseleave(trackLeave);
			$(window).mouseenter(trackEnter);
		} else if (enable == 'disable') {
			trackEnter(); // Turn off any outstanding timer
			$(window).unbind('mouseleave', trackLeave);
			$(window).unbind('mouseenter', trackEnter);
		} else {
			throw "Invalid parameter to jQuery.exitIntent -- should be 'enable'/'disable'";
		}
	}

	$.exitIntent.settings = {
		'sensitivity': 300
	};
})(jQuery);

// Cookies
function ReadCookie(name) {
  var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  return v ? v[2] : null;
}

function SetCookie(name, value, days) {
  var d = new Date;
  d.setTime(d.getTime() + 24*60*60*1000*days);
  document.cookie = name + "=" + value + ";path=/;expires=" + d.toGMTString();
}

function DeleteCookie(name) {
  setCookie(name, '', -1);
}