//FAVORITE///////////////////////////
const favButton = document.querySelector('.fav-button');
const favBlock = document.querySelector('.fav-block');
const favList = document.querySelector('.fav-list');
const favText = document.querySelector('.fav-text');
const favMainStar = document.querySelector('.mobile-favorite');
const favStar = document.querySelectorAll('.fav-star');
if (favButton) {
    favButton.addEventListener("click", function () {
        favButton.classList.toggle('_active');
        favBlock.classList.toggle('_active');

    });
};
favMainStar.addEventListener("click", function(){
    favMainStar.classList.toggle('_active');
})

favStar.forEach(function (elem){
    elem.addEventListener("click",function( ){
        elem.classList.toggle('_active');
        console.log(elem);
    })
   
})