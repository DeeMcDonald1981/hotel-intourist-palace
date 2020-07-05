const mobileNav = () => {
	let navBtn = document.querySelector('.navbtn');
	let showNavigation = document.querySelector('.links');

	navBtn.addEventListener('click', function () {
		showNavigation.classList.toggle('show');
	})
}
mobileNav();

const stickyNav = () => {
	let navbar = document.querySelector('.navbar');
	window.addEventListener('scroll', () => {
		let totalNav = navbar.scrollHeight + navbar.offsetTop;
		if (window.scrollY > totalNav + 50) {
			navbar.classList.add('stickyNav');
		} else {
			navbar.classList.remove('stickyNav');
		}
	});
}
stickyNav();

if (document.querySelector('.carousel-slide')) {

	const galleryPage = ()=> {

		const carouselSlide = document.querySelector('.carousel-slide');
		const carouselImages = document.querySelectorAll('.carousel-slide img');

		const prevBtn = document.querySelector('#prevBtn');
		const nextBtn = document.querySelector('#nextBtn');

		let counter = 1;
		const size = carouselImages[0].clientWidth;

		carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
		nextBtn.addEventListener('click', () => {
			if (counter >= carouselImages.length - 1) return;
			carouselSlide.style.transition = 'transform .8s ease-in-out';
			counter++;
			carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

		});


		prevBtn.addEventListener('click', () => {
			if (counter <= 0) return;
			carouselSlide.style.transition = 'transform .8s ease-in-out';
			counter--;
			carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

		});

		carouselSlide.addEventListener('transitionend', () => {
			if (carouselImages[counter].id === 'lastClone') {
				carouselSlide.style.transition = 'none';
				counter = carouselImages.length - 2;
				carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
			}

			if (carouselImages[counter].id === 'firstClone') {
				carouselSlide.style.transition = 'none';
				counter = carouselImages.length - counter;
				carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
			}
		});
	}
	galleryPage();
}// and gallery check conditional


if (document.querySelector('.hero')) {
	const heroGallery = ()=> {
		let hero = document.querySelector('.hero');
		hero.addEventListener('click', ()=>{
			
		})
	}
	heroGallery();
}// end hero check conditional