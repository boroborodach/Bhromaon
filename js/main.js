let link = document.querySelectorAll('a');

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener('click', function (e){
    e.preventDefault();
  });
}

const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
  smoothLink.addEventListener('click', function () {
    const id = smoothLink.getAttribute('href');

    document.querySelector(id).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
};

document.querySelector('.header-nav__btn').addEventListener('click', function(){
  document.querySelector('.header-nav__menu').classList.toggle('header-nav__menu--active');
});

let menuItems = document.querySelectorAll('.header-nav__menu-item');

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener('click', function (){
    document.querySelector('.header-nav__menu').classList.remove('header-nav__menu--active');
  });
}