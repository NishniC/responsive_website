const header = document.querySelector('.Header');
const nav = document.querySelector('.Navbar')
const topOfNav = header.offsetTop;

function fixNav(){
    if (window.scrollY >= topOfNav){
        nav.style.paddingTop = header.offsetHeight + 2 + 'px';
    }
    else{
        nav.style.paddingTop = 0;
    }
}
window.addEventListener('scroll',fixNav);




const addToCartButtons = document.querySelectorAll('.btn.btn-primary.cart');

addToCartButtons.forEach((button) => {
  button.addEventListener('click', function() {
    const addedToCartDiv = this.closest('.product-container').querySelector('.added-to-cart');

    if (addedToCartDiv.style.opacity === '1') {
      addedToCartDiv.style.opacity = '0';
    } else {
      addedToCartDiv.style.opacity = '1';
    }
  });
});















