/**
 * Timeline, Scrubber, Geo Distribution, Leaderboard & Playback Engine
 */
window.TimelineModule = (function() {
  let currentYear = 1980;
  let isPlaying = false;
  let playInterval = null;

  const YEAR_KEYS = Object.keys(window.TIMELINE_DATA).map(Number).sort((a, b) => a - b);

  function getClosestYearData(year) {
    if (window.TIMELINE_DATA[year]) return { data: window.TIMELINE_DATA[year], year: year };
    let closest = YEAR_KEYS[0];
    let minDiff = Math.abs(year - closest);
    for (let y of YEAR_KEYS) {
      let diff = Math.abs(year - y);
      if (diff < minDiff && y <= year) {
        minDiff = diff;
        closest = y;
      }
    }
    return { data: window.TIMELINE_DATA[closest], year: closest };
  }

  function renderYear(year) {
    currentYear = parseInt(year);
    const slider = document.getElementById('timeline-slider');
    if (slider) slider.value = currentYear;

    const { data } = getClosestYearData(currentYear);

    // Update Banner Texts
    const yearDisplay = document.getElementById('current-year-display');
    const eraBadge = document.getElementById('era-badge');
    const eraYearsSpan = document.getElementById('era-years-span');
    const eraDescDisplay = document.getElementById('era-desc-display');
    const leaderboardYearBadge = document.getElementById('leaderboard-year-badge');
    const snapshotYearTitle = document.getElementById('snapshot-year-title');
    const geoYearLabel = document.getElementById('geo-year-label');

    if (yearDisplay) yearDisplay.textContent = currentYear;
    if (eraBadge) eraBadge.textContent = data.eraName;
    if (eraYearsSpan) eraYearsSpan.textContent = data.eraYears;
    if (eraDescDisplay) eraDescDisplay.textContent = data.eraDesc;
    if (leaderboardYearBadge) leaderboardYearBadge.textContent = currentYear;
    if (snapshotYearTitle) snapshotYearTitle.textContent = currentYear;
    if (geoYearLabel) geoYearLabel.textContent = currentYear;

    // Stat Cards
    const elAce = document.getElementById('stat-top-ace');
    const elGate = document.getElementById('stat-peak-gate');
    const elGateEvent = document.getElementById('stat-peak-gate-event');
    const elVal = document.getElementById('stat-industry-val');
    const elMedia = document.getElementById('stat-media-medium');
    const elMilestone = document.getElementById('milestone-desc');

    if (elAce) elAce.textContent = data.topAce;
    if (elGate) elGate.textContent = Number(data.peakGate).toLocaleString() + ' fans';
    if (elGateEvent) elGateEvent.textContent = data.peakGateEvent;
    if (elVal) elVal.textContent = data.industryValuation;
    if (elMedia) elMedia.textContent = data.mediaMedium;
    if (elMilestone) elMilestone.textContent = data.milestone;

    // Regional distribution bars
    const geoNaPct = document.getElementById('geo-na-pct');
    const geoNaBar = document.getElementById('geo-na-bar');
    const geoJpPct = document.getElementById('geo-jp-pct');
    const geoJpBar = document.getElementById('geo-jp-bar');
    const geoMxPct = document.getElementById('geo-mx-pct');
    const geoMxBar = document.getElementById('geo-mx-bar');

    if (geoNaPct && geoNaBar) {
      geoNaPct.textContent = data.geo.na + '%';
      geoNaBar.style.width = data.geo.na + '%';
    }
    if (geoJpPct && geoJpBar) {
      geoJpPct.textContent = data.geo.jp + '%';
      geoJpBar.style.width = data.geo.jp + '%';
    }
    if (geoMxPct && geoMxBar) {
      geoMxPct.textContent = data.geo.mx + '%';
      geoMxBar.style.width = data.geo.mx + '%';
    }

    // Leaderboard
    const lbContainer = document.getElementById('leaderboard-container');
    if (lbContainer) {
      lbContainer.innerHTML = '';
      data.rankings.forEach((item, index) => {
        const promo = window.PROMOTIONS_DATA[item.id] || { name: item.id.toUpperCase(), color: '#EAB308', emoji: '⭐' };
        const scorePct = item.score;

        const row = document.createElement('div');
        row.className = 'glass-card p-3 sm:p-3.5 rounded-xl transition duration-150 group hover:border-zinc-700/80';
        row.innerHTML = `
          <div class="flex items-center justify-between gap-2 mb-2 text-xs">
            <div class="flex items-center gap-2.5 truncate">
              <span class="w-6 h-6 rounded-lg flex items-center justify-center font-mono font-bold text-xs ${
                index === 0 ? 'bg-amber-400 text-black shadow-sm shadow-amber-400/30' : 'bg-zinc-800 text-zinc-300'
              }">
                #${index + 1}
              </span>
              <span class="text-base">${promo.emoji || '⭐'}</span>
              <span class="font-bold text-white text-sm tracking-tight" style="color: ${promo.color}">
                ${promo.name}
              </span>
              <span class="text-[11px] text-zinc-400 truncate hidden sm:inline">• ${item.star}</span>
            </div>
            <div class="flex items-center gap-2 flex-shrink-0">
              <span class="text-[11px] text-zinc-400 font-mono hidden md:inline truncate max-w-[140px]">${item.tv}</span>
              <span class="font-mono font-black text-amber-400 text-sm bg-zinc-900/80 px-2 py-0.5 rounded-md border border-zinc-800">
                ${item.score}<span class="text-[10px] text-zinc-500 font-normal">/100</span>
              </span>
            </div>
          </div>
          <div class="w-full bg-zinc-800/80 h-2 rounded-full overflow-hidden flex">
            <div class="h-full rounded-full transition-all duration-300" style="width: ${scorePct}%; background-color: ${promo.color};"></div>
          </div>
          <div class="flex justify-between text-[10px] text-zinc-400 mt-1.5 font-mono">
            <span>Scale: $${item.rev}M Gross</span>
            <span>Gate: ${Number(item.att).toLocaleString()} fans</span>
          </div>
        `;
        lbContainer.appendChild(row);
      });
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function setYear(yr) {
    renderYear(yr);
    if (isPlaying) togglePlay();
  }

  function togglePlay() {
    isPlaying = !isPlaying;
    const btn = document.getElementById('btn-play');
    const playIcon = document.getElementById('play-icon');
    const playText = document.getElementById('play-text');

    if (isPlaying) {
      if (btn) {
        btn.classList.remove('bg-amber-400', 'text-black');
        btn.classList.add('bg-rose-500', 'text-white');
      }
      if (playText) playText.textContent = "Pause";
      if (playIcon) playIcon.setAttribute('data-lucide', 'pause');

      let currIndex = YEAR_KEYS.indexOf(currentYear);
      if (currIndex === -1 || currIndex >= YEAR_KEYS.length - 1) currIndex = 0;

      playInterval = setInterval(() => {
        currIndex++;
        if (currIndex >= YEAR_KEYS.length) {
          currIndex = 0;
        }
        renderYear(YEAR_KEYS[currIndex]);
      }, 1600);
    } else {
      clearInterval(playInterval);
      if (btn) {
        btn.classList.remove('bg-rose-500', 'text-white');
        btn.classList.add('bg-amber-400', 'text-black');
      }
      if (playText) playText.textContent = "Play";
      if (playIcon) playIcon.setAttribute('data-lucide', 'play');
    }

    if (window.lucide) window.lucide.createIcons();
  }

  function initListeners() {
    const slider = document.getElementById('timeline-slider');
    if (slider) {
      slider.addEventListener('input', (e) => renderYear(e.target.value));
    }

    const btnPrev = document.getElementById('btn-prev-year');
    if (btnPrev) {
      btnPrev.addEventListener('click', () => {
        let idx = YEAR_KEYS.findIndex(y => y >= currentYear);
        if (idx > 0) renderYear(YEAR_KEYS[idx - 1]);
        else renderYear(YEAR_KEYS[0]);
      });
    }

    const btnNext = document.getElementById('btn-next-year');
    if (btnNext) {
      btnNext.addEventListener('click', () => {
        let idx = YEAR_KEYS.findIndex(y => y > currentYear);
        if (idx !== -1) renderYear(YEAR_KEYS[idx]);
        else renderYear(YEAR_KEYS[YEAR_KEYS.length - 1]);
      });
    }

    const btnPlay = document.getElementById('btn-play');
    if (btnPlay) {
      btnPlay.addEventListener('click', togglePlay);
    }
  }

  return {
    YEAR_KEYS,
    getCurrentYear: () => currentYear,
    renderYear,
    setYear,
    togglePlay,
    init: function() {
      initListeners();
      renderYear(1980);
    }
  };
})();