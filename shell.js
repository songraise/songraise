(function(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();

  const nav = [
    { href: 'index.html', label: 'Home' },
    { href: 'browse.html', label: 'Browse Campaigns' },
    { href: 'how-it-works.html', label: 'How It Works' },
    { href: 'dashboard.html', label: 'Dashboard / Login' }
  ];

  function isActive(href){
    return path === href.toLowerCase();
  }

  const headerHTML = `
    <div class="sr-topbar">
      <div class="sr-brand">SongRaiseLite</div>
      <div class="sr-nav">
        ${nav.map(item => `
          <a href="${item.href}" class="${isActive(item.href) ? 'primary' : ''}">
            ${item.label}
          </a>
        `).join('')}
      </div>
    </div>
  `;

  const footerHTML = `
    <div class="sr-footer">
      <div class="sr-muted">SongRaiseLite is currently running pilot campaigns.</div>
      <div>
        <a href="index.html">Home</a> ·
        <a href="browse.html">Browse</a> ·
        <a href="how-it-works.html">How It Works</a> ·
        <a href="dashboard.html">Dashboard</a>
      </div>
    </div>
  `;

  // Inject header + footer if placeholders exist
  const headerMount = document.getElementById('sr-header');
  const footerMount = document.getElementById('sr-footer');

  if (headerMount) headerMount.innerHTML = headerHTML;
  if (footerMount) footerMount.innerHTML = footerHTML;

  // Ensure consistent max-width container if using sr-wrap mount
  const wrap = document.querySelector('.sr-wrap');
  if (!wrap) {
    // If the page didn't include sr-wrap, we won't auto-wrap to avoid breaking layouts.
  }
})();

