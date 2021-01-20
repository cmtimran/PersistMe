$(document).ready(function(){
	
	// MOBAIL MENU
	$(".menu-btn").click(function(){
		$(".menu").slideToggle();
	})	
	
	
	// HUMBURGER MENU	
	const menuBtn = document.querySelector('.menu-btn');
	let menuOpen = false;
	menuBtn.addEventListener('click', () => {
	  if(!menuOpen) {
		menuBtn.classList.add('open');
		menuOpen = true;
	  } else {
		menuBtn.classList.remove('open');
		menuOpen = false;
	  }
	});
	
	
	// STICKY MENU
	$(window).on("scroll",function(){
		if($(window).scrollTop()) {
		  $('nav').addClass('sticky__menu');
		}

		else{
		  $('nav').removeClass('sticky__menu');
		}
	});
	

		// Back to top Button
		//Get the button
		var mybutton = document.getElementById("myBtn");

		// When the user scrolls down 20px from the top of the document, show the button
		window.onscroll = function() {
			scrollFunction();
		};

		function scrollFunction() {
			if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
				mybutton.style.opacity = "1";
			} else {
				mybutton.style.opacity = "0";
			}
		}
		mybutton.addEventListener("click", topFunction);
		// When the user clicks on the button, scroll to the top of the document
		function topFunction() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}

});