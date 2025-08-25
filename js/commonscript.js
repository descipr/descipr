let $carousel;
document.addEventListener("DOMContentLoaded", function () {
    if ($.fn.slick) {
        $('.customer-logos').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            arrows: false,
            dots: false,
            pauseOnHover: false,
            responsive: [{
                breakpoint: 769,
                settings: {
                    slidesToShow: 2
                }
            }, {
                breakpoint: 520,
                settings: {
                    slidesToShow: 1
                }
            }]
        });
    } else {
        console.error('Slick is not defined.');
    }

    if ($.fn.owlCarousel) {
        $carousel = $(".testimonial-carousel").owlCarousel({
            items: 1,
            autoplay: true,
            loop: true,
            autoplaySpeed: 1500,
            dots: true,
            nav: true,
            autoplayHoverPause: false,
            navText: [
                '<i class="bi bi-chevron-left"></i>',
                '<i class="bi bi-chevron-right"></i>'
            ],
            responsive: {
                0: {
                    nav: false
                },
                768: {
                    nav: true
                }
            }
        });
    } else {
        console.error("Owl Carousel is not loaded.");
    }

    $('.acc-head').addClass('active');
    $('.acc-head').next('.acc-body').slideDown(0);

    // $('.acc-head').click(function () {
    //     $(this).next('.acc-body').slideToggle(300);
    //     $(this).toggleClass('active');
    // });


    if ($.fn.slick) {
        $('.slider-for').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true, // Adds navigation dots
            arrows: false, // Removes arrows for a cleaner look on mobile
            responsive: [
                {
                    breakpoint: 768, // Mobile view
                    settings: {
                        slidesToShow: 1, // Show one card at a time
                        slidesToScroll: 1,
                        dots: true
                    }
                },
                {
                    breakpoint: 992, // Tablet view
                    settings: {
                        slidesToShow: 2, // Show two cards at a time
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 1200, // Desktop view
                    settings: "unslick" // Disable slick on desktop
                }
            ]
        });
    } else {
        console.error('Slick is not defined.');
    }

    if (typeof Swiper !== 'undefined') {
        // Swiper initialization code
        new Swiper('.swiper-container', {
            loop: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,  // Allows user to click on pagination bullets
            },
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            spaceBetween: 20,
        });
    } else {
        console.error('Swiper is not defined.');
    }

});

function startScroll(container, speed, startFromBottom = false) {
    const content = container.querySelector(".scroll-content");
    const clonedContent = content.cloneNode(true);
    container.appendChild(clonedContent);

    let direction = startFromBottom ? -1 : 1;
    let scrollAmount = startFromBottom ? content.scrollHeight : 0;
    container.scrollTop = scrollAmount;

    function scrollStep() {
        scrollAmount += speed * direction;

        if (direction === 1 && scrollAmount >= content.scrollHeight) {
            direction = -1;
        } else if (direction === -1 && scrollAmount <= 0) {
            direction = 1;
        }

        container.scrollTop = scrollAmount;
        requestAnimationFrame(scrollStep);
    }

    scrollStep();
}

document.addEventListener("DOMContentLoaded", () => {
    if (window.innerWidth >= 800) {
        const columns = document.querySelectorAll(".alignVertical");

        columns.forEach((col, index) => {
            const wrapper = document.createElement("div");
            wrapper.classList.add("scroll-content");

            const blocks = Array.from(col.querySelectorAll(".linkedinsec"));
            blocks.forEach(block => wrapper.appendChild(block));

            col.innerHTML = "";
            col.appendChild(wrapper);

            const speed = 0.5;
            const startFromBottom = index === 1;

            setTimeout(() => {
                startScroll(col, speed, startFromBottom);
            }, 100);
        });
    }
    new Swiper(".discoverSwiper", {
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        spaceBetween: 20,
    });
});


let autoplayInterval = 5000;
setInterval(() => {
    if ($carousel) {
        $carousel.trigger("next.owl.carousel");
    }
}, autoplayInterval);

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible" && $carousel) {
        $carousel.trigger("next.owl.carousel");
    }
});



function initSwiperMobile() {
    if (window.innerWidth <= 768) {
        return new Swiper('.swiper-container', {
            slidesPerView: 1,
            spaceBetween: 0,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
        });
    }
    return null;
}

let swiperInstance = null;

function setupSwiper() {
    if (swiperInstance) {
        swiperInstance.destroy(true, true);
        swiperInstance = null;
    }
    swiperInstance = initSwiperMobile();
}

window.addEventListener('load', setupSwiper);
window.addEventListener('resize', setupSwiper);

const slides = document.querySelectorAll('.swiper-slide');

slides.forEach(slide => {
    slide.addEventListener('click', () => {
        swiper.autoplay.stop();
    });
});





const swiper = new Swiper(".swiper-slider", {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: 20,
    grabCursor: false,
    freeMode: false,
    loop: true,
    mousewheel: false,
    keyboard: {
        enabled: true
    },

    // Enabled autoplay mode
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    // If we need pagination
    pagination: {
        el: "",
        dynamicBullets: false,
        clickable: false
    },

    breakpoints: {
        640: {
            slidesPerView: 1.25,
            spaceBetween: 20
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 20
        }
    }
});

function openInNewTab() {
    window.open('https://www.linkedin.com/company/descipr/', '_blank');
}

function openWhatsApp() {
    const phoneNumber = '9148398744';
    window.open(`https://api.whatsapp.com/send/?phone=${phoneNumber}&text&type=phone_number&app_absent=0`, '_blank');
}

function scrollToCurriculum() {
    document.getElementById('curriculum').scrollIntoView({ behavior: 'smooth' });
}

function scrollToAiBootcamp() {
    document.getElementById('campuseco').scrollIntoView({ behavior: 'smooth' });
}

function scrollToMainProducts() {
    document.getElementById('mainproducts').scrollIntoView({ behavior: 'smooth' });
}