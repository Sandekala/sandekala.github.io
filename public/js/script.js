const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('navbar');
const navList = document.querySelectorAll('#navbar > ul > li > a');
const sections = document.querySelectorAll('section');
const toggle = document.getElementById('toggle');
const checkToggle = document.getElementById('checkToggle');
const svgSun = document.querySelector('#toggle svg:nth-child(1)');
const svgMoon = document.querySelector('#toggle svg:nth-child(2)');

//animate on scrolling

window.onscroll = () => {
  const header = document.querySelector('header');
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add('navbar-fixed');
  } else {
    header.classList.remove('navbar-fixed');
  }
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 300) {
      current = section.getAttribute('id');
    }
  });

  navList.forEach((list) => {
    list.classList.remove('nav-active');
    if (list.classList.contains(current)) {
      list.classList.add('nav-active');
    }
  });
};

//toggle hamburger

hamburger.addEventListener('click', function () {
  nav.classList.toggle('hidden');
  hamburger.classList.toggle('active');
});

navList.forEach((list) =>
  list.addEventListener('click', () => {
    nav.classList.add('hidden');
    hamburger.classList.remove('active');
  })
);

//Toggle darkMode

checkToggle.addEventListener('click', () => {
  if (checkToggle.checked) {
    toggle.classList.add('toggle-active');
    toggle.classList.remove('toggle-deactive');
    svgSun.classList.add('hidden');
    svgMoon.classList.remove('hidden');
    document.documentElement.classList.add('dark');
  } else {
    toggle.classList.remove('toggle-active');
    toggle.classList.add('toggle-deactive');
    svgMoon.classList.add('hidden');
    svgSun.classList.remove('hidden');
    document.documentElement.classList.remove('dark');
  }
});

// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//   document.documentElement.classList.add('dark');
//   checkToggle.checked;
// } else {
//   document.documentElement.classList.remove('dark');
// }

// window.addEventListener('click', (e) => {
//   if (e.target !== hamburger && e.target !== nav) {
//     nav.classList.add('hidden');
//     hamburger.classList.remove('active');
//   }
// });

// const btnDownload = document.querySelector('#download');

// btnDownload.addEventListener('click', (e) => {
//   e.preventDefault();
//   const linkUrl = btnDownload.getAttribute('action').value;
//   warnBeforDownload(linkUrl);
// });

// function warnBeforDownload(linkUrl) {
//   Swal.fire({
//     title: 'Are you sure want to Download this CV ?',
//     showCancelButton: true,
//     confirmButtonText: 'Yes!',
//     confirmButtonColor: '#7e22ce',
//     cancelButtonText: 'Cancel',
//     icon: 'question',
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         icon: 'success',
//         title: 'CV downloaded !',
//         showConfirmButton: false,
//         timer: 1000,
//       });
//       window.location.href = linkUrl;
//     }
//   });
// }

// btnDownload.addEventListener('click', () => {
//   Swal.fire({
//     title: 'Are you sure want to Download this CV ?',
//     showCancelButton: true,
//     confirmButtonText: 'Yes!',
//     confirmButtonColor: '#7e22ce',
//     cancelButtonText: 'Cancel',
//     icon: 'question',
//   }).then((result) => {
//     if (result.isConfirmed) {
//       Swal.fire({
//         icon: 'success',
//         title: 'CV downloaded !',
//         showConfirmButton: false,
//         timer: 1000,
//       });
//     }
//   });
// });

//form submitter

const scriptURL = 'https://script.google.com/macros/s/AKfycbzleOJdZvIc644VpGRMKEFrAYfGfIvTXVD9Z-OTKX823hsTep-3ilD0zbQY3w76RgFj/exec';
const form = document.forms['submit-to-google-sheet'];
const btnKirim = document.querySelector('[type = submit]');
btnKirim.innerHTML = 'Send';

form.addEventListener('submit', (e) => {
  e.preventDefault();
  Swal.fire({
    title: 'Are you sure want to send this message ?',
    showCancelButton: true,
    confirmButtonText: 'Yes!',
    confirmButtonColor: '#7e22ce',
    cancelButtonText: 'Cancel',
    icon: 'question',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: 'Sending message...',
        timer: 3000,
        showConfirmButton: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
          form.reset();
          Swal.fire({
            icon: 'success',
            title: 'Your message has been sent',
            showConfirmButton: false,
            timer: 1500,
          });
          console.log('Success!', response);
        })
        .catch((error) => {
          Swal.fire({
            icon: 'error',
            title: 'Your message not sent',
            showConfirmButton: false,
            timer: 3000,
          });
          console.error('Error!', error.message);
        });
    }
  });
});

//button to top

const toTop = document.querySelector('#toTop');
toTop.addEventListener('click', () => {
  window.scrollTo(0, 0);
});
