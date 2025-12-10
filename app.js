(function(){
  const header = document.querySelector('header');
  const headerHeight = header ? header.offsetHeight : 0;

  function scrollToWithOffset(targetEl) {
    const rect = targetEl.getBoundingClientRect();
    const absoluteTop = window.pageYOffset + rect.top;
    const offset = headerHeight + 10; 
    const targetPos = absoluteTop - offset;

    window.scrollTo({
      top: Math.max(targetPos, 0),
      behavior: 'smooth'
    });

    try { history.pushState(null, '', '#' + targetEl.id); } catch(e) {}
  }

  document.querySelectorAll('a[href^="#"]').forEach(function(anchor){
    anchor.addEventListener('click', function(e){
      const href = anchor.getAttribute('href');
      if (!href || href === '#' ) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      scrollToWithOffset(target);
    });
  });

  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    console.info('User prefers reduced motion — smooth scrolling may be disabled by browser/OS.');
  }
})();

const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');
const navLinks = sidebar.querySelectorAll('a'); 
const body = document.body;

function toggleSidebar() {
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    body.classList.toggle('no-scroll'); 
}
menuBtn.addEventListener('click', toggleSidebar);
overlay.addEventListener('click', toggleSidebar);
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (sidebar.classList.contains('active')) {
            toggleSidebar();
        }
    });
});