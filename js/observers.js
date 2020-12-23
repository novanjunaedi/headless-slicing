const nav = document.querySelector('nav');
const sectionOne = document.querySelector('.jumbotron');

const sectionOneOptions = {
    rootMargin: '-200px 0px 0px 0px'
};

const sectionOneObserver = new IntersectionObserver((enteries, sectionOneObserver) => {
    enteries.forEach(entery => {
        if (!entery.isIntersecting){
            nav.classList.add('bg-white');
        } else {
            nav.classList.remove('bg-white');
        };
    });
}, sectionOneOptions);

sectionOneObserver.observe(sectionOne);