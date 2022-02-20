document.addEventListener('DOMContentLoaded', () => {


    const hamburger = document.querySelector('.hamburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close');

    windows = document.querySelectorAll('[data-modal]'),


        hamburger.addEventListener('click', () => {
            menu.classList.add('active');


        });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');

    });

    menu.addEventListener('click', () => {
        menu.classList.remove('active');

    });






    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            menu.classList.remove('active');

        }

    });






    new Swiper('.swiper-container', {
        loop: true,
        spaceBetween: 20,


        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        scrollbar: {
            el: '.swiper-scrollbar',
        },
        breakpoints: {
            310: {
                slidesPerView: 1,
            },
            640: {
                slidesPerView: 2,
            },
            768: {
                slidesPerView: 3,
            },
        },

    });



    const modal = document.querySelector('.modal');
    const btn = document.querySelector(".zeez__btn");
    const span = document.querySelector(".modal_close");


    btn.onclick = function() {
        modal.style.display = "block";
    }


    span.onclick = function() {
        modal.style.display = "none";
    }


    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

});