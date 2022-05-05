const startButton = document.querySelector('ul');
const categoryButton = document.createElement('li');
const br = document.createElement('br');

function showBtn(){
    categoryButton.innerHTML = '<a class="scroll-to  " href="#category-mobile">Категории</a>' ;
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
 