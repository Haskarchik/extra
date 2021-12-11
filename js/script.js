  // Меню бургер
 
  const headerBurger = document.querySelector('.header-burger');
  const navBody = document.querySelector('.header-nav');
  if (headerBurger) {
	  headerBurger.addEventListener("click", function () {
		  headerBurger.classList.toggle('_active');
		  navBody.classList.toggle('_active');
	  });
  }


// Карточая панель

  const animItems = document.querySelectorAll('.jurnal-card');
  
  if (animItems.length > 0) {
	  window.addEventListener('scroll', animOnScroll);
	  function animOnScroll() {
		  for (let index = 0; index < animItems.length; index++) {
			  const animItem = animItems[index];
			  const animItemHeight = animItem.offsetHeight;
			  const animItemOffset = offset(animItem).top;
			  const animStart = 4;
  
			  let animItemPoint = window.innerHeight - animItemHeight / animStart;
			  if (animItemHeight > window.innerHeight) {
				  animItemPoint = window.innerHeight - window.innerHeight / animStart;
			  }
  
			  if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
				  animItem.classList.add('_active');
			  } else {
				  if (!animItem.classList.contains('_anim-no-hide')) {
					  animItem.classList.remove('_active');
				  }
			  }
		  }
	  }
	  function offset(el) {
		  const rect = el.getBoundingClientRect(),
			  scrollLeft = window.scrollX || document.documentElement.scrollLeft,
			  scrollTop = window.scrollY || document.documentElement.scrollTop;
		  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	  }
  
	  setTimeout(() => {
		animOnScroll();
	}, 300);
  }







//SWIPER

  const swiper = new Swiper('.swiper', {

	loop: true,
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	autoplay: {
		delay: 10000,
		stopOnLastSlide: false,
		disableOnInteraction: false
	
	},

	simulateTouch: false,
	centeredSlides: true,
	speed: 1200,

	
  });

