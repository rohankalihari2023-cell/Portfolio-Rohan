/**
 * ROHAN KALIHARI — CLEAN PORTFOLIO INTERACTION ENGINE
 * HackerRank-Inspired Micro-Animations & Scroll Observers
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. HackerRank-style Scroll Reveal Observer
  initScrollReveal();

  // 3. Subtle Typewriter
  initTypewriter();
});

// Scroll Reveal with zero GPU lag
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(el => observer.observe(el));
}

// HackerRank interactive "Run Code" execution
function executeCode() {
  const btn = document.getElementById('run-code-btn');
  const out = document.getElementById('hr-output');
  if (!btn || !out) return;

  btn.innerHTML = 'Compiling...';
  btn.style.opacity = '0.7';

  setTimeout(() => {
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Run Code';
    btn.style.opacity = '1';
    out.innerHTML = `
      <span class="hr-pass">✓ Test Cases Passed: 3/3</span>
      <span style="color: var(--text-dim); margin-left: 10px;">CPU Time: 0.02s • Memory: 14.2 MB</span>
      <div style="color: #cbd5e1; margin-top: 4px;">Output: {'status': 'Ready to innovate', 'cgpa': 6.5, 'passed': True}</div>
    `;
  }, 350);
}

// Subtle role typewriter
function initTypewriter() {
  const roles = [
    "AI & Machine Learning Engineer",
    "NLP & Transformer Specialist",
    "Full-Stack Python & Flask Developer"
  ];
  let rIdx = 0, cIdx = 0, isDel = false;
  const el = document.getElementById('type-text');
  if (!el) return;

  function type() {
    const text = roles[rIdx];
    el.textContent = isDel ? text.substring(0, cIdx - 1) : text.substring(0, cIdx + 1);
    cIdx = isDel ? cIdx - 1 : cIdx + 1;

    let speed = isDel ? 25 : 60;
    if (!isDel && cIdx === text.length) {
      speed = 2200;
      isDel = true;
    } else if (isDel && cIdx === 0) {
      isDel = false;
      rIdx = (rIdx + 1) % roles.length;
      speed = 350;
    }
    setTimeout(type, speed);
  }
  type();
}