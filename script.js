// mobile navmenu toggler
var topNavresponsive = document.getElementById("mobile-menu");
var mobilemenuicon = document.getElementById("top-nav-icon");

function InitializemobileTopNav() {
  topNavresponsive.classList.toggle("active");
}

function openTopNav() {
  // Check if responsiveNav is not null before accessing its properties
  if (topNavresponsive) {
    // Toggle the 'active' class to show/hide the responsive menu
    topNavresponsive.classList.toggle("active");
  }
}

InitializemobileTopNav();
openTopNav();

// Trigger click on the "Featured Products" accordion button
var featuredProductsButton = document.querySelector('.accordion-btn[data-section="section1"]');
if (featuredProductsButton) {
  featuredProductsButton.click();
}

function toggleAccordion(sectionId, button) {
  // Hide all content sections
  const allSections = document.querySelectorAll('.accordion-content');
  allSections.forEach(section => {
    section.classList.remove('active');
  });

  // Remove 'active' class from all buttons
  const allButtons = document.querySelectorAll('.accordion-btn');
  allButtons.forEach(btn => {
    btn.classList.remove('active');
  });

  // Show the selected content section
  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.add('active');

  // Add 'active' class to the clicked button
  button.classList.add('active');
}


function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    topNavresponsive.classList.toggle("active");
  }
}

jQuery(document).ready(function ($) {
  // Your jQuery code here
  $('#myTab a').on('shown.bs.tab', function (e) {
    // Remove active class from all tabs
    $('#myTab a').removeClass('active');
    // Add active class to the shown tab
    $(e.target).addClass('active');
  });
});

// Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
