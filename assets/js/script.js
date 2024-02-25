'use strict';

/**
 * AOS ANIMATION
 */

AOS.init();
/**
 * PRELOADER
 */

const preloader = document.querySelector("[data-preloader]");

window.addEventListener("DOMContentLoaded", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});


// add Event on multiple elment

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}


/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * navbar toggle
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

addEventOnElem(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
}

addEventOnElem(navLinks, "click", closeNavbar);



/**
 * header active when scroll down to 100px
 */


const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

const activeElem = function () {
  if (window.scrollY > 100) {
    console.log(window.scrollY)
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
}

addEventOnElem(window, "scroll", activeElem);


/**
 * HIDE NAVBAR ON SCROLL
 */

let lastScrollPos = 0;

window.addEventListener("scroll", function () {
  if (window.scrollY > 500) {
    const isScrollDown = lastScrollPos < window.scrollY;
    if (isScrollDown) {
      //console.log("Scroll Down");
      header.classList.add("hideHeader");
    } else {
      //console.log("Scroll Up");
      header.classList.remove("hideHeader");
    }
    lastScrollPos = window.scrollY;
  }
});




/**
 * ANIMATION ON SCROLL
 */
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    // Vérifier si l'élément est dans la vue actuelle de l'utilisateur
    if (elementTop < windowHeight - elementVisible && elementTop >= 0) {
      reveals[i].classList.add("activeAnimation");
    } else {
      reveals[i].classList.remove("activeAnimation");
    }
  }
}

// Appeler la fonction reveal lorsque l'utilisateur fait défiler la page
window.addEventListener("scroll", reveal);




/**
 * accordion toggle
 */

const accordionAction = document.querySelectorAll("[data-accordion-action]");

const toggleAccordion = function () { this.classList.toggle("active"); }

addEventOnElem(accordionAction, "click", toggleAccordion);



/**
 * CUSTOM CURSOR
 */

const cursor = document.querySelector("[data-cursor]");
const anchorElements = document.querySelectorAll("a");
const buttons = document.querySelectorAll("button");

// change cursorElement position based on cursor move
document.body.addEventListener("mousemove", function (event) {
  setTimeout(function () {
    cursor.style.top = `${event.clientY}px`;
    cursor.style.left = `${event.clientX}px`;
  }, 100);
});

// add cursor hoverd class
const hoverActive = function () { cursor.classList.add("hovered"); }

// remove cursor hovered class
const hoverDeactive = function () { cursor.classList.remove("hovered"); }

// add hover effect on cursor, when hover on any button or hyperlink
addEventOnElements(anchorElements, "mouseover", hoverActive);
addEventOnElements(anchorElements, "mouseout", hoverDeactive);
addEventOnElements(buttons, "mouseover", hoverActive);
addEventOnElements(buttons, "mouseout", hoverDeactive);

// add disabled class on cursorElement, when mouse out of body
document.body.addEventListener("mouseout", function () {
  cursor.classList.add("disabled");
});

// remove diabled class on cursorElement, when mouse in the body
document.body.addEventListener("mouseover", function () {
  cursor.classList.remove("disabled");
});




/**
 * TOGGLE PRICE
 */

// Sélectionnez tous les éléments ayant la classe switch-label
const labels = document.querySelectorAll('.switch-label');
// Sélectionnez tous les éléments li ayant la classe offre
const offres = document.querySelectorAll('li.offre');

// Ajoutez un gestionnaire d'événements de clic à chaque label
labels.forEach(label => {
  label.addEventListener('click', () => {
    // Récupérez la valeur de l'attribut data-price du label cliqué
    const priceClicked = label.getAttribute('data-price');

    // Parcourez chaque élément li avec la classe offre
    offres.forEach(offre => {
      // Récupérez la valeur de l'attribut data-price de l'élément li
      const priceLi = offre.getAttribute('data-price');

      // Vérifiez si l'attribut data-price de l'élément li est différent de celui du label cliqué
      if (priceLi !== priceClicked) {
        // Ajoutez la classe hidden à l'élément li
        offre.classList.add('hidden-price');
        // Supprimez la classe active-price de l'élément li
        offre.classList.remove('active-price');
      } else {
        // Sinon, retirez la classe hidden de l'élément li
        offre.classList.remove('hidden-price');
        // Ajoutez la classe active-price à l'élément li
        offre.classList.add('active-price');
      }
    });
  });
});


/**
 * CARROUSEL PORTFOLIO
 */

