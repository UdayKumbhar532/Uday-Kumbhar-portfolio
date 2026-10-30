/* =====================================================
   RESUME VIEWER CONTROLLER (js/resume.js)
   Handles fullscreen, toolbar interactions, and navigation
   ===================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavbar();
  initFullscreen();
  initPdfHandling();
});

// ── Theme Toggle (shared logic with main page) ──
function initThemeToggle() {
  const STORAGE_KEY = 'portfolio-theme';
  const toggle = document.getElementById('theme-toggle');

  function getPreferredTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
    if (toggle) {
      toggle.title = theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode';
      toggle.setAttribute('aria-label', toggle.title);
    }
  }

  applyTheme(getPreferredTheme());

  if (toggle) {
    toggle.addEventListener('click', () => {
      const current = document.documentElement.getAttribute('data-theme');
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
  }

  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
}

// ── Mobile Navigation Toggle ──
function initNavbar() {
  const navToggle = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (!navToggle || !navLinks) return;

  navToggle.addEventListener('click', () => {
    const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', !isExpanded);
    navToggle.classList.toggle('active');
    navLinks.classList.toggle('active');
    document.body.classList.toggle('nav-open');
  });

  // Close when clicking any nav link
  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navToggle.classList.remove('active');
      navLinks.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
      document.body.classList.remove('nav-open');
    });
  });
}

// ── Fullscreen Controls ──
function initFullscreen() {
  const container = document.getElementById('resume-viewer-container');
  const fullscreenBtn = document.getElementById('btn-fullscreen');
  const exitBtn = document.getElementById('btn-exit-fullscreen');

  if (!container || !fullscreenBtn) return;

  function isFullscreen() {
    return !!(
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.mozFullScreenElement ||
      document.msFullscreenElement
    );
  }

  function enterFullscreen() {
    if (container.requestFullscreen) {
      container.requestFullscreen();
    } else if (container.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    } else if (container.mozRequestFullScreen) {
      container.mozRequestFullScreen();
    } else if (container.msRequestFullscreen) {
      container.msRequestFullscreen();
    }
  }

  function exitFullscreen() {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }

  function toggleFullscreen() {
    if (isFullscreen()) {
      exitFullscreen();
    } else {
      enterFullscreen();
    }
  }

  function updateFullscreenUI() {
    const active = isFullscreen();
    if (active) {
      fullscreenBtn.innerHTML = '<i class="fa-solid fa-compress"></i> <span>Exit Full Screen</span>';
      fullscreenBtn.title = 'Exit Fullscreen (Esc)';
      container.classList.add('is-fullscreen');
    } else {
      fullscreenBtn.innerHTML = '<i class="fa-solid fa-expand"></i> <span>Full Screen</span>';
      fullscreenBtn.title = 'View Fullscreen';
      container.classList.remove('is-fullscreen');
    }
  }

  fullscreenBtn.addEventListener('click', toggleFullscreen);

  if (exitBtn) {
    exitBtn.addEventListener('click', exitFullscreen);
  }

  // Standard and vendor fullscreen change events
  ['fullscreenchange', 'webkitfullscreenchange', 'mozfullscreenchange', 'MSFullscreenChange'].forEach(event => {
    document.addEventListener(event, updateFullscreenUI);
  });
}

// ── PDF Handling & Fallbacks ──
function initPdfHandling() {
  const resumeObject = document.getElementById('resume-object');
  const fallbackCard = document.getElementById('resume-fallback');

  if (!resumeObject) return;

  // If the browser triggers an error loading the object, reveal fallback card
  resumeObject.addEventListener('error', () => {
    if (fallbackCard) {
      fallbackCard.style.display = 'flex';
      resumeObject.style.display = 'none';
    }
  });
}
