document.addEventListener('DOMContentLoaded', function () {

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Shop page: category filter
  var filterBar = document.getElementById('filter-bar');
  var grid = document.getElementById('shop-grid');
  var emptyState = document.getElementById('empty-state');

  if (filterBar && grid) {
    var cards = grid.querySelectorAll('.tag-card');

    filterBar.addEventListener('click', function (e) {
      var btn = e.target.closest('.filter-btn');
      if (!btn) return;

      filterBar.querySelectorAll('.filter-btn').forEach(function (b) {
        b.classList.remove('active');
      });
      btn.classList.add('active');

      var filter = btn.getAttribute('data-filter');
      var visibleCount = 0;

      cards.forEach(function (card) {
        var match = filter === 'all' || card.getAttribute('data-category') === filter;
        card.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });

      if (emptyState) {
        emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  }

  // "Add" buttons: lightweight feedback, no real cart/backend yet
  document.querySelectorAll('.add-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var name = btn.getAttribute('data-name') || 'Item';
      var original = btn.textContent;
      btn.textContent = 'Added ✓';
      btn.disabled = true;
      setTimeout(function () {
        btn.textContent = original;
        btn.disabled = false;
      }, 1400);
      console.log(name + ' added to cart (demo only — wire this up to a real cart/checkout).');
    });
  });

  // Newsletter form (front-end only demo)
  var newsletterForm = document.getElementById('newsletter-form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var emailInput = document.getElementById('newsletter-email');
      var btn = newsletterForm.querySelector('button');
      if (emailInput && emailInput.checkValidity()) {
        btn.textContent = 'You\'re on the list ✓';
        emailInput.value = '';
        setTimeout(function () { btn.textContent = 'Notify me'; }, 2200);
      }
    });
  }

  // Contact form (front-end only demo — connect to a form backend or email service to go live)
  var contactForm = document.getElementById('contact-form');
  var formNote = document.getElementById('form-note');
  if (contactForm && formNote) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        formNote.textContent = 'Please fill in your name, email, and message.';
        formNote.classList.add('show');
        return;
      }
      formNote.textContent = 'Thanks — your message is saved locally in this demo. Connect this form to Formspree, Netlify Forms, or your own backend to actually receive messages.';
      formNote.classList.add('show');
      contactForm.reset();
    });
  }

});
