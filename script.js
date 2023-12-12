//Main Show

const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', () =>{
            nav.classList.toggle('show')
        })
    }
} 
showMenu('nav-toggle', 'nav-menu')

//Remove Menu Mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    //Active link
    navLink.forEach(n => n.classList.remove('active'))
    this.classList.add('active')

    //Remove mobile menu
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

//Scroll Reveal Animation
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
})

/**Scroll Home */
sr.reveal('.home__title', {})
sr.reveal('.button', {delay:200})
sr.reveal('.home__img', {delay:400})
sr.reveal('.home__social-icon', {interval:200})

/**Scroll About */
sr.reveal('.about__img', {})
sr.reveal(`.about__subtitle, .section-title`, {delay:200})
sr.reveal('.about__text', {delay:400})

/**Scroll Skills */
sr.reveal('.skills__img', {})
sr.reveal('.skills__subtitle', {delay:200})
sr.reveal('.skills__text', {delay:400})
sr.reveal('.skills__data', {delay:600})

/**skills work */
sr.reveal('.work__img', {interval:100})

/**Contact Scroll */
sr.reveal('.contact__input', {delay:400})

/**footer scroll */
sr.reveal('.footer__title', {})
sr.reveal('.footer__social', {interval:200})
sr.reveal('.footer__copy', {delay:300})
