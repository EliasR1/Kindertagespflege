// === Villa Gänseblümchen – script.js ===

// Mobile hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('open');
});

function closeMenu() {
  mobileMenu.classList.remove('open');
}

// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const top = target.getBoundingClientRect().top + window.pageYOffset - navHeight - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// Scroll-in animation for cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.card, .team-card, .daily-item, .hero-img-card, .gallery-item').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Contact form – demo handler (shows success, does not actually send)

const form = document.getElementById('kontaktForm');
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const success = document.getElementById('formSuccess');
    const btn = form.querySelector('button[type="submit"]');
    btn.textContent = 'Wird gesendet...';
    btn.disabled = true;

    const data = new FormData(form);

    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data
    })
    .then(res => res.json())
    .then(json => {
      if (json.success) {
        success.style.display = 'block';
        form.reset();
        success.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        setTimeout(() => { success.style.display = 'none'; }, 6000);
      } else {
        alert('Fehler beim Senden. Bitte erneut versuchen.');
      }
      btn.textContent = 'Nachricht senden 🌸';
      btn.disabled = false;
    })
    .catch(() => {
      alert('Netzwerkfehler. Bitte erneut versuchen.');
      btn.textContent = 'Nachricht senden 🌸';
      btn.disabled = false;
    });
  });
}