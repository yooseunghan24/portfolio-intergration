const preventA = document.querySelectorAll('[href="#"]');
for(let i of preventA) {
  i.addEventListener('click', (e) => {
    e.preventDefault();
  })
}

/* 나이 */
const age = document.querySelectorAll(".age");
const date = new Date();
for (let i = 0; i < age.length; i++) {
  age[i].textContent = date.getFullYear() - 1996 + 1;
}

/* 랜덤 구름 이벤트 */
const cloud = document.querySelectorAll(".cloud");
// cloud0, 1, 2
for (let i = 0; i < 3; i++) {
  let random = +(Math.random() * 90); // top
  let random2 = +(Math.random() * 90); // left
  cloud[i].style.top = `${random}%`;
  cloud[i].style.left = `${random2}%`;
}
// cloud3, 4, 5
for (let i = 3; i < 6; i++) {
  let random = +(Math.random() * -10); // top
  let random2 = +(Math.random() * 100); // left
  cloud[i].style.top = `${random}%`;
  cloud[i].style.left = `${random2}%`;
}
let plus = 0.001;
let cloudX = 0;
let cloudY = 0;
let cloudX2 = 0;
let cloudY2 = 0;
let cloudX3 = 0;
let cloudY3 = 0;
let pl = Math.floor(Math.random() * 4);
let pl2 = Math.floor(Math.random() * 4);
let pl3 = Math.floor(Math.random() * 4);

function cloudMove() {
  switch (pl) {
    case 0:
      cloudX += plus;
      cloudY += plus;
      break;
    case 1:
      cloudX -= plus;
      cloudY -= plus;
      break;
    case 2:
      cloudX += plus;
      cloudY -= plus;
      break;
    case 3:
      cloudX -= plus;
      cloudY += plus;
      break;
  }
  switch (pl2) {
    case 0:
      cloudX2 += plus;
      cloudY2 += plus;
      break;
    case 1:
      cloudX2 -= plus;
      cloudY2 -= plus;
      break;
    case 2:
      cloudX2 += plus;
      cloudY2 -= plus;
      break;
    case 3:
      cloudX2 -= plus;
      cloudY2 += plus;
      break;
  }
  switch (pl3) {
    case 0:
      cloudX3 += plus;
      cloudY3 += plus;
      break;
    case 1:
      cloudX3 -= plus;
      cloudY3 -= plus;
      break;
    case 2:
      cloudX3 += plus;
      cloudY3 -= plus;
      break;
    case 3:
      cloudX3 -= plus;
      cloudY3 += plus;
      break;
  }
  let cloudOne = `translate(${cloudX}%, ${cloudY}%)`;
  let cloudTwo = `translate(${cloudX2}%, ${cloudY2}%)`;
  let cloudThree = `translate(${cloudX3}%, ${cloudY3}%)`;
  cloud[0].style.transform = cloudOne;
  cloud[1].style.transform = cloudTwo;
  cloud[2].style.transform = cloudThree;
  cloud[3].style.transform = cloudOne;
  cloud[4].style.transform = cloudTwo;
  cloud[5].style.transform = cloudThree;
}
setInterval(cloudMove, 1);

/* 맵 클릭 이벤트 */
$(".about_map, .works_map").click(function () {
  $(this)
    .next()
    .removeClass("modal_wrap_close svgClose")
    .addClass("modal_wrap_open svgOpen");
  $(this).next().find(".modal").addClass("modalOpen");
});
$(".skill_map, .contact_map").click(function () {
  $(this).next().removeClass("modal_wrap_close2").addClass("modal_wrap_open2");
  $(this).next().find(".modal").addClass("modalOpen");
});
$(".minigame_map").click(function () {
  $(".minigame_modal_wrap")
    .removeClass("modal_wrap_close3")
    .addClass("modal_wrap_open3");
  $(".minigame_modal_wrap")
    .find(".modal")
    .removeClass("minigameClose")
    .addClass("minigameOpen");
});

/* (OFF) 모달 검은부분 눌렀을 때 꺼지게 */
$(".about_modal_wrap, .works_modal_wrap").click(function (e) {
  if (e.target === e.currentTarget) {
    // 부모를 클릭했을 때만 사라지게
    $(this)
      .removeClass("modal_wrap_open svgOpen")
      .addClass("modal_wrap_close svgClose");
    $(".modal").removeClass("modalOpen");
    $(".face").removeClass("swing");
  }
});
$(".skill_modal_wrap, .contact_modal_wrap").click(function (e) {
  if (e.target === e.currentTarget) {
    $(this).removeClass("modal_wrap_open2").addClass("modal_wrap_close2");
    $(".modal").removeClass("modalOpen");
  }
});
$(".minigame_modal_wrap").click(function (e) {
  if (e.target === e.currentTarget) {
    $(this).removeClass("modal_wrap_open3").addClass("modal_wrap_close3");
    $(".modal").removeClass("minigameOpen").addClass("minigameClose");
  }
});

