// Simple animation effet sur scroll
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('.section');
  const trigger = window.innerHeight * 0.8;

  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < trigger) {
      sec.style.opacity = 1;
      sec.style.transform = 'translateY(0)';
    }
  });
});

// Initial style
document.querySelectorAll('.section').forEach(sec => {
  sec.style.opacity = 0;
  sec.style.transform = 'translateY(60px)';
  sec.style.transition = '0.8s ease';
});
