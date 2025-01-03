// Swiper Configuration
const swiper = new Swiper('.section__apartamentos__slide', {
  slidesPerView: 4,
  spaceBetween: 32,
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 32,
    }
  },
  // Navigation arrows
  navigation: {
    nextEl: '.section__apartamentos__slide .swiper-button-next',
    prevEl: '.section__apartamentos__slide .swiper-button-prev',
  },
});
// Script for FAQs
const items = document.querySelectorAll(".accordion button");
function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');
  for (let i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }
  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}
items.forEach(item => item.addEventListener('click', toggleAccordion));
// Header Configuration
let links = document.querySelectorAll('.js-link');
let sections = document.querySelectorAll('.section');
const header = document.getElementById("js-header");
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    let top = window.scrollY;
    let offset = section.offsetTop - 100;
    let heightSection = section.offsetHeight;
    let idSection = section.getAttribute('id');

    if (top >= offset && top < offset + heightSection) {
      links.forEach(link => {
        link.classList.remove('active');
        document.querySelector(`header nav a[href*='${idSection}']`).classList.add('active');
      })
    }
    if (window.pageYOffset > 20) {
      header.classList.add("changeBackgroundColor");
    } else {
      header.classList.remove("changeBackgroundColor");
    }
  })
})
function scrollSection(event) {
  event.preventDefault();
  const href = event.currentTarget.getAttribute('href');
  const section = document.querySelector(href)
  let topSection = section.offsetTop - 100;

  window.scrollTo({
    top: topSection,
    behavior: 'smooth'
  })
}
links.forEach(link => {
  link.addEventListener('click', scrollSection)
})

// Add class active to menu button
const menuButton = document.getElementById('js-menu-button');
if(menuButton){
  menuButton.addEventListener('click', () => {
    menuButton.classList.toggle('is-active'); // add the CSS configuration on this button
    document.documentElement.classList.toggle('menu-opened');
  })
}
// Close menu button when clicks to the links
const menuMobileNav = document.querySelectorAll('.js-menu-mobile li a');
menuMobileNav.forEach((item) => {
  item.addEventListener('click', function(){
    document.documentElement.classList.remove('menu-opened');
    menuButton.classList.remove('is-active');
  })
})
