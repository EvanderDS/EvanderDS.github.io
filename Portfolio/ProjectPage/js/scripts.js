/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
   new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });
	
    document.getElementById("submitButton").addEventListener("click", function() {
        // Navigate to the contact page in the same tab
        window.location.href = "../index.html#contact";
    });
	
	
	/*Dice Animation*/
			const dice = document.getElementById("dice");
			const diceIcons = [
			  "bi-dice-1",
			  "bi-dice-1-fill",
			  "bi-dice-2",
			  "bi-dice-2-fill",
			  "bi-dice-3",
			  "bi-dice-3-fill",
			  "bi-dice-4",
			  "bi-dice-4-fill",
			  "bi-dice-5",
			  "bi-dice-5-fill",
			  "bi-dice-6",
			  "bi-dice-6-fill"
			];

			let isRolling = false;

			function changeDiceFace() {
			  dice.style.pointerEvents = "none";
			  isRolling = true;

			  const rollDuration = 2000; // 2 seconds
			  const randomNum = Math.floor(Math.random() * 12);
			  let currentSide = 0;
			  const rollInterval = 50; // Time between changing faces

			  function updateDiceFace() {
				dice.className = `bi ${diceIcons[currentSide]} fs-1 text-primary dice-icon ${
				  currentSide % 2 === 1 ? "rolling" : ""
				}`;
				currentSide++;

				if (currentSide < diceIcons.length) {
				  setTimeout(updateDiceFace, rollInterval);
				} else {
				  isRolling = false;
				  dice.style.pointerEvents = "auto";
				  dice.className = `bi ${diceIcons[randomNum]} fs-1 text-primary dice-icon`;
				}
			  }

			  updateDiceFace();
			}

			dice.addEventListener("click", changeDiceFace);
			dice.addEventListener("touchstart", function (event) {
			  event.preventDefault(); // Prevent the default touch behavior (e.g., scrolling)
			  changeDiceFace();
			});
		
		
		/*Book Animation*/
		  var bookIcon = document.getElementById('bookIcon');
		  var iconStates = ['bi-book', 'bi-book-half', 'bi-book-fill'];
		  var currentState = 0;
		  var isHovered = false;

		  function changeIconState() {
			if (isHovered) {
			  bookIcon.classList.remove(iconStates[currentState]);
			  currentState = (currentState + 1) % iconStates.length;
			  bookIcon.classList.add(iconStates[currentState]);

			  setTimeout(changeIconState, 350); // Change icon every 800 milliseconds (0.8 seconds)
			}
		  }

		  bookIcon.addEventListener('mouseover', function() {
			isHovered = true;
			changeIconState();
		  });

		  bookIcon.addEventListener('mouseout', function() {
			isHovered = false;
		  });
  
		/*Laptop Animation*/
		  var laptopIcon = document.getElementById('laptopIcon');

		  laptopIcon.addEventListener('mouseover', function() {
			laptopIcon.classList.remove('bi-laptop-fill');
			laptopIcon.classList.add('bi-laptop');
		  });

		  laptopIcon.addEventListener('mouseout', function() {
			laptopIcon.classList.remove('bi-laptop');
			laptopIcon.classList.add('bi-laptop-fill');
		  });
		  
		 /*People Animation*/ 
		  var peopleIcon = document.getElementById('peopleIcon');
		  var iconClasses = ['bi-people', 'bi-gender-ambiguous', 'bi-gender-female', 'bi-gender-male', 'bi-gender-trans'];
		  var currentIconIndex = 0;

		  function changeIcon() {
			currentIconIndex = (currentIconIndex + 1) % iconClasses.length;
			var newIconClass = iconClasses[currentIconIndex];

			// Remove all icon classes except the first one (bi-people)
			for (var i = 1; i < iconClasses.length; i++) {
			  peopleIcon.classList.remove(iconClasses[i]);
			}

			// Add the new icon class
			peopleIcon.classList.add(newIconClass);
		  }

		  peopleIcon.addEventListener('click', changeIcon);
		  peopleIcon.addEventListener('touchstart', changeIcon);  
		  
});
