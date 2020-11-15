'use strict'

$(function () {
	// Menu
	$('.navbar-toggle').on('click', function (event) {
		$(this).toggleClass('open')
		$('#navigation').slideToggle(400)
	})

	// Menu
	$('.navigation-menu a').on('click', function (event) {
		var $anchor = $(this)
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - 0
		}, 1000, 'easeInOutExpo')
		event.preventDefault()
	})

	let navbar = $('#topnav')

	$(window).scroll(function () {
		let scroll = $(window).scrollTop()

		if (scroll >= 50) {
			//navbar.removeClass('navbar-transparent').addClass('navbar-filled')
			navbar.addClass('nav-sticky')
		} else {
			//navbar.removeClass("navbar-filled").addClass('navbar-transparent')
			navbar.removeClass('nav-sticky')
		}
	})

	// Header image change
	let images = ['graph.svg', 'key-value.svg', 'documents.svg'],
		index = 0,
		maxImages = images.length - 1
	let timer = setInterval(function () {
		let currentImage = images[index]
		index = (index === maxImages) ? 0 : ++index
		$('#img-slider').fadeOut(500, function () {
			$('#img-slider').attr('src', '/assets/img/' + currentImage)
			$('#img-slider').fadeIn(500)
		})
	}, 5000)

	// Back to top
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn()
		} else {
			$('.back-to-top').fadeOut()
		}
	})
	$('.back-to-top').click(function () {
		$('html, body').animate({scrollTop: 0}, 1000)
		return false
	})
})