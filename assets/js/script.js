(() => {
  const root=document.documentElement, body=document.body;
  const header=document.querySelector('[data-header]');
  const navbar=document.querySelector('.navbar-container');
  const toggle=document.querySelector('[data-menu-toggle]');
  const menu=document.querySelector('[data-mobile-menu]');
  const overlay=document.querySelector('[data-mobile-menu-overlay]');
  const dropdown=document.querySelector('[data-nav-dropdown]');
  const dropdownToggle=document.querySelector('[data-nav-dropdown-toggle]');
  const dropdownMenu=document.querySelector('[data-nav-dropdown-menu]');
  const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.classList.add('js-ready');
  const starTickers=document.querySelectorAll('[data-star-ticker]');
  let dropdownOpenTimer, dropdownCloseTimer;

  const buildStarTicker=(ticker)=>{
    if(!ticker)return;
    ticker.replaceChildren();
    const track=document.createElement('div');
    track.className='star-ticker-track';
    const group=document.createElement('div');
    group.className='star-ticker-group';
    const mobile=window.innerWidth<=720;
    const starWidth=mobile?14:16;
    const gap=mobile?18:22;
    const minimumWidth=Math.max(window.innerWidth,ticker.clientWidth)+240;
    const starCount=Math.max(32,Math.ceil(minimumWidth/(starWidth+gap)));
    for(let index=0;index<starCount;index+=1){
      const star=document.createElement('img');
      star.className='star-ticker-star';
      star.src='assets/img/white-star.png';
      star.alt='';
      star.width=starWidth;
      star.height=starWidth;
      star.decoding='async';
      group.appendChild(star);
    }
    track.appendChild(group);
    track.appendChild(group.cloneNode(true));
    ticker.appendChild(track);
    requestAnimationFrame(()=>{
      const firstGroup=track.firstElementChild;
      if(!firstGroup)return;
      track.style.setProperty('--ticker-shift',`${-firstGroup.getBoundingClientRect().width}px`);
    });
  };
  starTickers.forEach(buildStarTicker);

  const applyReveal=(element,direction='up',delay=0,force=false)=>{
    if(!element)return;
    if(element.hasAttribute('data-reveal')&&!force)return;
    element.setAttribute('data-reveal',direction);
    if(delay)element.setAttribute('data-reveal-delay',String(delay));
    else element.removeAttribute('data-reveal-delay');
  };
  const staggerReveal=(selector,direction='up',step=70)=>{
    document.querySelectorAll(selector).forEach((element,index)=>applyReveal(element,direction,Math.min(index*step,420)));
  };
  document.querySelectorAll('.page-hero-copy,.home-hero-copy').forEach(copy=>{
    copy.removeAttribute('data-reveal');
    copy.removeAttribute('data-reveal-delay');
    Array.from(copy.children).forEach((element,index)=>applyReveal(element,'up',index*70,true));
  });
  document.querySelectorAll('.page-hero-container>.media-placeholder,.home-hero-media').forEach(element=>applyReveal(element,'left',120,true));
  document.querySelectorAll('.section-heading,.centered-copy').forEach(element=>applyReveal(element,'up'));
  document.querySelectorAll('.story-copy,.download-copy,.event-copy,.form-copy,.national-copy').forEach(element=>applyReveal(element,'right'));
  document.querySelectorAll('.story-media,.event-media,.combined-feature-media,.national-contact').forEach(element=>applyReveal(element,'left',80));
  staggerReveal('.officer-card,.issue-card,.politics-item,.contact-info-item','up',65);
  staggerReveal('.photo-grid .media-placeholder,.placeholder-resource-grid .media-placeholder,.logo-placeholder-grid .media-placeholder','up',55);
  staggerReveal('.corona-gallery-item,.event-photo-item,.simple-photo-item,.contact-resource-card,.help-resource-row,.youth-photo-item,.event-photo-feature,.event-photo-secondary','up',45);
  document.querySelectorAll('.event-hero-copy').forEach(element=>applyReveal(element,'right'));
  document.querySelectorAll('.event-hero-media,.video-embed-card,.youth-feature-item,.event-photo-final').forEach(element=>applyReveal(element,'left',100));
  staggerReveal('.video-card,.event-code,.resource-layout-container>.media-placeholder','up',80);
  document.querySelectorAll('.pre-footer-cta-container').forEach(element=>applyReveal(element,'up'));
  const revealItems=document.querySelectorAll('[data-reveal]');

  const cancelDropdownTimers=()=>{
    if(dropdownOpenTimer){window.clearTimeout(dropdownOpenTimer);dropdownOpenTimer=undefined}
    if(dropdownCloseTimer){window.clearTimeout(dropdownCloseTimer);dropdownCloseTimer=undefined}
  };
  const closeDropdown=()=>{
    cancelDropdownTimers();
    if(!dropdownToggle||!dropdownMenu)return;
    dropdownToggle.setAttribute('aria-expanded','false');
    dropdownMenu.hidden=true;
  };
  const openDropdown=()=>{
    cancelDropdownTimers();
    if(!dropdownToggle||!dropdownMenu)return;
    dropdownToggle.setAttribute('aria-expanded','true');
    dropdownMenu.hidden=false;
  };
  const scheduleDropdownOpen=()=>{
    cancelDropdownTimers();
    dropdownOpenTimer=window.setTimeout(openDropdown,120);
  };
  const scheduleDropdownClose=()=>{
    cancelDropdownTimers();
    dropdownCloseTimer=window.setTimeout(closeDropdown,240);
  };
  if(dropdown&&dropdownToggle&&dropdownMenu){
    closeDropdown();
    dropdownToggle.addEventListener('click',e=>{
      e.stopPropagation();
      dropdownToggle.getAttribute('aria-expanded')==='true'?closeDropdown():openDropdown();
    });
    dropdown.addEventListener('mouseenter',scheduleDropdownOpen);
    dropdown.addEventListener('mouseleave',scheduleDropdownClose);
    dropdownMenu.addEventListener('mouseenter',cancelDropdownTimers);
    dropdownMenu.addEventListener('mouseleave',scheduleDropdownClose);
    dropdown.addEventListener('focusin',openDropdown);
    dropdown.addEventListener('focusout',e=>{if(!dropdown.contains(e.relatedTarget))scheduleDropdownClose()});
    document.addEventListener('click',e=>{if(!dropdown.contains(e.target))closeDropdown()});
    window.addEventListener('pageshow',closeDropdown);
  }

  const syncMobileMenuPosition=()=>{
    if(!navbar)return;
    root.style.setProperty('--mobile-menu-top',`${Math.ceil(navbar.getBoundingClientRect().bottom)}px`);
  };

  const closeMenu=()=>{
    if(!toggle||!menu)return;
    toggle.setAttribute('aria-expanded','false');
    toggle.setAttribute('aria-label','Open navigation');
    menu.hidden=true;
    if(overlay)overlay.hidden=true;
    body.classList.remove('menu-open');
  };
  const openMenu=()=>{
    if(!toggle||!menu)return;
    syncMobileMenuPosition();
    toggle.setAttribute('aria-expanded','true');
    toggle.setAttribute('aria-label','Close navigation');
    menu.hidden=false;
    if(overlay)overlay.hidden=false;
    body.classList.add('menu-open');
  };
  if(toggle&&menu){
    toggle.addEventListener('click',()=>toggle.getAttribute('aria-expanded')==='true'?closeMenu():openMenu());
    menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
    if(overlay)overlay.addEventListener('click',closeMenu);
    window.addEventListener('resize',()=>{
      if(window.innerWidth>1180)closeMenu();
      else if(toggle.getAttribute('aria-expanded')==='true')syncMobileMenuPosition();
    },{passive:true});
  }

  let lastTickerWidth=window.innerWidth;
  window.addEventListener('resize',()=>{
    if(Math.abs(window.innerWidth-lastTickerWidth)<120)return;
    lastTickerWidth=window.innerWidth;
    starTickers.forEach(buildStarTicker);
  },{passive:true});

  document.addEventListener('keydown',e=>{if(e.key==='Escape'){closeMenu();closeDropdown()}});
  revealItems.forEach(item=>item.style.setProperty('--reveal-delay',`${Number(item.dataset.revealDelay||0)}ms`));
  if(reduceMotion||!('IntersectionObserver'in window)){
    revealItems.forEach(i=>i.classList.add('is-visible'));
  }else{
    const obs=new IntersectionObserver((entries,instance)=>entries.forEach(entry=>{
      if(!entry.isIntersecting)return;
      entry.target.classList.add('is-visible');
      instance.unobserve(entry.target);
    }),{rootMargin:'0px 0px -8% 0px',threshold:.12});
    revealItems.forEach(i=>obs.observe(i));
  }
  document.querySelectorAll('[data-current-year]').forEach(t=>t.textContent=String(new Date().getFullYear()));
})();
