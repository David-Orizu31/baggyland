  // Nav scroll effect
  window.addEventListener('scroll', () => {
    document.getElementById('mainNav').classList.toggle('scrolled', window.scrollY > 60);
  });

  // Hamburger
  function toggleNav() {
    document.getElementById('navLinks').classList.toggle('open');
  }

  // Close nav on link click
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('navLinks').classList.remove('open');
    });
  });

  // Modals
  function openEnrollModal() {
    document.getElementById('enrollModal').classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeEnrollModal() {
    document.getElementById('enrollModal').classList.remove('active');
    document.body.style.overflow = '';
  }

  function openBookingModal(name) {
    document.getElementById('bookedTalentName').textContent = name;
    document.getElementById('bookingModal').classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeBookingModal() {
    document.getElementById('bookingModal').classList.remove('active');
    document.body.style.overflow = '';
  }

  // Close on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', function(e) {
      if (e.target === this) {
        this.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Toast
  function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    setTimeout(() => t.classList.remove('show'), 3500);
  }

  // Form handlers
  function handleContactSubmit(e) {
    e.preventDefault();
    showToast('✓ Message sent! We\'ll be in touch soon.');
    e.target.reset();
  }

  function handleEnrollSubmit(e) {
    e.preventDefault();
    closeEnrollModal();
    showToast('🎓 Enrollment submitted! Check your email for confirmation.');
    e.target.reset();
  }

  function handleBookingSubmit(e) {
    e.preventDefault();
    closeBookingModal();
    showToast('⭐ Booking request sent! Our talent manager will contact you.');
    e.target.reset();
  }

  function handleNewsletter() {
    showToast('📧 You\'ve been added to our newsletter!');
  }

  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.style.opacity = '1';
        e.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.service-card, .project-card, .talent-card, .crew-card, .testimonial-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
  });