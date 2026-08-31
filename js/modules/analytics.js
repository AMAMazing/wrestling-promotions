/**
 * Historical Analytics, Multi-Decade Metrics & Chart.js Line Chart
 */
window.AnalyticsModule = (function() {
  let historicalChartInstance = null;
  let currentMetric = 'power';
  const promoKeys = ['wwe', 'wcw', 'aew', 'njpw', 'ajpw', 'cmll', 'aaa', 'ecw', 'tna', 'noah'];

  function initHistoricalChart() {
    const canvas = document.getElementById('historicalChart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const years = window.TimelineModule.YEAR_KEYS;

    const datasets = promoKeys.map(key => {
      const promo = window.PROMOTIONS_DATA[key];
      const dataPoints = years.map(yr => {
        const snap = window.TIMELINE_DATA[yr];
        const found = snap.rankings.find(r => r.id === key);
        if (!found) return null;
        return found.score;
      });

      return {
        label: promo.name,
        data: dataPoints,
        borderColor: promo.color,
        backgroundColor: promo.color + '15',
        borderWidth: 2.5,
        pointRadius: 4,
        pointHoverRadius: 7,
        pointBackgroundColor: promo.color,
        spanGaps: false,
        tension: 0.25
      };
    });

    historicalChartInstance = new Chart(ctx, {
      type: 'line',
      data: {
        labels: years,
        datasets: datasets
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
          mode: 'index',
          intersect: false
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#d4d4d8',
              boxWidth: 10,
              boxHeight: 10,
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 14,
              font: { size: 11, family: 'Plus Jakarta Sans' }
            }
          },
          tooltip: {
            backgroundColor: 'rgba(18, 18, 24, 0.95)',
            titleColor: '#f59e0b',
            bodyColor: '#e4e4e7',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            borderWidth: 1,
            padding: 12,
            cornerRadius: 10,
            titleFont: { weight: 'bold', family: 'Plus Jakarta Sans' }
          }
        },
        scales: {
          x: {
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#a1a1aa', font: { family: 'JetBrains Mono', size: 11 } }
          },
          y: {
            min: 0,
            max: 105,
            grid: { color: 'rgba(255, 255, 255, 0.05)' },
            ticks: { color: '#a1a1aa', font: { family: 'JetBrains Mono', size: 11 } },
            title: {
              display: true,
              text: 'Power Index Score (0–100)',
              color: '#71717a',
              font: { size: 11 }
            }
          }
        }
      }
    });
  }

  function updateChartMetric(metricType) {
    currentMetric = metricType;
    const years = window.TimelineModule.YEAR_KEYS;

    const buttons = ['power', 'attendance', 'revenue', 'viewership'];
    buttons.forEach(b => {
      const btn = document.getElementById(`btn-metric-${b}`);
      if (!btn) return;
      if (b === metricType) {
        btn.className = "metric-btn px-3 py-1.5 text-xs font-bold rounded-lg bg-amber-400 text-black shadow-sm transition";
      } else {
        btn.className = "metric-btn px-3 py-1.5 text-xs font-semibold rounded-lg bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white transition";
      }
    });

    let yTitle = 'Score (0–100)';
    let maxVal = 105;

    if (metricType === 'attendance') {
      yTitle = 'Peak Single Event Gate (Fans)';
      maxVal = 90000;
    } else if (metricType === 'revenue') {
      yTitle = 'Estimated Annual Revenue ($M USD)';
      maxVal = 1750;
    } else if (metricType === 'viewership') {
      yTitle = 'Peak US / Global Live Reach Index';
      maxVal = 100;
    }

    const titleEl = document.getElementById('chart-main-title');
    if (titleEl) titleEl.textContent = `Historical Comparison: ${yTitle}`;

    if (historicalChartInstance) {
      historicalChartInstance.data.datasets.forEach(ds => {
        const promoKey = promoKeys.find(k => window.PROMOTIONS_DATA[k].name === ds.label);
        ds.data = years.map(yr => {
          const snap = window.TIMELINE_DATA[yr];
          const found = snap.rankings.find(r => r.id === promoKey);
          if (!found) return null;
          if (metricType === 'power') return found.score;
          if (metricType === 'attendance') return found.att;
          if (metricType === 'revenue') return found.rev;
          if (metricType === 'viewership') return Math.round(found.score * 0.95);
          return found.score;
        });
      });

      historicalChartInstance.options.scales.y.title.text = yTitle;
      historicalChartInstance.options.scales.y.max = maxVal;
      historicalChartInstance.update();
    }
  }

  function resize() {
    if (historicalChartInstance) historicalChartInstance.resize();
  }

  return {
    init: initHistoricalChart,
    updateChartMetric,
    resize
  };
})();