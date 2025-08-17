
// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('.nav-links');
if (toggle) {
  toggle.addEventListener('click', () => menu.classList.toggle('show'));
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    if (id.length > 1) {
      e.preventDefault();
      document.querySelector(id).scrollIntoView({behavior:'smooth'});
      menu && menu.classList.remove('show');
    }
  });
});

// Copy buttons
document.querySelectorAll('.copy').forEach(btn => {
  btn.addEventListener('click', async () => {
    const text = btn.getAttribute('data-copy');
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = 'Copied!';
      setTimeout(()=>btn.textContent='Copy', 1200);
    } catch (e) { console.log(e); }
  });
});

// Year
document.getElementById('year').textContent = new Date().getFullYear();
