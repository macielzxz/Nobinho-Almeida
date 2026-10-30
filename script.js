const toggle = document.getElementById('navToggle');
const nav = document.getElementById('mainNav');
if(toggle){
  toggle.addEventListener('click', () => nav.classList.toggle('open'));
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}

// Scroll progress bar + header background on scroll
const progressBar = document.getElementById('scrollProgress');
const headerEl = document.querySelector('header');
function onScroll(){
  const h = document.documentElement;
  const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
  if(progressBar) progressBar.style.width = scrolled + '%';
  if(headerEl){
    if(h.scrollTop > 40) headerEl.classList.add('scrolled');
    else headerEl.classList.remove('scrolled');
  }
}
document.addEventListener('scroll', onScroll, {passive:true});
onScroll();

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window && revealEls.length){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, {threshold:0.15});
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}