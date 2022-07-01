window.onscroll = function () {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;
  const nav = document.getElementById('nav');

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
};

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navbar');

hamburger.addEventListener('click', function () {
  nav.classList.toggle('hidden');
  hamburger.classList.toggle('active');
});
