document.addEventListener('DOMContentLoaded',()=> {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    const navLinks = document.querySelectorAll('.nav-link');

    menuToggle.addEventListener('click',()=> {
        navList.classList.toggle('active');
        const isExpanded = navList.classList.contains('active');
        menuToggle.setAttribute('area-expanded', isExpanded);
});

navLinks.forEach(link => {
    link.addEventListener('click',()=> {
        if (navList.classList.contains('active')) {
            navList.classList.remove('active');
            menuToggle.setAttribute('aria-expanded', false);
        }
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor=> {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView ({
            behavior:'smooth'
        });

        navLinks.forEach(link=> link.classList.remove('active'));
    });
});

const sections = document.querySelectorAll('section[id]');

function highlightNavLink() {
    let current = '';
    sections.forEach(section=> {
        const sectionTop = section.offsetTop - 100;
        if (scroolY >= sectionTop) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link=>{
        link.classList.remove('active');
        if (link.href.includes(current)) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', highlightNavLink);
highlightNavLink();
});