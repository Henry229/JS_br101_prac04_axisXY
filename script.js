const xx = document.querySelector('.axisX');
const yy = document.querySelector('.axisY');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

const mousemove = (event) => {
  xx.style.top = event.clientY + 'px';
  yy.style.left = event.clientX + 'px';
  target.style.top = event.clientY + 'px';
  target.style.left = event.clientX + 'px';
  tag.style.top = event.clientY + 'px';
  tag.style.left = event.clientX + 'px';
  tag.innerHTML = `X: ${event.clientX}, Y: ${event.clientY}`;
  // console.log(`clientX: ${event.clientX}, clientY: ${event.clientY}`);
};

window.addEventListener('mousemove', mousemove);
