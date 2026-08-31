/**
 * Head-to-Head Historical Matchup Simulator & Radar Matrix
 * Defaults to WWE vs AEW in 2026 for high relevance.
 */
window.VersusModule = (function() {
  let radarChartInstance = null;

  function populateSelectors() {
    const selectA = document.getElementById('h2h-promo-a');
    const selectB = document.getElementById('h2h-promo-b');
    const yearSelect = document.getElementById('h2h-year');

    if (!selectA || !selectB || !yearSelect) return;

    selectA.innerHTML = '';
    selectB.innerHTML = '';
    yearSelect.innerHTML = '';

    Object.values(window.PROMOTIONS_DATA).forEach(p => {
      const optA = new Option(`${p.emoji || '⭐'} ${p.name} (${p.region})`, p.id);
      const optB = new Option(`${p.emoji || '⭐'} ${p.name} (${p.region})`, p.id);
      selectA.add(optA);
      selectB.add(optB);
    });

    selectA.value = 'wwe';
    selectB.value = 'aew';

    window.TimelineModule.YEAR_KEYS.slice().reverse().forEach(yr => {
      yearSelect.add(new Option(`Year: ${yr}`, yr));
    });
    yearSelect.value = 2026;

    selectA.addEventListener('change', updateComparison);
    selectB.addEventListener('change', updateComparison);
    yearSelect.addEventListener('change', updateComparison);
  }

  function initRadarChart() {
    const canvas = document.getElementById('h2hRadarChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    radarChartInstance = new Chart(ctx, {
      type: 'radar',
      data: {
        labels: ['Financial Scale', 'Live Gate Power', 'TV/Stream Reach', 'Cultural Impact', 'Roster Depth'],
        datasets: [
          {
            label: 'WWE',
            data: [100, 95, 100, 100, 95],
            borderColor: '#EF4444',
            backgroundColor: '#EF444425',
            borderWidth: 2,
            pointRadius: 3
          },
          {
            label: 'AEW',
            data: [85, 88, 85, 88, 90],
            borderColor: '#F59E0B',
            backgroundColor: '#F59E0B25',
            borderWidth: 2,
            pointRadius: 3
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          r: {
            angleLines: { color: 'rgba(255, 255, 255, 0.08)' },
            grid: { color: 'rgba(255, 255, 255, 0.08)' },
            pointLabels: {
              color: '#d4d4d8',
              font: { size: 10, family: 'Plus Jakarta Sans', weight: '600' }
            },
            ticks: { display: false, min: 0, max: 100 }
          }
        },
        plugins: {
          legend: {
            labels: {
              color: '#d4d4d8',
              font: { size: 11, family: 'Plus Jakarta Sans' },
              boxWidth: 8,
              usePointStyle: true
            }
          }
        }
      }
    });
  }

  function updateComparison() {
    const selectA = document.getElementById('h2h-promo-a');
    const selectB = document.getElementById('h2h-promo-b');
    const yearSelect = document.getElementById('h2h-year');

    if (!selectA || !selectB || !yearSelect) return;

    const idA = selectA.value;
    const idB = selectB.value;
    const yr = parseInt(yearSelect.value);

    const promoA = window.PROMOTIONS_DATA[idA];
    const promoB = window.PROMOTIONS_DATA[idB];
    const snap = window.TIMELINE_DATA[yr];

    const rankA = snap.rankings.find(r => r.id === idA) || { score: 0, rev: 0, att: 0, tv: "No Active Broadcast", star: "N/A" };
    const rankB = snap.rankings.find(r => r.id === idB) || { score: 0, rev: 0, att: 0, tv: "No Active Broadcast", star: "N/A" };

    const cardA = document.getElementById('h2h-card-a');
    const cardB = document.getElementById('h2h-card-b');

    if (cardA) {
      cardA.style.borderColor = promoA.color;
      cardA.innerHTML = `
        <div class="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div>
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">Corner A</span>
            <h3 class="text-xl font-black text-white flex items-center gap-1.5" style="color:${promoA.color}">
              ${promoA.emoji || '⭐'} ${promoA.name}
            </h3>
            <span class="text-xs text-zinc-400">${promoA.fullName}</span>
          </div>
          <span class="text-xs px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-700 font-mono font-bold text-amber-400">
            ${rankA.score > 0 ? rankA.score + ' / 100' : 'Inactive in ' + yr}
          </span>
        </div>
        <div class="space-y-2 text-xs pt-1">
          <div class="flex justify-between py-1 border-b border-zinc-800/60">
            <span class="text-zinc-400">Annual Scale:</span>
            <strong class="text-white font-mono">$${rankA.rev}M Gross</strong>
          </div>
          <div class="flex justify-between py-1 border-b border-zinc-800/60">
            <span class="text-zinc-400">Peak Single Gate:</span>
            <strong class="text-emerald-400 font-mono">${Number(rankA.att).toLocaleString()} fans</strong>
          </div>
          <div class="flex justify-between py-1 border-b border-zinc-800/60">
            <span class="text-zinc-400">Featured Ace in ${yr}:</span>
            <strong class="text-amber-400">${rankA.star}</strong>
          </div>
          <div class="flex justify-between py-1 border-b border-zinc-800/60">
            <span class="text-zinc-400">Broadcast Medium:</span>
            <span class="text-zinc-300 text-right truncate max-w-[150px] font-mono">${rankA.tv}</span>
          </div>
          <p class="text-zinc-400 text-[11px] pt-1 leading-relaxed">${promoA.bio}</p>
        </div>
      `;
    }

    if (cardB) {
      cardB.style.borderColor = promoB.color;
      cardB.innerHTML = `
        <div class="flex items-center justify-between border-b border-zinc-800 pb-3">
          <div>
            <span class="text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">Corner B</span>
            <h3 class="text-xl font-black text-white flex items-center gap-1.5" style="color:${promoB.color}">
              ${promoB.emoji || '⭐'} ${promoB.name}
            </h3>
            <span class="text-xs text-zinc-400">${promoB.fullName}</span>
          </div>
          <span class="text-xs px-2.5 py-1 rounded-lg bg-zinc-900 border border-zinc-700 font-mono font-bold text-amber-400">
            ${rankB.score > 0 ? rankB.score + ' / 100' : 'Inactive in ' + yr}
          </span>
        </div>
        <div class="space-y-2 text-xs pt-1">
          <div class="flex justify-between py-1 border-b border-zinc-800/60">
            <span class="text-zinc-400">Annual Scale:</span>
            <strong class="text-white font-mono">$${rankB.rev}M Gross</strong>
          </div>
          <div class="flex justify-between py-1 border-b border-zinc-800/60">
            <span class="text-zinc-400">Peak Single Gate:</span>
            <strong class="text-emerald-400 font-mono">${Number(rankB.att).toLocaleString()} fans</strong>
          </div>
          <div class="flex justify-between py-1 border-b border-zinc-800/60">
            <span class="text-zinc-400">Featured Ace in ${yr}:</span>
            <strong class="text-amber-400">${rankB.star}</strong>
          </div>
          <div class="flex justify-between py-1 border-b border-zinc-800/60">
            <span class="text-zinc-400">Broadcast Medium:</span>
            <span class="text-zinc-300 text-right truncate max-w-[150px] font-mono">${rankB.tv}</span>
          </div>
          <p class="text-zinc-400 text-[11px] pt-1 leading-relaxed">${promoB.bio}</p>
        </div>
      `;
    }

    // Radar Data calculation
    const scoreA = rankA.score || 10;
    const scoreB = rankB.score || 10;
    const topRev = snap.rankings[0]?.rev || 100;

    const calcDataA = [
      Math.min(100, Math.round((rankA.rev / topRev) * 100)),
      Math.min(100, Math.round((rankA.att / 75000) * 100)),
      scoreA,
      Math.round(scoreA * 0.95),
      Math.round(scoreA * 0.9)
    ];
    const calcDataB = [
      Math.min(100, Math.round((rankB.rev / topRev) * 100)),
      Math.min(100, Math.round((rankB.att / 75000) * 100)),
      scoreB,
      Math.round(scoreB * 0.95),
      Math.round(scoreB * 0.9)
    ];

    if (radarChartInstance) {
      radarChartInstance.data.datasets[0].label = promoA.name;
      radarChartInstance.data.datasets[0].borderColor = promoA.color;
      radarChartInstance.data.datasets[0].backgroundColor = promoA.color + '25';
      radarChartInstance.data.datasets[0].data = calcDataA;

      radarChartInstance.data.datasets[1].label = promoB.name;
      radarChartInstance.data.datasets[1].borderColor = promoB.color;
      radarChartInstance.data.datasets[1].backgroundColor = promoB.color + '25';
      radarChartInstance.data.datasets[1].data = calcDataB;
      radarChartInstance.update();
    }

    const verdictEl = document.getElementById('h2h-verdict');
    if (verdictEl) {
      if (scoreA > scoreB) {
        verdictEl.innerHTML = `<strong class="text-amber-400">${promoA.name}</strong> held the historical upper hand in <strong>${yr}</strong> with a Power Index of <strong>${scoreA}</strong> vs ${promoB.name}'s <strong>${scoreB}</strong>, powered by superior media reach and gross revenue velocity.`;
      } else if (scoreB > scoreA) {
        verdictEl.innerHTML = `<strong class="text-amber-400">${promoB.name}</strong> outpaced ${promoA.name} in <strong>${yr}</strong> with a Power Index of <strong>${scoreB}</strong> vs <strong>${scoreA}</strong>.`;
      } else {
        verdictEl.innerHTML = `Both <strong class="text-white">${promoA.name}</strong> and <strong class="text-white">${promoB.name}</strong> stood on closely contested footing in <strong>${yr}</strong>.`;
      }
    }
  }

  return {
    init: function() {
      populateSelectors();
      initRadarChart();
      updateComparison();
    },
    updateComparison
  };
})();