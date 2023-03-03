'use strict';

const phoneMenu = document.querySelector('.phone-menu');
const btnCloseMenu = document.querySelector('.close-menu');
const openMobileMenu = document.querySelector('.mobile-menu');
const header = document.querySelector('.header');
const phoneMenuHeight = phoneMenu.getBoundingClientRect().height;


const openPhoneMenu = function (e) {
  e.preventDefault();
  phoneMenu.classList.remove('hidden');
  phoneMenu.scrollIntoView({ behavior: 'smooth' });
 
 
 
};

const closePhoneMenu = function () {
  phoneMenu.classList.add('hidden');
};

openMobileMenu.addEventListener('click', openPhoneMenu);
btnCloseMenu.addEventListener('click', closePhoneMenu);

const mobileMenuitem = document.querySelectorAll('.mobile-a');
mobileMenuitem.forEach(function(link) {
    link.onclick = function() {
       
        phoneMenu.classList.add('hidden');
        
    };
});

const mobileMenuSubitem = document.querySelectorAll('.phone__link');
mobileMenuSubitem.forEach(function(link) {
    link.onclick = function() {
     
        phoneMenu.classList.add('hidden');
        
        
         };
});









///////////////////////////////////////////////////////

const btnsOpenModal = document.querySelectorAll('.show-modal');

btnsOpenModal.forEach(function(btn) {
    btn.onclick = function() {
        const modal = btn.getAttribute("data-modal");
        document.getElementById(modal).style.display="block";
        document.getElementById(modal).scrollIntoView({ behavior: 'smooth' });
        
        
        
        
    };
});

const btnclose = document.querySelectorAll('.close-modal');
btnclose.forEach(function(btn) {
    btn.onclick = function() {
        const modal = (btn.closest(".modal").style.display="none" );
       
        
    };
});

window.onclick = function(e){
   if(e.target.className === "modal"){
    e.target.style.display="none";
   }
}

// Make navigation work

// const menu = document.querySelector('.menu-box');
// const navOpen = document.querySelector('.nav-open');
// const navClose = document.querySelector('.nav-close');
// const navItem = document.querySelectorAll('.nav__item');

// navOpen.addEventListener('click',function(){
//     navOpen.style.display="none";
//     menu.style.display="block";
//     navClose.style.display="block";
// });

// navClose.addEventListener('click',function(){
//     navOpen.style.display="block";
//     menu.style.display="none";
//     navClose.style.display="none";
// });

// navItem.forEach(function(link) {
//     link.onclick = function() {
//         navOpen.style.display="block";
//         menu.style.display="none";
//         navClose.style.display="none";
   
        
//     };
// });

///////////////////////////////////////
// Page navigation



// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
  
    // Matching strategy
    if (e.target.classList.contains('nav__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
    }
  });

  ///////////////////////////////////////
// // Sticky navigation: Intersection Observer API
const nav = document.querySelector('.nav');
// const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);



///// make nav work
prjt
soln
home

const home = document.querySelector('.home');
const soln = document.querySelector('.soln');
const prjt = document.querySelector('.prjt');
const menu1 = document.querySelector('.m--1');
const menu2 = document.querySelector('.m--2');
const menu3 = document.querySelector('.m--3');
const navItem = document.querySelectorAll('.nav__item');


home.addEventListener('mouseover',function(){
  menu1.style.display="block";
  menu2.style.display="none";
  menu3.style.display="none";

});

menu1.addEventListener('mouseover',function(){
  menu1.style.display="block";

});

menu1.addEventListener('mouseout',function(){
  menu1.style.display="none";

});

soln.addEventListener('mouseover',function(){
  menu2.style.display="block";
  menu1.style.display="none";
  menu3.style.display="none";

});

menu2.addEventListener('mouseover',function(){
  menu2.style.display="block";

});

menu2.addEventListener('mouseout',function(){
  menu2.style.display="none";

});

prjt.addEventListener('mouseover',function(){
  menu3.style.display="block";
  menu2.style.display="none";
  menu1.style.display="none";

});

menu3.addEventListener('mouseover',function(){
  menu3.style.display="block";

});

menu3.addEventListener('mouseout',function(){
  menu3.style.display="none";

});

navItem.forEach(function(link) {
    link.onclick = function() {
        menu1.style.display="none";
        
    };
});


// Button scrolling

const btnScrollTo = document.querySelector('.hero-btn');
const section2 = document.querySelector('#section--2');



btnScrollTo.addEventListener('click', function (e) {
    const s1coords = section2.getBoundingClientRect();
    console.log(s1coords);
  
    console.log(e.target.getBoundingClientRect());
  
    console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);
  
    console.log(
      'height/width viewport',
      document.documentElement.clientHeight,
      document.documentElement.clientWidth
    );
  
  
    section2.scrollIntoView({ behavior: 'smooth' });
  });

  ///////////////////////////////////////
// Menu fade animation
const handleHover = function (e) {
    if (e.target.classList.contains('nav__link')) {
      const link = e.target;
      const siblings = link.closest('.nav').querySelectorAll('.nav__link');
      const logo = link.closest('.nav').querySelector('img');
  
      siblings.forEach(el => {
        if (el !== link) el.style.opacity = this;
      });
      logo.style.opacity = this;
    }
  };
  
  // Passing "argument" into handler
  nav.addEventListener('mouseover', handleHover.bind(0.5));
  nav.addEventListener('mouseout', handleHover.bind(1));
  
  
// // Slider
const slider = function () {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    goToSlide(0);
    createDots();

    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

///////////////////////////
/// mail service

$("#submit-form").submit((e)=>{
  e.preventDefault()
  $.ajax({
      url:"https://script.google.com/macros/s/AKfycbzqf3ItY6OVF4CrlW2HcpI0gfQPz5YLJOBYcA6Eti6lz8jDQaUHpsn1tKS4nxs9NDRT/exec",
      data:$("#submit-form").serialize(),
      method:"post",
      success:function (response){
          alert("Form submitted successfully")
          window.location.reload()
          //window.location.href="https://google.com"
      },
      error:function (err){
          alert("Something Error")

      }
  })
})




//////////////////

// .nav
// .mobile-menu
// .nav-open
// .nav-close
// .mobile-a


// Make mobile navigation work

