(function () {
  const docEl = document.documentElement;

  // 移动端菜单开关
  const navToggle = document.querySelector('.nav-toggle');
  const siteNav = document.getElementById('site-nav');
  if (navToggle && siteNav) {
    navToggle.addEventListener('click', function () {
      const isOpen = siteNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', String(isOpen));
    });
    // 关闭菜单（点击导航区域外）
    document.addEventListener('click', function (e) {
      if (!siteNav.classList.contains('open')) return;
      const within = siteNav.contains(e.target) || navToggle.contains(e.target);
      if (!within) {
        siteNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // 主题切换（跟随系统优先，可手动覆盖）
  const themeToggle = document.querySelector('.theme-toggle');
  const storageKey = 'pref-theme';
  function applyTheme(val) {
    if (val === 'dark') docEl.setAttribute('data-theme', 'dark');
    else docEl.removeAttribute('data-theme');
  }
  try {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'dark' || saved === 'light') applyTheme(saved);
  } catch (_) {}
  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      const next = isDark ? 'light' : 'dark';
      applyTheme(next);
      try { localStorage.setItem(storageKey, next); } catch (_) {}
    });
  }
})();


