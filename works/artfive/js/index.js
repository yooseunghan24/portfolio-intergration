const wheelWrap = document.querySelector('#wrap > div');
const footer = document.querySelector('footer');
let index = 0;
let wheelAni;

function wheelFnc(e) {
  let delta = e.deltaY;
  clearTimeout(wheelAni);
  wheelAni = setTimeout(() => {
    if (delta > 0) {
      if (index < 8) {
        index += 1;
        wheelWrap.style.marginTop = `${-innerHeight * index}px`;
      } else {
        if (index === 9) return;
        wheelWrap.style.marginTop = parseFloat(wheelWrap.style.marginTop) - (footer.clientHeight) + 'px';
        index = 9;
      }
    } else {
      if (index === 9) {
        wheelWrap.style.marginTop = parseFloat(wheelWrap.style.marginTop) + (footer.clientHeight) + 'px';
        index -= 1;
      } else {
        if (index === 0) return;
        index -= 1;
        wheelWrap.style.marginTop = `${-innerHeight * index}px`;
      }
    }
    console.log(index);
    console.log(wheelWrap.style.marginTop);
  }, 50)
}
window.addEventListener('wheel', wheelFnc);