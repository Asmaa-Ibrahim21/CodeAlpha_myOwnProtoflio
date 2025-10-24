// 🌙 Dark mode toggle with localStorage
const modeBtn = document.getElementById('modeToggle');
const saved = localStorage.getItem('theme');

if (saved === 'dark') {
  document.body.classList.add('dark');
  modeBtn.textContent = '☀️';
}

modeBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isDark = document.body.classList.contains('dark');
  modeBtn.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
});


// 📄 CV button — open Google Drive link directly
const downloadCV = document.getElementById('downloadCV');
const openCV = document.getElementById('openCV');
const previewCV = document.getElementById('previewCV');

// رابط الـ CV على Google Drive
const cvLink = "https://drive.google.com/file/d/1kgdYHfaVgJjkB9nyfQArIujbNL9wc4-m/view?usp=drive_link";

// زر التحميل الرئيسي (في الـ header)
if (downloadCV) {
  downloadCV.addEventListener('click', () => {
    window.open(cvLink, '_blank');
  });
}

// زر المعاينة أو الفتح (في القسم)
[openCV, previewCV].forEach(btn => {
  if (btn) {
    btn.addEventListener('click', () => {
      window.open(cvLink, '_blank');
    });
  }
});


// 📧 Simple contact form (opens mail client)
function openMail(e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const msg = document.getElementById('message').value;
  const subject = encodeURIComponent('Portfolio message from ' + name);
  const body = encodeURIComponent(msg + "\n\nContact email: " + email);
  window.location.href = `mailto:asmaaibrahim2194@gmail.com?subject=${subject}&body=${body}`;
}


// ✨ Reveal on scroll animation
const els = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('show');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });

els.forEach(el => io.observe(el));


// 🔗 Smooth highlight active nav
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  const y = window.scrollY + 120;
  sections.forEach(s => {
    if (y >= s.offsetTop && y < s.offsetTop + s.offsetHeight) {
      navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === '#' + s.id);
      });
    }
  });
});
