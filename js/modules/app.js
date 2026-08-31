/**
 * Main Application Coordinator & Tab Router
 */
window.AppRouter = (function() {
  const views = ['timeline', 'analytics', 'versus', 'promotions', 'wars'];

  function switchTab(tabId) {
    views.forEach(v => {
      const viewEl = document.getElementById(`view-${v}`);
      if (viewEl) viewEl.classList.add('hidden');

      const navBtn = document.getElementById(`nav-${v}`);
      if (navBtn) {
        navBtn.classList.remove('bg-amber-400', 'text-black', 'shadow-sm');
        navBtn.classList.add('text-zinc-400');
      }

      const mobBtn = document.getElementById(`mob-${v}`);
      if (mobBtn) {
        mobBtn.classList.remove('bg-amber-400', 'text-black', 'font-bold');
        mobBtn.classList.add('text-zinc-400', 'bg-zinc-900');
      }
    });

    const activeView = document.getElementById(`view-${tabId}`);
    if (activeView) activeView.classList.remove('hidden');

    const activeBtn = document.getElementById(`nav-${tabId}`);
    if (activeBtn) {
      activeBtn.classList.remove('text-zinc-400');
      activeBtn.classList.add('bg-amber-400', 'text-black', 'shadow-sm');
    }

    const activeMob = document.getElementById(`mob-${tabId}`);
    if (activeMob) {
      activeMob.classList.remove('text-zinc-400', 'bg-zinc-900');
      activeMob.classList.add('bg-amber-400', 'text-black', 'font-bold');
    }

    if (tabId === 'analytics' && window.AnalyticsModule) {
      window.AnalyticsModule.resize();
    }
    if (tabId === 'versus' && window.VersusModule) {
      window.VersusModule.updateComparison();
    }
    if (window.lucide) window.lucide.createIcons();
  }

  function init() {
    if (window.lucide) window.lucide.createIcons();

    if (window.TimelineModule) window.TimelineModule.init();
    if (window.AnalyticsModule) window.AnalyticsModule.init();
    if (window.VersusModule) window.VersusModule.init();
    if (window.EncyclopediaModule) window.EncyclopediaModule.init();
    if (window.WarsModule) window.WarsModule.init();
  }

  return {
    init,
    switchTab
  };
})();

// Global alias helpers for inline HTML onclick handlers
window.switchTab = (tabId) => window.AppRouter.switchTab(tabId);
window.setYear = (yr) => window.TimelineModule.setYear(yr);
window.updateChartMetric = (metric) => window.AnalyticsModule.updateChartMetric(metric);
window.filterPromotions = () => window.EncyclopediaModule.filterPromotions();
window.setYearFromPromo = (id) => window.EncyclopediaModule.setYearFromPromo(id);

window.addEventListener('DOMContentLoaded', () => {
  window.AppRouter.init();
});