/* (OFF) X 눌렀을 때 꺼지게 */
$(".about_modal_wrap .close, .works_modal_wrap .close").click(function () {
  $(".modal_wrap")
    .removeClass("modal_wrap_open svgOpen")
    .addClass("modal_wrap_close svgClose");
  $(".modal").removeClass("modalOpen");
  $(".face").removeClass("swing");
});
$(".skill_modal_wrap .close, .contact_modal_wrap .close").click(function () {
  $(".modal_wrap")
    .removeClass("modal_wrap_open2")
    .addClass("modal_wrap_close2");
  $(".modal").removeClass("modalOpen");
});
$(".minigame_modal_wrap .close").click(function () {
  $(".minigame_modal_wrap")
    .removeClass("modal_wrap_open3")
    .addClass("modal_wrap_close3");
  $(".modal").removeClass("minigameOpen").addClass("minigameClose");
});

/* works 슬라이드 */
const worksLbtn = document.querySelector(".works_left_btn");
const worksRbtn = document.querySelector(".works_right_btn");
const worksSlide = document.querySelector(".works_slide");
const worksSlideList = document.querySelectorAll(".works_slide > div");
const worksPage = document.querySelector(".works_page ul");
let worksSlideSw = 0;
worksLbtn.style.display = 'none';
worksLbtn.addEventListener("click", () => {
  worksRbtn.style.display = 'block';
  if(worksSlideSw >= 2) {
    worksSlideSw -= 1;
    worksLbtn.style.display = 'block';
  } else {
    worksSlideSw = 0;
    worksLbtn.style.display = 'none';
  }
  worksSlide.style.marginLeft = `${-100 * worksSlideSw}%`;
  worksPage.style.marginLeft = `${-100 * worksSlideSw}%`;
});
worksRbtn.addEventListener("click", () => {
  worksLbtn.style.display = 'block';
  // 확장성을 위해 슬라이드 개수를 기준으로 조건 설정.
  if(worksSlideSw < worksSlideList.length - 2) {
    worksSlideSw += 1;
    worksRbtn.style.display = 'block';
  } else {
    worksSlideSw = worksSlideList.length - 1;
    worksRbtn.style.display = 'none';
  }
  worksSlide.style.marginLeft = `${-100 * worksSlideSw}%`;
  worksPage.style.marginLeft = `${-100 * worksSlideSw}%`;
});

// 휠 이벤트
const introP = document.querySelector(".m_intro p");
const skillWrap = document.querySelectorAll(".m_skill_contents_wrap");
const worksWrap = document.querySelectorAll(".m_works_contents_wrap");

function appearance() {
  for (let i = 0; i < skillWrap.length; i++) {
    if (scrollY > skillWrap[i].offsetTop - 800) {
      skillWrap[i].classList.add("upup");
    }
  }
  for (let i = 0; i < worksWrap.length; i++) {
    if (scrollY > worksWrap[i].offsetTop - 800) {
      worksWrap[i].classList.add("upup");
    }
  }
}
window.addEventListener("wheel", () => {
  appearance();
});

/* 미니맵 움직이기 */
const miniMap = document.querySelector(".minimap_wrap");
const miniBox = document.querySelector(".minibox");
const bigMap = document.querySelector(".desktop");
let startX, startY, setTop, setLeft;
function boxMove(e) {
  this.style.left = setLeft + e.clientX - startX + "px";
  this.style.top = setTop + e.clientY - startY + "px";
  bigMap.style.transform = `translate(${-this.offsetLeft}px,${-this
    .offsetTop}px)`;
  if (this.offsetLeft <= 0 && this.offsetTop <= 0) {
    this.style.left = 0;
    this.style.top = 0;
  }
  if (this.offsetLeft <= 0) {
    this.style.left = 0;
  }
  if (this.offsetTop <= 0) {
    this.style.top = 0;
  }
  if (this.offsetLeft >= 0 && this.offsetTop >= 20) {
    this.style.left = 0;
    this.style.top = 20 + "px";
  }
  if (this.offsetLeft >= 0) {
    this.style.left = 0;
  }
  if (this.offsetTop >= 20) {
    this.style.top = 20 + "px";
  }
}
miniBox.addEventListener("mousedown", function (e) {
  setTop = this.offsetTop;
  setLeft = this.offsetLeft;
  startX = e.clientX;
  startY = e.clientY;
  this.addEventListener("mousemove", boxMove);
  window.addEventListener("mouseup", function () {
    miniBox.removeEventListener("mousemove", boxMove);
    bigMap.style.transform = "translate(0,0)";
  });
});

/* 모바일용 스크립트 */

// 상단 메시지
$(".alert a").click(() => {
  $(".alert").hide();
});

// 터치 이벤트
window.addEventListener("touchmove", () => {
  appearance();
});
