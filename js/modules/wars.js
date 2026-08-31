/**
 * Great Wrestling Wars Module
 */
window.WarsModule = (function() {
  function renderWars() {
    const container = document.getElementById('wars-timeline-container');
    if (!container || !window.WARS_DATA) return;

    container.innerHTML = '';

    window.WARS_DATA.forEach(war => {
      const warEl = document.createElement('div');
      warEl.className = 'glass-card p-5 sm:p-6 rounded-2xl border border-zinc-800/90 relative overflow-hidden space-y-4 hover:border-zinc-700/80 transition';
      
      const badgeStyles = {
        amber: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
        red: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
        indigo: 'bg-indigo-500/15 text-indigo-400 border-indigo-500/30',
        cyan: 'bg-cyan-500/15 text-cyan-400 border-cyan-500/30'
      };

      const outcomeStyles = {
        amber: 'bg-amber-950/50 text-amber-300 border-amber-800/60',
        red: 'bg-yellow-950/50 text-yellow-300 border-yellow-800/60',
        indigo: 'bg-emerald-950/50 text-emerald-300 border-emerald-800/60',
        cyan: 'bg-cyan-950/50 text-cyan-300 border-cyan-800/60'
      };

      const badgeCls = badgeStyles[war.badgeColor] || badgeStyles.amber;
      const outcomeCls = outcomeStyles[war.badgeColor] || outcomeStyles.amber;

      let cardsHtml = '';
      war.cards.forEach(c => {
        cardsHtml += `
          <div class="bg-zinc-900/80 p-4 rounded-xl border border-zinc-800">
            <strong class="text-white block mb-1 font-semibold text-xs tracking-wide">${c.tag}</strong>
            <p class="text-xs text-zinc-300 leading-relaxed">${c.desc}</p>
          </div>
        `;
      });

      warEl.innerHTML = `
        <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-2 border-b border-zinc-800/60">
          <div>
            <span class="px-2.5 py-0.5 text-xs font-mono font-bold border rounded-full ${badgeCls}">${war.years}</span>
            <h3 class="text-lg sm:text-xl font-black text-white mt-2">${war.title}</h3>
          </div>
          <span class="text-xs font-medium px-3 py-1 border rounded-full w-fit ${outcomeCls}">
            Outcome: ${war.outcome}
          </span>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-1">
          ${cardsHtml}
        </div>
      `;

      container.appendChild(warEl);
    });

    if (window.lucide) window.lucide.createIcons();
  }

  return {
    init: renderWars
  };
})();