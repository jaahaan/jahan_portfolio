// const servicesDropdown = document.querySelector('#services-dropdown');

// document.querySelector('.nav-link.dropdown-toggle').addEventListener('click', () => {
//   servicesDropdown.classList.toggle('show');
// });


// Navbar offcanvas dropdown toggle starts
// const navbarOffCanvas = document.querySelector(".offcanvas.navbar-content__item");
// if (navbarOffCanvas) {
//   navbarOffCanvas.addEventListener('show.bs.offcanvas', event => {
//     $(".offcanvas.navbar-content__item .offcanvas-body .nav-item a").on("click", function () {
//       var $this = $(this);
//       if ($this.hasClass("dropdown-toggle")) {
//         $this.toggleClass("icon-rotate");
//         $this.next().slideToggle();
//         if ($this.parent().siblings().children().hasClass("dropdown-toggle")) {
//           $this.parent().siblings().children().removeClass("icon-rotate");
//           $this.parent().siblings().children().next().slideUp();
//         }
//       }
//     });
//   })

//   // When navbar offcanvas gets hide
//   navbarOffCanvas.addEventListener('hide.bs.offcanvas', event => {
//     $(".nav-item a").removeClass("icon-rotate");
//     $(".nav-item a").next().slideUp();
//   })
// }

// $(document).ready(function () {
//   // Hide all dropdown menus initially
//   $('.dropdown-menu').hide();

//   // Toggle the dropdown menu when the dropdown toggle link is clicked
//   $('.dropdown-toggle').click(function (e) {
//     e.preventDefault();

//     // Hide all other dropdown menus
//     $('.dropdown-menu').not($(this).siblings('.dropdown-menu')).slideUp();

//     // Toggle the clicked dropdown menu
//     $(this).siblings('.dropdown-menu').slideToggle();
//   });

//   // Hide the dropdown menu when clicking outside of it
//   $(document).click(function (e) {
//     if (!$(e.target).is('.dropdown-toggle') && !$(e.target).parents().is('.dropdown-menu')) {
//       $('.dropdown-menu').slideUp();
//     }
//   });
// });
