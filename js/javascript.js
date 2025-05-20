//  toggle icon navbar

let menuIcon = document.querySelector('#menu-icon');
// let menuIcon = document.querySelector('.menu');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    // menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('opened');this.setAttribute('aria-expanded', this.classList.contains('opened'));
};

// ungtuk scroll
let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height){
            // active navbar ink
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // mengaktifkan section animasi scroll entah apalah
            sec.classList.add('show-animate');
        }
        // tandai ajalah
        else{
            sec.classList.remove('show-animate');
        }
    });
    // sticky header
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // untuk hapus togel sam nav pas diklik
    menuIcon.classList.remove('opened');
    navbar.classList.remove('active');

    // animasi footer discroll
    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}