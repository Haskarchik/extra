//FAVORITE///////////////////////////
const favButton = document.querySelector('.fav-button');
const favBlock = document.querySelector('.fav-block');
const favLists = document.querySelectorAll('.fav-list');
const favText = document.querySelector('.fav-text');
const mobFavBtn = document.querySelector('.mobile-favorite');
const favStar = document.querySelectorAll('.fav-star');
const createEl = document.createElement('li');
const popup = document.querySelector('.popup');
const popupBody = document.querySelector('.popup-body');
//const randomId = () => {
//	return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
//};

let favList = favLists[0];
let favListMob = favLists[1];



const generateCartProduct = (img, title, litr, id) => {
    return `<li data-id=" ${id}">
    <div class= "fav-card">
      <img src="${img}" alt="">
      <div class="fav-label">
      <div>
       ${title}
       </div>
       <div class="ml-block fav-ml-block"><span> ${litr} </span></div>
      </div>
      <div class="del">
      
     </div>
    </div>
    </li>`
}

const popupActive = () => {
    if(favListMob.length <! 0){
    popup.classList.toggle('active');
    popupBody.classList.toggle('starlight');
    }
    
}


const hideText = () =>{
    if(favList.children.length > 0){
        favText.classList.add('_hide');
        mobFavBtn.classList.add('_active');
    }
        
        else {
            favText.classList.remove('_hide');
        }
        
};

const updateStorage = () =>{

    let html = favList.innerHTML.trim();
    
    if(html.length > 1)
        localStorage.setItem('products', html);
    else
    localStorage.removeItem('products');
}

const initionalState = () =>{
    favList.innerHTML = localStorage.getItem('products');
    favListMob.innerHTML = localStorage.getItem('products');

    hideText();
    favList.querySelectorAll('li').forEach(el => {
        let id = el.dataset.id.trim();
        document.querySelector(`.product-card[data-id="${id}"]`)
        .querySelector('.fav-star').classList.add('_active')
       
})
}

const deleteProduct = (productParent) =>{
    let id = productParent.dataset.id.trim();
    let products = document.querySelectorAll('.product-card');
    products.forEach((e)=> {
        
        if(e.dataset.id == id){
           e.querySelector('.fav-star').classList.remove('_active')
        }
       
    })
    
    productParent.remove();

}

if (favButton) {
    favButton.addEventListener("click", function () {
        favButton.classList.toggle('_active');
        favBlock.classList.toggle('_active');
        hideText();
        innitionalState();
    });
};
mobFavBtn.addEventListener("click", function(){
    mobFavBtn.classList.add('_active');
    popupActive();
}) ;


function delPush() {
    favButton.classList.remove('push');
  }

function delDel() {
    favButton.classList.remove('del-efect');
  }
  

const pushEffect = () =>{
      favButton.classList.add('push');  
};
const delEffect = () =>{
    favButton.classList.add('del-efect');  
};

favStar.forEach(function (elem){
   // elem.closest('.product-card').setAttribute('data-id', randomId());
    elem.addEventListener("click",function(e ){
        elem.classList.add('_active');
        let self = e.currentTarget;
        let parent = self.closest('.product-card');
        let id = parent.dataset.id;
        let img = parent.querySelector('img').getAttribute('src');
        let title =  parent.querySelector('.card-label').textContent.trim();
        let litr = parent.querySelector('.ml-block').textContent.trim();
        let sumId
        


        let products = document.querySelectorAll('.fav-list li');
        
        products.forEach((e)=>{
           
          if(e.dataset.id.trim() == id){
            
             sumId = id;

          }
           
        });
        if(sumId !== id){
        favList.insertAdjacentHTML('beforeend', generateCartProduct(img, title, litr,  id));
        favListMob.insertAdjacentHTML('beforeend', generateCartProduct(img, title, litr,  id));
        }
        hideText();
        updateStorage();
        
       
        pushEffect();
        setTimeout(delPush, 800);
    })



    favList.addEventListener('click', (e) => {
        if(e.target.classList.contains('del')){
            deleteProduct(e.target.closest('li'))

        }
        delEffect();
        setTimeout(delDel, 800);
        hideText();
        updateStorage();
        
    })
    favListMob.addEventListener('click', (e) => {
        if(e.target.classList.contains('del')){
            deleteProduct(e.target.closest('li'))

        }
        delEffect();
        setTimeout(delDel, 800);
        hideText();
        updateStorage();
        
    })

})
initionalState();