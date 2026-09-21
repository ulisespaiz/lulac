(() => {
  const root = document.documentElement;
  const body = document.body;
  const navbar = document.querySelector('.navbar');
  const toggle = document.querySelector('[data-menu-toggle]');
  const menu = document.querySelector('[data-mobile-menu]');
  const overlay = document.querySelector('[data-mobile-menu-overlay]');
  const dropdown = document.querySelector('[data-nav-dropdown]');
  const dropdownToggle = document.querySelector('[data-nav-dropdown-toggle]');
  const dropdownMenu = document.querySelector('[data-nav-dropdown-menu]');
  let dropdownOpenTimer;
  let dropdownCloseTimer;

  // Desktop "More" dropdown
  const cancelDropdownTimers = () => {
    window.clearTimeout(dropdownOpenTimer);
    window.clearTimeout(dropdownCloseTimer);
  };
  const closeDropdown = () => {
    cancelDropdownTimers();
    if (!dropdownToggle || !dropdownMenu) return;
    dropdownToggle.setAttribute('aria-expanded', 'false');
    dropdownMenu.hidden = true;
  };
  const openDropdown = () => {
    cancelDropdownTimers();
    if (!dropdownToggle || !dropdownMenu) return;
    dropdownToggle.setAttribute('aria-expanded', 'true');
    dropdownMenu.hidden = false;
  };
  if (dropdown && dropdownToggle && dropdownMenu) {
    closeDropdown();
    dropdownToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdownToggle.getAttribute('aria-expanded') === 'true' ? closeDropdown() : openDropdown();
    });
    dropdown.addEventListener('mouseenter', () => { cancelDropdownTimers(); dropdownOpenTimer = window.setTimeout(openDropdown, 100); });
    dropdown.addEventListener('mouseleave', () => { cancelDropdownTimers(); dropdownCloseTimer = window.setTimeout(closeDropdown, 220); });
    dropdown.addEventListener('focusin', openDropdown);
    dropdown.addEventListener('focusout', (e) => { if (!dropdown.contains(e.relatedTarget)) closeDropdown(); });
    document.addEventListener('click', (e) => { if (!dropdown.contains(e.target)) closeDropdown(); });
    window.addEventListener('pageshow', closeDropdown);
  }

  // Mobile menu
  const syncMenuTop = () => {
    if (!navbar) return;
    root.style.setProperty('--mobile-menu-top', `${Math.ceil(navbar.getBoundingClientRect().bottom)}px`);
  };
  const closeMenu = () => {
    if (!toggle || !menu) return;
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    menu.hidden = true;
    if (overlay) overlay.hidden = true;
    body.classList.remove('menu-open');
  };
  const openMenu = () => {
    if (!toggle || !menu) return;
    syncMenuTop();
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
    menu.hidden = false;
    if (overlay) overlay.hidden = false;
    body.classList.add('menu-open');
  };
  if (toggle && menu) {
    toggle.addEventListener('click', () => (toggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu()));
    menu.querySelectorAll('a').forEach((a) => a.addEventListener('click', closeMenu));
    if (overlay) overlay.addEventListener('click', closeMenu);
    window.addEventListener('resize', () => {
      if (window.innerWidth > 960) closeMenu();
      else if (toggle.getAttribute('aria-expanded') === 'true') syncMenuTop();
    }, { passive: true });
  }

  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') { closeMenu(); closeDropdown(); } });
  document.querySelectorAll('[data-current-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });
})();
