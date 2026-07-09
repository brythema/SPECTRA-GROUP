/* ═══════════════════════════════════════════════════
   SPECTRA GROUP — VIEW-MORE.JS
   Shared collapsible "view more / read more" behaviour
   for service card copy and long homepage paragraphs.
   Keeps text collapsed by default so photography stays
   the dominant visual weight of every page.
═══════════════════════════════════════════════════ */

'use strict';

(function initViewMore() {
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.scc-view-btn, .read-more-btn');
    if (!btn) return;

    const targetId = btn.dataset.target;
    const panel = targetId ? document.getElementById(targetId) : btn.previousElementSibling;
    if (!panel) return;

    const expanded = panel.classList.toggle('expanded');
    btn.classList.toggle('expanded', expanded);

    const label = btn.querySelector('.scc-view-label, .read-more-label');
    if (label) {
      label.textContent = expanded ? 'View less' : 'View more';
    } else {
      // read-more-btn text nodes (no inner span) — swap the leading text only
      const svg = btn.querySelector('svg');
      btn.textContent = expanded ? 'Read less ' : 'Read more ';
      if (svg) btn.appendChild(svg);
    }
  });
})();
