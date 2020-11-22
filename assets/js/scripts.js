'use strict'

$(function () {
	// Navbar
	let navbar = $('#topnav')

	$('.navbar-toggle').on('click', function () {
		$(this).toggleClass('open')
		$('#navigation').slideToggle(400)
	})

	document.querySelectorAll('.navigation-menu a[href^="#"]').forEach(function (anchor) {
		anchor.addEventListener('click', function (e) {
			e.preventDefault()

			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			})
		})
	})

	$(window).scroll(function () {
		let scroll = $(window).scrollTop()

		if (scroll >= 50) {
			navbar.addClass('nav-sticky')
		} else {
			navbar.removeClass('nav-sticky')
		}
	})

	// Header image change
	let images = ['graph.svg', 'key-value.svg', 'documents.svg'],
		slider = $('#img-slider'),
		index = 0,
		maxImages = images.length - 1
	setInterval(function () {
		let currentImage = images[index]
		index = (index === maxImages) ? 0 : ++index
		slider.fadeOut(500, function () {
			slider.attr('src', 'assets/img/' + currentImage)
			slider.fadeIn(500)
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