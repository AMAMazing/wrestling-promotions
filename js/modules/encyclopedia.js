/**
 * Promotions Encyclopedia & Interactive Catalog
 */
window.EncyclopediaModule = (function() {
  function renderCatalog() {
    const grid = document.getElementById('promotions-catalog-grid');
    if (!grid) return;
    grid.innerHTML = '';

    Object.values(window.PROMOTIONS_DATA).forEach(p => {
      const card = document.createElement('div');
      card.id = `promo-card-${p.id}`;
      card.className = `promo-card glass-card rounded-2xl p-5 space-y-3.5 border-t-4 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-500/80 flex flex-col justify-between`;
      card.style.borderTopColor = p.color;

      card.innerHTML = `
        <div class="space-y-3">
          <div class="flex items-start justify-between gap-2">
            <div>
              <span class="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${p.badgeBg}">
                ${p.status} • Est. ${p.founded}${p.defunct ? '–' + p.defunct : ''}
              </span>
              <h3 class="text-lg font-black text-white mt-1.5 flex items-center gap-1.5">
                <span>${p.emoji || '⭐'}</span> ${p.name}
              </h3>
              <span class="text-xs text-zinc-400 block">${p.fullName}</span>
            </div>
            <span class="text-xs font-mono text-zinc-400 bg-zinc-900/90 px-2 py-1 rounded-lg border border-zinc-800">${p.region}</span>
          </div>

          <p class="text-xs text-zinc-300 leading-relaxed">${p.bio}</p>

          <div class="space-y-1.5 pt-2 text-xs border-t border-zinc-800/80">
            <div class="flex justify-between">
              <span class="text-zinc-400">Headquarters:</span>
              <span class="text-zinc-200 truncate max-w-[180px]">${p.headquarters}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-zinc-400">Peak Gate Record:</span>
              <strong class="text-emerald-400 text-right">${p.allTimePeakGate}</strong>
            </div>
            <div class="flex justify-between">
              <span class="text-zinc-400">Flagship Event:</span>
              <span class="text-amber-400 font-semibold">${p.signatureEvent}</span>
            </div>
            <div class="flex flex-col pt-1">
              <span class="text-zinc-400 text-[11px]">Legendary Aces & Headliners:</span>
              <span class="text-zinc-200 text-[11px] font-medium mt-0.5">${p.keyAces}</span>
            </div>
          </div>
        </div>

        <div class="pt-3 border-t border-zinc-800/80 flex items-center justify-between">
          <button onclick="window.EncyclopediaModule.setYearFromPromo('${p.id}')" class="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition">
            Explore in Timeline <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      `;

      grid.appendChild(card);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function setYearFromPromo(promoId) {
    let bestYear = 1980;
    let maxScore = -1;
    window.TimelineModule.YEAR_KEYS.forEach(yr => {
      const item = window.TIMELINE_DATA[yr].rankings.find(r => r.id === promoId);
      if (item && item.score > maxScore) {
        maxScore = item.score;
        bestYear = yr;
      }
    });

    if (window.AppRouter) {
      window.AppRouter.switchTab('timeline');
    }
    window.TimelineModule.setYear(bestYear);
  }

  function filterPromotions() {
    const searchInput = document.getElementById('search-promo-input');
    const regionSelect = document.getElementById('filter-region-select');
    const statusSelect = document.getElementById('filter-status-select');

    const search = searchInput ? searchInput.value.toLowerCase() : '';
    const region = regionSelect ? regionSelect.value : 'ALL';
    const status = statusSelect ? statusSelect.value : 'ALL';

    Object.values(window.PROMOTIONS_DATA).forEach(p => {
      const card = document.getElementById(`promo-card-${p.id}`);
      if (!card) return;

      const matchesSearch = p.name.toLowerCase().includes(search) || 
                            p.fullName.toLowerCase().includes(search) || 
                            p.keyAces.toLowerCase().includes(search) ||
                            p.headquarters.toLowerCase().includes(search);
      const matchesRegion = (region === 'ALL') || (p.region === region);
      const matchesStatus = (status === 'ALL') || (p.status === status);

      if (matchesSearch && matchesRegion && matchesStatus) {
        card.classList.remove('hidden');
      } else {
        card.classList.add('hidden');
      }
    });
  }

  function initListeners() {
    const searchInput = document.getElementById('search-promo-input');
    const regionSelect = document.getElementById('filter-region-select');
    const statusSelect = document.getElementById('filter-status-select');

    if (searchInput) searchInput.addEventListener('input', filterPromotions);
    if (regionSelect) regionSelect.addEventListener('change', filterPromotions);
    if (statusSelect) statusSelect.addEventListener('change', filterPromotions);
  }

  return {
    init: function() {
      renderCatalog();
      initListeners();
    },
    setYearFromPromo,
    filterPromotions
  };
})();