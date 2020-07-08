/* href속성이 #인 태그 이동 막기 */
const no = document.querySelectorAll('[href="#"]');
for(let i of no) {
	i.addEventListener('click', function(e) {
		e.preventDefault();
	})
}

const header = document.querySelector('header');
const nav = document.querySelector('nav');
window.addEventListener('resize', function(){
	let windowWidth = window.innerWidth;
	/* 네비게이션 */
	if(window.innerWidth >= 1024) {
		nav.style.transform = 'translateX(0)';
	} else {
		nav.style.transform = 'translateX(-100%)';
	}
	/* 메인슬라이드 이미지 변경 */
	for(let i=0; i<slideListImg.length; i++) {
		if(windowWidth >= 768) {
			slideListImg[i].src = imgSrc[i];
		} else {
			slideListImg[i].src = originSrc[i];
		}
	}
	if(windowWidth >= 1024) {
		$('.gnb > li').hover(function(){ // PC 메뉴
			$(this).find('.sub_menu').stop().slideDown();
		},function(){
			$(this).find('.sub_menu').stop().slideUp();
		})
	}
  /* 헤더 색깔 변경(모바일, 태블릿일때만) */
	if(window.innerWidth < 1023) {
		let winScrollY = window.scrollY;
		winScrollY > 0 ? header.classList.add('headerOn') :
		header.classList.remove('headerOn');
	} else {
		header.classList.remove('headerOn');
	}
	if(window.innerWidth >= 1024) {
		$('.gnb > li').hover(function(){
			$(this).find('.sub_menu').stop().slideDown();
		},function(){
			$(this).find('.sub_menu').stop().slideUp();
		})
		$('.gnb > li > a').focus(function() { // 탭버튼으로 메뉴 선택하기
			$(this).siblings().stop().slideDown();
		});
		$('.sub_menu li:last-child a').blur(function() {
			$('.sub_menu').stop().slideUp();
		})
		$('.navback').fadeOut();
	} else {
		//$('.gnb > li').off();
		$('.submenu_title').click(clickMenu);
	}
}) // 여기까지 resize

let windowWidth = window.innerWidth;
/* 헤더 색깔 변경 */
window.addEventListener('scroll', function() {
	if(window.innerWidth < 1023) {
		let winScrollY = window.scrollY;
  	winScrollY > 0 ? header.classList.add('headerOn') :
		header.classList.remove('headerOn');
	}
})
if(window.innerWidth < 1023) {
	let winScrollY = window.scrollY;
	winScrollY > 0 ? header.classList.add('headerOn') :
	header.classList.remove('headerOn');
}
/* 모바일 메뉴는 클릭, 데스크탑 메뉴는 호버 */
let menuSw = 0;
function clickMenu() { // 모바일 메뉴 클릭 이벤트
	if($(this).children().hasClass('arrow_ani') && menuSw == 1) {
		$(this).children().removeClass('arrow_ani');
		$(this).siblings().stop().slideUp();
		menuSw = 0;
	} else {
		$('.sub_menu').stop().slideUp();
		$(this).parent().siblings().find('.arrow').removeClass('arrow_ani');
		$(this).siblings().stop().slideDown();
		$(this).children().addClass('arrow_ani');
		menuSw = 1;
	}
}
if(window.innerWidth >= 1024) {
	$('.gnb > li').hover(function(){
		$(this).find('.sub_menu').stop().slideDown();
	},function(){
		$(this).find('.sub_menu').stop().slideUp();
	})
	$('.gnb > li > a').focus(function() {
		$(this).siblings().stop().slideDown();
	});
	$('.sub_menu li:last-child a').blur(function() {
		$('.sub_menu').stop().slideUp();
	})
} else {
	$('.submenu_title').click(clickMenu);
}
/* 모바일 토글 버튼 이벤트 */
let navSw = 0;
$('.toggle_btn').click(function(){
	if(navSw === 0) {
		$(this).removeClass('toggle_btn_ani_off').addClass('toggle_btn_ani');
		$('nav').css('transform', 'translateX(0)');
		$('.navback').fadeIn();
		navSw = 1;
	} else {
		$(this).removeClass('toggle_btn_ani').addClass('toggle_btn_ani_off');
		$('nav').css('transform', 'translateX(-100%)');
		$('.navback').fadeOut();
		navSw = 0;
	}
});
/* 메인 자동슬라이드 이벤트 */
let slideIndex = 0;
const slide = document.querySelector('.slide');
const dotsList = document.querySelectorAll('.dots li');
function autoSlide() {
	slideIndex >= 3 ? slideIndex = 0 : slideIndex += 1;
	slide.style.marginLeft = -100*slideIndex + '%';
	for(let i of dotsList) {
		i.classList.remove('dot_on');
	}
	dotsList[slideIndex].classList.add('dot_on');
}
let slideShow = setInterval(autoSlide, 3000);
for(let i=0; i<dotsList.length; i++) {
	dotsList[i].addEventListener('click', function() {
		clearInterval(slideShow);
		for(let i of dotsList) {
			i.classList.remove('dot_on');
		}
		dotsList[i].classList.add('dot_on');
		slide.style.marginLeft = -100*i + '%';
		slideIndex = i;
		slideShow = setInterval(autoSlide, 3000);
	})
}
/* 모바일 메뉴 도트 슬라이드 */
const menuSlide = document.querySelector('.menu_slide');
const menuDots = document.querySelectorAll('.menu_dots li');
for(let i=0; i<menuDots.length; i++) {
	menuDots[i].addEventListener('click', function() {
		for(let i of menuDots) {
			i.classList.remove('dot_on');
		}
		menuDots[i].classList.add('dot_on');
		menuSlide.style.marginLeft = -100*i + '%';
	})
}
/* 모바일 리워드 도트 슬라이드 */
const rewardSlide = document.querySelector('.reward_slide');
const rewardDots = document.querySelectorAll('.reward_dots li');
for(let i=0; i<rewardDots.length; i++) {
	rewardDots[i].addEventListener('click', function() {
		for(let i of rewardDots) {
			i.classList.remove('dot_on');
		}
		rewardDots[i].classList.add('dot_on');
		rewardSlide.style.marginLeft = -50*i + '%';
	})
}
/* 태블릿, PC일 때 메인슬라이드 이미지 변경 */
const slideListImg = document.querySelectorAll('.slide li img');
let imgSrc = [];
let originSrc = [];
for(let i=0; i<slideListImg.length; i++) {
	imgSrc.push('img/slide'+ (i+1) + '.jpg');
	originSrc.push('img/m_slide' + (i+1) + '.jpg');
}
for(let i=0; i<slideListImg.length; i++) {
	if(window.innerWidth >= 768) {
		slideListImg[i].src = imgSrc[i];
	}
}
/* 데스크탑 중간메뉴이미지 슬라이드 */
const menuLbtn = document.querySelector('.menu_left_btn');
const menuRbtn = document.querySelector('.menu_right_btn');
menuLbtn.addEventListener('click', function() {
	const menuSlideLast = document.querySelector('.menu_slide li:last-child');
	menuSlide.insertBefore(menuSlideLast, menuSlide.childNodes[0]);
})
menuRbtn.addEventListener('click', function() {
	const menuSlideFirst = document.querySelector('.menu_slide li:first-child');
	menuSlide.insertBefore(menuSlideFirst, menuSlide.childNodes[8]);
})