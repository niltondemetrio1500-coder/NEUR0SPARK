// Interactive Features for NeuroSpark Landing Page Clone

document.addEventListener('DOMContentLoaded', () => {
  // 1. Audio / Video Overlay Dismiss & Play interaction
  const overlay = document.getElementById('video-overlay');
  const video = document.getElementById('main-video') as HTMLVideoElement | null;

  if (overlay) {
    const handleActivate = () => {
      overlay.style.opacity = '0';
      overlay.style.pointerEvents = 'none';
      setTimeout(() => {
        overlay.style.display = 'none';
      }, 300);

      if (video) {
        video.muted = false;
        video.play().catch(() => {
          // Autoplay policy fallback: keep muted if required
          video.muted = true;
          video.play().catch(console.error);
        });
      }
    };

    overlay.addEventListener('click', handleActivate);
    overlay.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        handleActivate();
      }
    });
  }

  // 2. Countdown Timer (Hours, Minutes, Seconds)
  const hoursEl = document.getElementById('timer-hours');
  const minutesEl = document.getElementById('timer-minutes');
  const secondsEl = document.getElementById('timer-seconds');

  let remainingSeconds = 8 * 3600 + 43; // 08:00:43 starting from reference

  const updateTimerDisplay = () => {
    const h = Math.floor(remainingSeconds / 3600);
    const m = Math.floor((remainingSeconds % 3600) / 60);
    const s = remainingSeconds % 60;

    if (hoursEl) hoursEl.textContent = String(h).padStart(2, '0');
    if (minutesEl) minutesEl.textContent = String(m).padStart(2, '0');
    if (secondsEl) secondsEl.textContent = String(s).padStart(2, '0');
  };

  updateTimerDisplay();

  setInterval(() => {
    if (remainingSeconds > 0) {
      remainingSeconds--;
      updateTimerDisplay();
    }
  }, 1000);

  // 3. Accessible FAQ Accordion
  const accordionItems = document.querySelectorAll('.accordion-item');

  accordionItems.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger') as HTMLButtonElement | null;
    const panel = item.querySelector('.accordion-panel') as HTMLElement | null;

    if (trigger && panel) {
      trigger.addEventListener('click', () => {
        const isOpen = item.classList.contains('open');

        // Optional: close other accordions for cleaner experience
        accordionItems.forEach((other) => {
          if (other !== item) {
            other.classList.remove('open');
            const otherBtn = other.querySelector('.accordion-trigger');
            if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
          }
        });

        if (isOpen) {
          item.classList.remove('open');
          trigger.setAttribute('aria-expanded', 'false');
        } else {
          item.classList.add('open');
          trigger.setAttribute('aria-expanded', 'true');
        }
      });
    }
  });

  // 4. Safe CTA Smooth Scroll to Offer Section
  const ctaLinks = document.querySelectorAll<HTMLAnchorElement>('a[data-action="scroll-to-offer"]');
  ctaLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const offerSection = document.getElementById('offer-section');
      if (offerSection) {
        offerSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
