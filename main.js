const scrollToServices = document.getElementById('scrollToServices');
const backToTopButton = document.getElementById('backToTop');

scrollToServices.addEventListener('click', () => {
    document.getElementById('servicesSection').scrollIntoView({ behavior: 'smooth' });
});


window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.remove('-right-16');
        backToTopButton.classList.add('right-4');
    } else {
        backToTopButton.classList.remove('right-4');
        backToTopButton.classList.add('-right-16');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    const speed = 200

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-target');
            const count = +counter.innerText.replace('+', '');

            const inc = target / speed;

            // Check if target is reached
            if (count < target) {

                counter.innerText = Math.ceil(count + inc) + '+';

                // Call function every ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target + '+';
            }
        };

        updateCount();
    });
});
