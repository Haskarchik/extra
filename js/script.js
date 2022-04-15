
///MOB-BUTTON
const startButton = document.querySelector('ul');
const categoryButton = document.createElement('li');
const br = document.createElement('br');

function showBtn(){
    categoryButton.innerHTML = '<a class="scroll-to  " href="#category-mobile">Категорії</a>' ;
    categoryButton.id = 'category';
    
    startButton.append(categoryButton);
}

if(window.innerWidth <= 480){
       showBtn();
       window.addEventListener('resize', function( ){
        if(window.innerWidth <= 480){
            showBtn();
           }
           else {
            startButton.removeChild(categoryButton);
           }
           
    },true)
      }
      else{
       window.addEventListener('resize', function( ){
           if(window.innerWidth <= 480){
               showBtn();
              }
              else {
               startButton.removeChild(categoryButton);
              }
              
       },true)
   };
 

//////SWIPER///////////////////////////////////

const swiper = new Swiper('.swiper', {

    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
         delay: 4000,
         stopOnLastSlide: false,
         disableOnInteraction: false
     
       },
     centeredSlides: true,
     speed: 1200,
 

});

///LANGUAGES////////////////////////////
const uaLanguages = document.querySelectorAll('.languages-ua');
const ruLanguages = document.querySelectorAll('.languages-ru');
const ruVersion = document.querySelectorAll('.ru-version');
const uaVersion = document.querySelectorAll('.ua-version');

uaLanguages.forEach(function(elem){
    elem.addEventListener("click", function() {
        ruVersion.forEach(function(elem) {
            elem.classList.remove('_active')
        })
        uaVersion.forEach(function(elem) {
            elem.classList.add('_active')
        })
        uaLanguages.forEach(function(elem){
            ruLanguages.forEach(function(elem){
                elem.classList.remove('_active');
            })
            elem.classList.add('_active');
        })
       
    });
})  
ruLanguages.forEach(function(elem){
    elem.addEventListener("click", function() {
        ruVersion.forEach(function(elem) {
            elem.classList.add('_active')
        })
        uaVersion.forEach(function(elem) {
            elem.classList.remove('_active')
        })
        ruLanguages.forEach(function(elem){
            uaLanguages.forEach(function(elem){
                elem.classList.remove('_active');
            })
            elem.classList.add('_active');

        })
       
    });
})  

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
        categoryList.classList.add('_hide');
    } else if (event.target.classList.contains('category-mobile')) {


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