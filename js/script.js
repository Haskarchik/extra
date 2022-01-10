//////SWIPER///////////////////////////////////

const swiper = new Swiper('.swiper', {

    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    //	autoplay: {
    //		delay: 10000,
    //		stopOnLastSlide: false,
    //		disableOnInteraction: false
    //
    //	},


    centeredSlides: true,
    speed: 1200,


});
///WINDOW SCROLL////////////////////////

const animItem = document.querySelector('.products');
const startBtn = document.querySelector('#start-btn');
const productBtn = document.querySelector('#product-btn');

if (animItem) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {


        const animItemHeight = animItem.offsetHeight;
        const animItemOffset = offset(animItem).top;
        
        const animStart = 2;

        let animItemPoint = window.innerHeight - animItemHeight / animStart;
        if (animItemHeight > window.innerHeight) {
            animItemPoint = window.innerHeight - window.innerHeight / animStart;
        }

        if ((window.scrollY > animItemOffset - animItemPoint) && window.scrollY < (animItemOffset + animItemHeight)) {
            startBtn.classList.add('_active');
        } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
                startBtn.classList.remove('_active');
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


const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href')
    
    document.querySelector(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}
//FAVORITE///////////////////////////
const favButton = document.querySelector('.fav-button');
const favBlock = document.querySelector('.fav-block');
const favList = document.querySelector('.fav-list');
const favText = document.querySelector('.fav-text');

if (favButton) {
	favButton.addEventListener("click", function () {
		favButton.classList.toggle('_active');
		favBlock.classList.toggle('_active');
   
	});
};
///SEARCH////////////////////////////

document.querySelector('#search-box').oninput = function () {
    let val = this.value.trim();
    let elasticItems = document.querySelectorAll('.product-card');


    if (val != '') {
        elasticItems.forEach(function (elem) {
            if (elem.innerText.search((RegExp(val, "gi"))) == -1) {
                //searchList.classList.add('display')
                elem.classList.add('hide')
            }
            else {
                elem.classList.remove('hide');
            }
        });
    }
    else {
        elasticItems.forEach(function (elem) {
            elem.classList.remove('hide');
            //searchList.classList.remove('display')
        });
    }
};


/////CATEGORY//////////////////////////////////////////////////

const categoryBtn = document.querySelector('.category-btn');
const categoryList = document.querySelector('.category-list');

categoryBtn.addEventListener('click', function () {
    categoryList.classList.toggle('_hide')
    categoryBtn.classList.toggle('_active');
});

//Category list
const filterBox = document.querySelectorAll('.product-card');
const categoryListAll = document.querySelectorAll('.category-mobile');
document.onclick = event => {
    if (event.target.classList.contains('category')) {
        let CurentText = String(event.target.innerText);
        if (event.target.dataset.f == 'All') {
            categoryBtn.innerHTML = 'Категорії'
        } else {
            categoryBtn.innerHTML = CurentText;
        }
        
        
        if (event.target.tagName !== 'LI') return false;
        let filterClass = event.target.dataset.f;

        filterBox.forEach(elem => {
            elem.classList.remove('hide');
            if (!elem.classList.contains(filterClass) && filterClass !== 'All') {
                elem.classList.add('hide');
            }
        });
    }else if (event.target.classList.contains('category-mobile')) {
        
        
        categoryListAll.forEach(elemMob => {
            elemMob.classList.remove('_active')
        })
        event.target.classList.add('_active');
        if (event.target.tagName !== 'LI') return false;
        let filterClass = event.target.dataset.f;

        filterBox.forEach(elemMob => {
            elemMob.classList.remove('hide');
            if (!elemMob.classList.contains(filterClass) && filterClass !== 'All') {
                elemMob.classList.add('hide');
            }
        });
    }
    
}