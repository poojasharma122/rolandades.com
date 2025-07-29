// Toggle Menu Functionaliy Start
$(document).ready(function () {
  $(".menu-toggle-btn").click(function () {
    $("body").addClass("menuToggle");
  });
  $(".menu-close-btn").click(function () {
    $("body").removeClass("menuToggle");
  });
});
// Toggle Menu Functionaliy End



// slider

var swiper = new Swiper(".mySwiper", {
  loop: true,
  autoplay: {
    delay: 5000, 
    disableOnInteraction: false
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

// slider


// Slider JS Start

// Slider JS Start


// Read More Functionality JS Start
$('.subpage-readmore-btn').click(function (e) {
  e.preventDefault();
  const $button = $(this);
  const $content = $button.closest('.island_text').find('.island_second_text');

  $content.stop(true, true).slideToggle(500, function () {
    const isVisible = $content.is(':visible');

    $button.html(isVisible
      ? 'Read less <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 137.4c12.5-12.5 32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L224 205.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l160-160z"/></svg>' // UP arrow
      : 'Read more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/></svg>' // DOWN arrow
    );
  });
});

// Read More Functionality JS end


// AOS JS Start
AOS.init({
  duration: 1200,
});
// AOS JS End