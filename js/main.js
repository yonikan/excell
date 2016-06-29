$(document).ready(function() {

	// Ajax test -----------------------------------------------
	$("#ajax-btn").click(function(event){

		 var root = 'http://jsonplaceholder.typicode.com';

		 $.getJSON('../dist/test.json', function(jd) {
				$('#ajax-test').html('<p> Name: ' + jd.name + '</p>');
				$('#ajax-test').append('<p>Age : ' + jd.age+ '</p>');
				$('#ajax-test').append('<p> Sex: ' + jd.sex+ '</p>');
		 });

		//  $.ajax({
		//    url: root + '/posts/1',
		//    method: 'GET'
		//  }).then(function(data) {
		//    console.log(data);
		//  });

	});






	// background Strech -----------------------------------------------
	// $(".banner-image").backstretch('../dist/img/backs/back-blue1.jpg');

	// wow.js initialization
  var myWindow = $(window)
	if (myWindow.width()>530) {
		new WOW().init();
	};



	// modal lib initialization
  //demo 02
  $("#demo02").animatedModal({
      modalTarget:'modal-02',
      animatedIn:'zoomIn',
      animatedOut:'zoomOut',
      color:'rgba(49, 49, 49, 0.9)',
      // Callbacks
      beforeOpen: function() {
          console.log("The animation was called");
      },
      afterOpen: function() {
          console.log("The animation is completed");
      },
      beforeClose: function() {
          console.log("The animation was called");
      },
      afterClose: function() {
          console.log("The animation is completed");
      }
  });





	// Header Scroll
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 50) {
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	});

	// Fancybox
	$('.work-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	}
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});

});
