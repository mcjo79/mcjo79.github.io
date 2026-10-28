(function () {
  'use strict';

  var root = document.documentElement;
  var KEY = 'mcjo79-theme';
  var toggle = document.querySelector('[data-theme-toggle]');

  function label() {
    if (!toggle) return;
    var dark = root.getAttribute('data-theme') === 'dark';
    toggle.setAttribute('aria-label', dark ? toggle.dataset.darkLabel : toggle.dataset.lightLabel);
  }

  if (toggle) {
    label();
    toggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem(KEY, next); } catch (e) {}
      label();
    });
  }

  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });
})();
