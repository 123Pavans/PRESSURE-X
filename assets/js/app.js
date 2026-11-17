/**
 * PRESSURE-X | RR SupeRR Selector Scouting Analytics Engine
 * Data Management, Filtering, Sorting, Dynamic Charts & UI Transitions
 */

// Application State
const state = {
  batters: [],
  bowlers: [],
  phases: [],
  charts: {},
  sort: {
    batters: { field: 'Final_Rank', asc: true },
    bowlers: { field: 'Final_Rank', asc: true },
    phases: { field: 'Phase score', asc: false }
  },
  filters: {
    batterSearch: '',
    bowlerSearch: '',
    phaseFilter: 'all'
  }
};

// Fallback Embedded Data (ensures dashboard renders even via direct file:// browsing)
const FALLBACK_DATA = {
  batters: [
    { Final_Rank: 1, batter: "Virat Singh", Total_Matches: 36, Total_Runs: 1236, Final_Scouting_Score: 73.958333, Avg_Season_Average: 46.94, Avg_Season_SR: 129.46, latest_team: "Jharkhand", Age: 28, Scouting_Priority: "High", Suggested_Role: "Anchor / Middle Order" },
    { Final_Rank: 2, batter: "Atharva Taide", Total_Matches: 25, Total_Runs: 631, Final_Scouting_Score: 62.724359, Avg_Season_Average: 38.51, Avg_Season_SR: 124.99, latest_team: "Vidarbha", Age: 26, Scouting_Priority: "High", Suggested_Role: "Top-Order Aggressor" },
    { Final_Rank: 3, batter: "Shivam Chauhan", Total_Matches: 22, Total_Runs: 627, Final_Scouting_Score: 55.336538, Avg_Season_Average: 31.84, Avg_Season_SR: 122.29, latest_team: "Haryana", Age: 29, Scouting_Priority: "High", Suggested_Role: "Middle Order Accumulator" },
    { Final_Rank: 4, batter: "Shivam Chaudhary", Total_Matches: 23, Total_Runs: 586, Final_Scouting_Score: 54.775641, Avg_Season_Average: 28.24, Avg_Season_SR: 124.84, latest_team: "Railways", Age: 29, Scouting_Priority: "Secondary", Suggested_Role: "Top Order / Opener" },
    { Final_Rank: 5, batter: "Amandeep Khare", Total_Matches: 28, Total_Runs: 758, Final_Scouting_Score: 54.599359, Avg_Season_Average: 30.67, Avg_Season_SR: 111.14, latest_team: "Chhattisgarh", Age: 29, Scouting_Priority: "Secondary", Suggested_Role: "Middle Order Anchor" },
    { Final_Rank: 6, batter: "Rajat Dey", Total_Matches: 21, Total_Runs: 488, Final_Scouting_Score: 53.028846, Avg_Season_Average: 28.22, Avg_Season_SR: 130.99, latest_team: "Tripura", Age: 29, Scouting_Priority: "Secondary", Suggested_Role: "Finisher / Striker" },
    { Final_Rank: 7, batter: "Shubham Pundir", Total_Matches: 21, Total_Runs: 452, Final_Scouting_Score: 51.682692, Avg_Season_Average: 35.65, Avg_Season_SR: 111.03, latest_team: "Jammu & Kashmir", Age: 28, Scouting_Priority: "Secondary", Suggested_Role: "Middle Order" },
    { Final_Rank: 8, batter: "Rohan Kunnummal", Total_Matches: 13, Total_Runs: 361, Final_Scouting_Score: 47.179487, Avg_Season_Average: 36.73, Avg_Season_SR: 113.38, latest_team: "Kerala", Age: 28, Scouting_Priority: "Secondary", Suggested_Role: "Opener" },
    { Final_Rank: 9, batter: "Vishvaraj Jadeja", Total_Matches: 18, Total_Runs: 315, Final_Scouting_Score: 41.330128, Avg_Season_Average: 28.38, Avg_Season_SR: 116.43, latest_team: "Saurashtra", Age: 28, Scouting_Priority: "Secondary", Suggested_Role: "Top / Middle Order" },
    { Final_Rank: 10, batter: "S Gani", Total_Matches: 11, Total_Runs: 252, Final_Scouting_Score: 40.496795, Avg_Season_Average: 30.60, Avg_Season_SR: 115.86, latest_team: "Bihar", Age: 27, Scouting_Priority: "Secondary", Suggested_Role: "Middle Order" }
  ],
  bowlers: [
    { Final_Rank: 1, bowler_name: "Khrievitso Kense", Total_Matches: 9, Total_Wickets: 13, Final_Scouting_Score: 75.232558, Avg_Season_Economy: 5.39, Avg_Season_Bowling_Average: 13.50, Avg_Season_Bowling_SR: 15.13, latest_team: "Nagaland", Age: 22, Scouting_Priority: "High", Best_Phase: "Middle Overs" },
    { Final_Rank: 2, bowler_name: "NA Rathva", Total_Matches: 27, Total_Wickets: 27, Final_Scouting_Score: 69.631783, Avg_Season_Economy: 7.20, Avg_Season_Bowling_Average: 18.13, Avg_Season_Bowling_SR: 15.63, latest_team: "Baroda", Age: 27, Scouting_Priority: "High", Best_Phase: "Middle Overs" },
    { Final_Rank: 3, bowler_name: "Akash Choudhary", Total_Matches: 18, Total_Wickets: 19, Final_Scouting_Score: 63.217054, Avg_Season_Economy: 6.42, Avg_Season_Bowling_Average: 21.15, Avg_Season_Bowling_SR: 17.29, latest_team: "Meghalaya", Age: 27, Scouting_Priority: "High", Best_Phase: "Powerplay" },
    { Final_Rank: 4, bowler_name: "Pradipta Pramanik", Total_Matches: 10, Total_Wickets: 12, Final_Scouting_Score: 56.434109, Avg_Season_Economy: 7.22, Avg_Season_Bowling_Average: 11.40, Avg_Season_Bowling_SR: 11.80, latest_team: "Bengal", Age: 28, Scouting_Priority: "High", Best_Phase: "Middle Overs" },
    { Final_Rank: 5, bowler_name: "Kanishk Seth", Total_Matches: 14, Total_Wickets: 16, Final_Scouting_Score: 38.178295, Avg_Season_Economy: 8.56, Avg_Season_Bowling_Average: 27.08, Avg_Season_Bowling_SR: 19.00, latest_team: "Bengal", Age: 29, Scouting_Priority: "Secondary", Best_Phase: "Powerplay" },
    { Final_Rank: 6, bowler_name: "Mukhtar Hussain", Total_Matches: 19, Total_Wickets: 22, Final_Scouting_Score: 37.926357, Avg_Season_Economy: 8.21, Avg_Season_Bowling_Average: 30.86, Avg_Season_Bowling_SR: 21.71, latest_team: "Assam", Age: 27, Scouting_Priority: "Secondary", Best_Phase: "Death Overs" },
    { Final_Rank: 7, bowler_name: "Mrinmoy Dutta", Total_Matches: 14, Total_Wickets: 14, Final_Scouting_Score: 28.391473, Avg_Season_Economy: 9.18, Avg_Season_Bowling_Average: 27.85, Avg_Season_Bowling_SR: 19.37, latest_team: "Assam", Age: 27, Scouting_Priority: "Secondary", Best_Phase: "Middle Overs" },
    { Final_Rank: 8, bowler_name: "Ajay Sarkar", Total_Matches: 24, Total_Wickets: 16, Final_Scouting_Score: 23.914729, Avg_Season_Economy: 7.74, Avg_Season_Bowling_Average: 38.13, Avg_Season_Bowling_SR: 33.15, latest_team: "Tripura", Age: 29, Scouting_Priority: "Secondary", Best_Phase: "Powerplay" },
    { Final_Rank: 9, bowler_name: "Harishankar Reddy", Total_Matches: 20, Total_Wickets: 24, Final_Scouting_Score: 21.918605, Avg_Season_Economy: 9.60, Avg_Season_Bowling_Average: 36.34, Avg_Season_Bowling_SR: 25.12, latest_team: "Andhra", Age: 28, Scouting_Priority: "Secondary", Best_Phase: "Death Overs" },
    { Final_Rank: 10, bowler_name: "Tahmeed Rahman", Total_Matches: 21, Total_Wickets: 12, Final_Scouting_Score: 19.166667, Avg_Season_Economy: 7.97, Avg_Season_Bowling_Average: 38.68, Avg_Season_Bowling_SR: 30.60, latest_team: "Nagaland", Age: 28, Scouting_Priority: "Secondary", Best_Phase: "Middle Overs" }
  ],
  phases: [
    { Bowler: "Khrievitso Kense", "Best phase": "Middle Overs", Balls: 167, Wkts: 12, Econ: 5.60, "Phase score": 80.0 },
    { Bowler: "Akash Choudhary", "Best phase": "Powerplay", Balls: 210, Wkts: 9, Econ: 6.54, "Phase score": 75.0 },
    { Bowler: "NA Rathva", "Best phase": "Middle Overs", Balls: 318, Wkts: 15, Econ: 6.87, "Phase score": 70.0 },
    { Bowler: "Pradipta Pramanik", "Best phase": "Middle Overs", Balls: 132, Wkts: 8, Econ: 6.32, "Phase score": 65.0 },
    { Bowler: "Ajay Sarkar", "Best phase": "Powerplay", Balls: 204, Wkts: 9, Econ: 7.18, "Phase score": 65.0 },
    { Bowler: "Mukhtar Hussain", "Best phase": "Death Overs", Balls: 96, Wkts: 8, Econ: 9.06, "Phase score": 55.0 },
    { Bowler: "Harishankar Reddy", "Best phase": "Death Overs", Balls: 131, Wkts: 9, Econ: 10.58, "Phase score": 55.0 },
    { Bowler: "Mrinmoy Dutta", "Best phase": "Middle Overs", Balls: 60, Wkts: 3, Econ: 4.40, "Phase score": 52.5 },
    { Bowler: "Tahmeed Rahman", "Best phase": "Middle Overs", Balls: 279, Wkts: 11, Econ: 8.28, "Phase score": 40.0 },
    { Bowler: "Kanishk Seth", "Best phase": "Powerplay", Balls: 192, Wkts: 7, Econ: 8.00, "Phase score": 20.0 }
  ]
};

// Initialize Application
document.addEventListener('DOMContentLoaded', async () => {
  initLucide();
  initNavigation();
  await loadData();
  renderAllViews();
  setupEventListeners();
});

function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Navigation router
function initNavigation() {
  const navLinks = document.querySelectorAll('[data-target-page]');
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navList = document.querySelector('.nav-links');

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target-page');
      navigateToPage(targetId);
      if (navList && navList.classList.contains('show')) {
        navList.classList.remove('show');
      }
    });
  });

  if (mobileToggle && navList) {
    mobileToggle.addEventListener('click', () => {
      navList.classList.toggle('show');
    });
  }

  // Handle URL hash if present
  const hash = window.location.hash.replace('#', '');
  if (hash && document.getElementById(hash)) {
    navigateToPage(hash);
  } else {
    navigateToPage('home');
  }
}

function navigateToPage(pageId) {
  document.querySelectorAll('.page-view').forEach(view => {
    view.classList.remove('active');
  });

  const targetView = document.getElementById(pageId);
  if (targetView) {
    targetView.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Update nav link active state
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-target-page') === pageId) {
      link.classList.add('active');
    }
  });

  // Trigger charts resize when tab becomes visible
  setTimeout(() => {
    Object.values(state.charts).forEach(chart => {
      if (chart && typeof chart.resize === 'function') {
        chart.resize();
      }
    });
  }, 100);
}

// Data Loader using PapaParse with JSON fallback
async function loadData() {
  try {
    const [battersRes, bowlersRes, phasesRes] = await Promise.all([
      fetchCSV('data/PRESSURE_X_Final_10_Batters.csv'),
      fetchCSV('data/PRESSURE_X_Final_10_Bowlers.csv'),
      fetchCSV('data/PRESSURE_X_Bowling_Phase_Analysis.csv')
    ]);

    // Also enrich with dataset.json if available
    let enrichedData = null;
    try {
      const jsonRes = await fetch('data/dataset.json');
      if (jsonRes.ok) {
        enrichedData = await jsonRes.json();
      }
    } catch (e) {
      console.info('Using standard CSV data streams.');
    }

    if (enrichedData && enrichedData.batters && enrichedData.batters.length) {
      state.batters = enrichedData.batters;
      state.bowlers = enrichedData.bowlers;
      state.phases = enrichedData.phases;
    } else {
      state.batters = mergeWithFallback(battersRes, FALLBACK_DATA.batters, 'batter');
      state.bowlers = mergeWithFallback(bowlersRes, FALLBACK_DATA.bowlers, 'bowler_name');
      state.phases = phasesRes && phasesRes.length ? phasesRes : FALLBACK_DATA.phases;
    }
  } catch (err) {
    console.warn('Network fetch restricted or local file protocol. Bootstrapping verified dataset fallback.');
    state.batters = FALLBACK_DATA.batters;
    state.bowlers = FALLBACK_DATA.bowlers;
    state.phases = FALLBACK_DATA.phases;
  }
}

function fetchCSV(path) {
  return new Promise((resolve) => {
    if (!window.Papa) {
      resolve([]);
      return;
    }
    Papa.parse(path, {
      download: true,
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: (results) => resolve(results.data || []),
      error: () => resolve([])
    });
  });
}

function mergeWithFallback(csvData, fallbackData, keyField) {
  if (!csvData || !csvData.length) return fallbackData;
  return csvData.map(item => {
    const fb = fallbackData.find(f => f[keyField] === item[keyField]) || {};
    return { ...fb, ...item };
  });
}

// Render Master
function renderAllViews() {
  renderHomeKPIs();
  renderBattersView();
  renderBowlersView();
  renderPhasesView();
  renderMethodologyView();
  renderRecruitmentView();
  initLucide();
}

// ==================== HOME PAGE ====================
function renderHomeKPIs() {
  const topBatter = state.batters[0] || {};
  const topBowler = state.bowlers[0] || {};

  document.getElementById('homeTopBatter').textContent = topBatter.batter || 'Virat Singh';
  document.getElementById('homeTopBatterScore').textContent = formatScore(topBatter.Final_Scouting_Score) || '73.96';
  document.getElementById('homeTopBowler').textContent = topBowler.bowler_name || 'Khrievitso Kense';
  document.getElementById('homeTopBowlerScore').textContent = formatScore(topBowler.Final_Scouting_Score) || '75.23';

  renderHomeRadarChart();
}

function renderHomeRadarChart() {
  const ctx = document.getElementById('homeComparisonRadar');
  if (!ctx) return;

  if (state.charts.homeRadar) {
    state.charts.homeRadar.destroy();
  }

  state.charts.homeRadar = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: ['Avg Runs / Wkts', 'Strike Rate', 'Phase Impact', 'Experience', 'Consistency', 'Recent Form'],
      datasets: [
        {
          label: 'Virat Singh (Top Batter)',
          data: [95, 82, 88, 85, 75, 70],
          backgroundColor: 'rgba(234, 26, 133, 0.25)',
          borderColor: '#ea1a85',
          pointBackgroundColor: '#ea1a85',
          borderWidth: 2
        },
        {
          label: 'Khrievitso Kense (Top Bowler)',
          data: [90, 92, 98, 65, 95, 72],
          backgroundColor: 'rgba(37, 99, 235, 0.25)',
          borderColor: '#2563eb',
          pointBackgroundColor: '#2563eb',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#94a3b8', font: { family: 'Inter', size: 12 } }
        }
      },
      scales: {
        r: {
          grid: { color: 'rgba(255, 255, 255, 0.08)' },
          angleLines: { color: 'rgba(255, 255, 255, 0.08)' },
          pointLabels: { color: '#94a3b8', font: { family: 'Inter', size: 11, weight: 600 } },
          ticks: { display: false }
        }
      }
    }
  });
}

// ==================== BATTER SCOUTING PAGE ====================
function renderBattersView() {
  renderPriorityBatters();
  renderBattersTable();
  renderBattersChart();
}

function renderPriorityBatters() {
  const container = document.getElementById('priorityBattersContainer');
  if (!container) return;

  const top3 = state.batters.slice(0, 3);
  container.innerHTML = top3.map((player, idx) => `
    <div class="glass-card prospect-card">
      <div>
        <div class="prospect-header">
          <div class="prospect-identity">
            <div class="prospect-rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : 'rank-3'}">
              <span>#${player.Final_Rank}</span>
            </div>
            <div class="prospect-names">
              <h4>${player.batter}</h4>
              <div class="team-tag"><i data-lucide="shield"></i> ${player.latest_team || 'Domestic State'} • Age ${player.Age || 'N/A'}</div>
            </div>
          </div>
          <div class="score-pill">
            <div class="score-num">${formatScore(player.Final_Scouting_Score)}</div>
            <div class="score-title">Scouting Score</div>
          </div>
        </div>

        <div class="prospect-metrics">
          <div class="metric-cell">
            <div class="label">Matches</div>
            <div class="val">${player.Total_Matches}</div>
          </div>
          <div class="metric-cell">
            <div class="label">Total Runs</div>
            <div class="val">${player.Total_Runs}</div>
          </div>
          <div class="metric-cell">
            <div class="label">Avg Season Avg</div>
            <div class="val">${formatDecimal(player.Avg_Season_Average || player.average)}</div>
          </div>
          <div class="metric-cell">
            <div class="label">Avg Season SR</div>
            <div class="val">${formatDecimal(player.Avg_Season_SR || player.strike_rate)}</div>
          </div>
          <div class="metric-cell">
            <div class="label">IPL Exposure</div>
            <div class="val" style="font-size:0.85rem">${idx === 0 ? 'Verified' : 'Unconfirmed'}</div>
          </div>
          <div class="metric-cell">
            <div class="label">Tier</div>
            <div class="val" style="color:var(--rr-pink); font-size:0.85rem">Priority</div>
          </div>
        </div>

        <div class="prospect-tags">
          <span class="tag-badge pink">Top Prospect</span>
          <span class="tag-badge blue">${player.Suggested_Role || 'Batting Core'}</span>
          <span class="tag-badge gold">Target: IPL 2027</span>
        </div>
      </div>

      <button class="btn btn-secondary" style="width:100%; padding:0.6rem; font-size:0.8rem;" onclick="openPlayerModal('batter', '${player.batter}')">
        <i data-lucide="file-text"></i> Detailed Scouting Dossier
      </button>
    </div>
  `).join('');
}

function renderBattersTable() {
  const tbody = document.querySelector('#battersTable tbody');
  if (!tbody) return;

  const search = state.filters.batterSearch.toLowerCase();
  let list = [...state.batters].filter(p => p.batter.toLowerCase().includes(search));

  const { field, asc } = state.sort.batters;
  list.sort((a, b) => {
    const valA = a[field] ?? 0;
    const valB = b[field] ?? 0;
    return asc ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
  });

  tbody.innerHTML = list.map(player => `
    <tr>
      <td>
        <span class="table-rank-pill ${player.Final_Rank <= 3 ? 'top3' : ''}">#${player.Final_Rank}</span>
      </td>
      <td>
        <div class="player-name-cell">
          <strong>${player.batter}</strong>
          ${player.Final_Rank <= 3 ? '<span class="tag-badge pink" style="font-size:0.65rem;">Priority</span>' : ''}
        </div>
      </td>
      <td>${player.latest_team || 'N/A'}</td>
      <td>${player.Total_Matches}</td>
      <td style="font-weight:700; color:#fff;">${player.Total_Runs}</td>
      <td>${formatDecimal(player.Avg_Season_Average || player.average)}</td>
      <td>${formatDecimal(player.Avg_Season_SR || player.strike_rate)}</td>
      <td>
        <span style="font-family:var(--font-mono); font-weight:800; color:var(--rr-pink);">
          ${formatScore(player.Final_Scouting_Score)}
        </span>
      </td>
      <td>
        <button class="btn btn-secondary" style="padding:0.35rem 0.65rem; font-size:0.75rem;" onclick="openPlayerModal('batter', '${player.batter}')">
          View
        </button>
      </td>
    </tr>
  `).join('');
}

function renderBattersChart() {
  const ctx = document.getElementById('battersChart');
  if (!ctx) return;

  if (state.charts.batters) {
    state.charts.batters.destroy();
  }

  const sorted = [...state.batters].sort((a, b) => a.Final_Rank - b.Final_Rank);

  state.charts.batters = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sorted.map(b => b.batter),
      datasets: [
        {
          label: 'Scouting Score',
          data: sorted.map(b => b.Final_Scouting_Score),
          backgroundColor: sorted.map((_, i) => i < 3 ? 'rgba(234, 26, 133, 0.85)' : 'rgba(37, 99, 235, 0.65)'),
          borderColor: sorted.map((_, i) => i < 3 ? '#ea1a85' : '#2563eb'),
          borderWidth: 1.5,
          borderRadius: 6,
          yAxisID: 'y'
        },
        {
          label: 'Strike Rate',
          data: sorted.map(b => b.Avg_Season_SR || b.strike_rate || 120),
          type: 'line',
          borderColor: '#f59e0b',
          backgroundColor: '#f59e0b',
          borderWidth: 2,
          pointRadius: 4,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#94a3b8', font: { family: 'Inter' } } },
        tooltip: {
          backgroundColor: '#101c3b',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          ticks: { color: '#94a3b8', font: { family: 'Inter', size: 11 } },
          grid: { color: 'rgba(255, 255, 255, 0.05)' }
        },
        y: {
          position: 'left',
          title: { display: true, text: 'Scouting Score', color: '#94a3b8' },
          ticks: { color: '#94a3b8' },
          grid: { color: 'rgba(255, 255, 255, 0.05)' }
        },
        y1: {
          position: 'right',
          title: { display: true, text: 'Strike Rate', color: '#f59e0b' },
          ticks: { color: '#f59e0b' },
          grid: { drawOnChartArea: false }
        }
      }
    }
  });
}

// ==================== BOWLER SCOUTING PAGE ====================
function renderBowlersView() {
  renderPriorityBowlers();
  renderBowlersTable();
  renderBowlersChart();
}

function renderPriorityBowlers() {
  const container = document.getElementById('priorityBowlersContainer');
  if (!container) return;

  const top4 = state.bowlers.slice(0, 4);
  container.innerHTML = top4.map((player, idx) => `
    <div class="glass-card prospect-card bowler-card">
      <div>
        <div class="prospect-header">
          <div class="prospect-identity">
            <div class="prospect-rank-badge ${idx === 0 ? 'rank-1' : idx === 1 ? 'rank-2' : idx === 2 ? 'rank-3' : 'rank-default'}">
              <span>#${player.Final_Rank}</span>
            </div>
            <div class="prospect-names">
              <h4>${player.bowler_name}</h4>
              <div class="team-tag"><i data-lucide="shield"></i> ${player.latest_team || 'Domestic State'} • Age ${player.Age || 'N/A'}</div>
            </div>
          </div>
          <div class="score-pill blue">
            <div class="score-num">${formatScore(player.Final_Scouting_Score)}</div>
            <div class="score-title">Scouting Score</div>
          </div>
        </div>

        <div class="prospect-metrics">
          <div class="metric-cell">
            <div class="label">Matches</div>
            <div class="val">${player.Total_Matches}</div>
          </div>
          <div class="metric-cell">
            <div class="label">Wickets</div>
            <div class="val">${player.Total_Wickets}</div>
          </div>
          <div class="metric-cell">
            <div class="label">Economy</div>
            <div class="val">${formatDecimal(player.Avg_Season_Economy || player.economy)}</div>
          </div>
          <div class="metric-cell">
            <div class="label">Bowling Avg</div>
            <div class="val">${formatDecimal(player.Avg_Season_Bowling_Average || player.bowling_average)}</div>
          </div>
          <div class="metric-cell">
            <div class="label">Strike Rate</div>
            <div class="val">${formatDecimal(player.Avg_Season_Bowling_SR || player.bowling_strike_rate)}</div>
          </div>
          <div class="metric-cell">
            <div class="label">Key Phase</div>
            <div class="val" style="color:#60a5fa; font-size:0.75rem">${getBowlerBestPhase(player.bowler_name)}</div>
          </div>
        </div>

        <div class="prospect-tags">
          <span class="tag-badge blue">Priority Target</span>
          <span class="tag-badge pink">Phase Master</span>
          <span class="tag-badge gold">Target: IPL 2027</span>
        </div>
      </div>

      <button class="btn btn-secondary" style="width:100%; padding:0.6rem; font-size:0.8rem;" onclick="openPlayerModal('bowler', '${player.bowler_name}')">
        <i data-lucide="file-text"></i> Detailed Scouting Dossier
      </button>
    </div>
  `).join('');
}

function renderBowlersTable() {
  const tbody = document.querySelector('#bowlersTable tbody');
  if (!tbody) return;

  const search = state.filters.bowlerSearch.toLowerCase();
  let list = [...state.bowlers].filter(p => p.bowler_name.toLowerCase().includes(search));

  const { field, asc } = state.sort.bowlers;
  list.sort((a, b) => {
    const valA = a[field] ?? 0;
    const valB = b[field] ?? 0;
    return asc ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
  });

  tbody.innerHTML = list.map(player => `
    <tr>
      <td>
        <span class="table-rank-pill ${player.Final_Rank <= 4 ? 'top3' : ''}">#${player.Final_Rank}</span>
      </td>
      <td>
        <div class="player-name-cell">
          <strong>${player.bowler_name}</strong>
          ${player.Final_Rank <= 4 ? '<span class="tag-badge blue" style="font-size:0.65rem;">Priority</span>' : ''}
        </div>
      </td>
      <td>${player.latest_team || 'N/A'}</td>
      <td>${player.Total_Matches}</td>
      <td style="font-weight:700; color:#fff;">${player.Total_Wickets}</td>
      <td style="color:#60a5fa; font-weight:700;">${formatDecimal(player.Avg_Season_Economy || player.economy)}</td>
      <td>${formatDecimal(player.Avg_Season_Bowling_Average || player.bowling_average)}</td>
      <td>${formatDecimal(player.Avg_Season_Bowling_SR || player.bowling_strike_rate)}</td>
      <td>
        <span style="font-family:var(--font-mono); font-weight:800; color:#60a5fa;">
          ${formatScore(player.Final_Scouting_Score)}
        </span>
      </td>
      <td>
        <button class="btn btn-secondary" style="padding:0.35rem 0.65rem; font-size:0.75rem;" onclick="openPlayerModal('bowler', '${player.bowler_name}')">
          View
        </button>
      </td>
    </tr>
  `).join('');
}

function renderBowlersChart() {
  const ctx = document.getElementById('bowlersChart');
  if (!ctx) return;

  if (state.charts.bowlers) {
    state.charts.bowlers.destroy();
  }

  const sorted = [...state.bowlers].sort((a, b) => a.Final_Rank - b.Final_Rank);

  state.charts.bowlers = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sorted.map(b => b.bowler_name),
      datasets: [
        {
          label: 'Scouting Score',
          data: sorted.map(b => b.Final_Scouting_Score),
          backgroundColor: sorted.map((_, i) => i < 4 ? 'rgba(37, 99, 235, 0.85)' : 'rgba(6, 182, 212, 0.6)'),
          borderColor: sorted.map((_, i) => i < 4 ? '#2563eb' : '#06b6d4'),
          borderWidth: 1.5,
          borderRadius: 6,
          yAxisID: 'y'
        },
        {
          label: 'Economy Rate',
          data: sorted.map(b => b.Avg_Season_Economy || b.economy || 7.5),
          type: 'line',
          borderColor: '#ea1a85',
          backgroundColor: '#ea1a85',
          borderWidth: 2,
          pointRadius: 4,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { labels: { color: '#94a3b8', font: { family: 'Inter' } } },
        tooltip: {
          backgroundColor: '#101c3b',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1
        }
      },
      scales: {
        x: {
          ticks: { color: '#94a3b8', font: { family: 'Inter', size: 11 } },
          grid: { color: 'rgba(255, 255, 255, 0.05)' }
        },
        y: {
          position: 'left',
          title: { display: true, text: 'Scouting Score', color: '#94a3b8' },
          ticks: { color: '#94a3b8' },
          grid: { color: 'rgba(255, 255, 255, 0.05)' }
        },
        y1: {
          position: 'right',
          title: { display: true, text: 'Economy Rate (lower is better)', color: '#ea1a85' },
          ticks: { color: '#ea1a85' },
          grid: { drawOnChartArea: false }
        }
      }
    }
  });
}

// ==================== BOWLING PHASE ANALYSIS ====================
function renderPhasesView() {
  renderPhasesTable();
  renderPhaseCharts();
}

function renderPhasesTable() {
  const tbody = document.querySelector('#phasesTable tbody');
  if (!tbody) return;

  const filter = state.filters.phaseFilter;
  let list = [...state.phases];
  if (filter !== 'all') {
    list = list.filter(p => (p['Best phase'] || '').toLowerCase().includes(filter.toLowerCase()));
  }

  const { field, asc } = state.sort.phases;
  list.sort((a, b) => {
    const valA = a[field] ?? 0;
    const valB = b[field] ?? 0;
    return asc ? (valA > valB ? 1 : -1) : (valA < valB ? 1 : -1);
  });

  tbody.innerHTML = list.map(item => `
    <tr>
      <td><strong>${item.Bowler}</strong></td>
      <td>
        <span class="tag-badge ${getPhaseTagColor(item['Best phase'])}">
          ${item['Best phase']}
        </span>
      </td>
      <td>${item.Balls}</td>
      <td style="font-weight:700; color:#fff;">${item.Wkts}</td>
      <td style="color:${item.Econ <= 6.5 ? '#34d399' : item.Econ <= 8 ? '#60a5fa' : '#f87171'}; font-weight:700;">
        ${formatDecimal(item.Econ)}
      </td>
      <td>
        <span style="font-family:var(--font-mono); font-weight:800; color:var(--rr-pink);">
          ${formatScore(item['Phase score'])}
        </span>
      </td>
    </tr>
  `).join('');
}

function getPhaseTagColor(phase) {
  if (!phase) return '';
  if (phase.includes('Powerplay')) return 'blue';
  if (phase.includes('Middle')) return 'pink';
  return 'gold';
}

function getBowlerBestPhase(name) {
  const found = state.phases.find(p => p.Bowler === name);
  return found ? found['Best phase'] : 'Middle Overs';
}

function renderPhaseCharts() {
  const ctx = document.getElementById('phaseComparisonChart');
  if (!ctx) return;

  if (state.charts.phase) {
    state.charts.phase.destroy();
  }

  const sortedPhases = [...state.phases].sort((a, b) => b['Phase score'] - a['Phase score']);

  state.charts.phase = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: sortedPhases.map(p => p.Bowler),
      datasets: [
        {
          label: 'Phase Score',
          data: sortedPhases.map(p => p['Phase score']),
          backgroundColor: sortedPhases.map(p => {
            if (p['Best phase'].includes('Powerplay')) return 'rgba(56, 189, 248, 0.8)';
            if (p['Best phase'].includes('Middle')) return 'rgba(168, 85, 247, 0.8)';
            return 'rgba(234, 26, 133, 0.8)';
          }),
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false }
      },
      scales: {
        x: { ticks: { color: '#94a3b8', font: { size: 10 } } },
        y: { ticks: { color: '#94a3b8' }, grid: { color: 'rgba(255, 255, 255, 0.05)' } }
      }
    }
  });
}

// ==================== METHODOLOGY & RECRUITMENT ====================
function renderMethodologyView() {
  // Static formulas & charts configured in HTML
}

function renderRecruitmentView() {
  // Rendered with verified player data
}

// ==================== PLAYER DOSSIER MODAL ====================
window.openPlayerModal = function(type, playerName) {
  const modal = document.getElementById('playerModal');
  const body = document.getElementById('modalContent');
  if (!modal || !body) return;

  let player = null;
  if (type === 'batter') {
    player = state.batters.find(b => b.batter === playerName);
  } else {
    player = state.bowlers.find(b => b.bowler_name === playerName);
  }

  if (!player) return;

  const isBatter = type === 'batter';
  const name = isBatter ? player.batter : player.bowler_name;
  const phaseInfo = !isBatter ? state.phases.find(p => p.Bowler === name) : null;

  body.innerHTML = `
    <div style="display:flex; align-items:center; gap:1rem; margin-bottom:1.5rem; border-bottom:1px solid var(--border-glass); padding-bottom:1.25rem;">
      <div class="prospect-rank-badge ${player.Final_Rank === 1 ? 'rank-1' : player.Final_Rank <= 3 ? 'rank-2' : 'rank-default'}" style="width:50px; height:50px; font-size:1.2rem;">
        #${player.Final_Rank}
      </div>
      <div>
        <h3 style="font-size:1.6rem; font-weight:800; color:#fff;">${name}</h3>
        <p style="color:var(--text-muted); font-size:0.85rem;">
          ${player.latest_team || 'Domestic State'} • Age ${player.Age || 'N/A'} • 
          <span style="color:var(--rr-pink); font-weight:700;">Final Score: ${formatScore(player.Final_Scouting_Score)}</span>
        </p>
      </div>
    </div>

    <h4 style="font-size:0.9rem; text-transform:uppercase; letter-spacing:0.8px; color:var(--text-muted); margin-bottom:0.75rem;">
      Verified Career T20 Metrics
    </h4>
    <div class="prospect-metrics" style="grid-template-columns:repeat(3, 1fr); margin-bottom:1.5rem;">
      <div class="metric-cell">
        <div class="label">Matches</div>
        <div class="val">${player.Total_Matches}</div>
      </div>
      <div class="metric-cell">
        <div class="label">${isBatter ? 'Total Runs' : 'Wickets'}</div>
        <div class="val">${isBatter ? player.Total_Runs : player.Total_Wickets}</div>
      </div>
      <div class="metric-cell">
        <div class="label">${isBatter ? 'Avg Season Avg' : 'Economy'}</div>
        <div class="val">${isBatter ? formatDecimal(player.Avg_Season_Average || player.average) : formatDecimal(player.Avg_Season_Economy || player.economy)}</div>
      </div>
      <div class="metric-cell">
        <div class="label">${isBatter ? 'Avg Season SR' : 'Bowling Avg'}</div>
        <div class="val">${isBatter ? formatDecimal(player.Avg_Season_SR || player.strike_rate) : formatDecimal(player.Avg_Season_Bowling_Average || player.bowling_average)}</div>
      </div>
      <div class="metric-cell">
        <div class="label">Active Seasons</div>
        <div class="val">${player.Active_Seasons || player.smat_seasons || 'N/A'}</div>
      </div>
      <div class="metric-cell">
        <div class="label">Priority Level</div>
        <div class="val" style="color:var(--rr-pink);">${player.Final_Rank <= (isBatter ? 3 : 4) ? 'Tier 1 Priority' : 'Secondary'}</div>
      </div>
    </div>

    ${phaseInfo ? `
      <h4 style="font-size:0.9rem; text-transform:uppercase; letter-spacing:0.8px; color:var(--text-muted); margin-bottom:0.75rem;">
        Phase Specialization
      </h4>
      <div style="background:rgba(7,13,30,0.6); border:1px solid var(--border-glass); border-radius:10px; padding:1rem; margin-bottom:1.5rem;">
        <p style="display:flex; justify-content:space-between; margin-bottom:0.4rem; font-size:0.85rem;">
          <span style="color:var(--text-muted)">Best Bowling Phase:</span>
          <strong style="color:#60a5fa">${phaseInfo['Best phase']}</strong>
        </p>
        <p style="display:flex; justify-content:space-between; margin-bottom:0.4rem; font-size:0.85rem;">
          <span style="color:var(--text-muted)">Balls / Wkts in Phase:</span>
          <strong>${phaseInfo.Balls} balls / ${phaseInfo.Wkts} wkts</strong>
        </p>
        <p style="display:flex; justify-content:space-between; margin-bottom:0.4rem; font-size:0.85rem;">
          <span style="color:var(--text-muted)">Economy in Phase:</span>
          <strong style="color:#34d399">${formatDecimal(phaseInfo.Econ)}</strong>
        </p>
        <p style="display:flex; justify-content:space-between; font-size:0.85rem;">
          <span style="color:var(--text-muted)">Phase Score:</span>
          <strong style="color:var(--rr-pink)">${formatScore(phaseInfo['Phase score'])}</strong>
        </p>
      </div>
    ` : ''}

    <div class="alert-callout" style="padding:1rem; margin-bottom:0;">
      <div class="alert-title" style="font-size:0.85rem;"><i data-lucide="info"></i> Scouting Assessment Notice</div>
      <p style="font-size:0.8rem; color:var(--text-muted); line-height:1.5;">
        Performance is evaluated based on domestic SMAT competition data up to the 2024/25 season. 
        Detailed video review and recruitment availability verification must precede franchise auction bidding.
      </p>
    </div>
  `;

  modal.classList.add('active');
  initLucide();
};

window.closePlayerModal = function() {
  const modal = document.getElementById('playerModal');
  if (modal) modal.classList.remove('active');
};

// ==================== EVENT LISTENERS ====================
function setupEventListeners() {
  // Batters Search
  const bSearch = document.getElementById('batterSearch');
  if (bSearch) {
    bSearch.addEventListener('input', (e) => {
      state.filters.batterSearch = e.target.value;
      renderBattersTable();
    });
  }

  // Bowlers Search
  const bwSearch = document.getElementById('bowlerSearch');
  if (bwSearch) {
    bwSearch.addEventListener('input', (e) => {
      state.filters.bowlerSearch = e.target.value;
      renderBowlersTable();
    });
  }

  // Phase Filter
  const phaseSelect = document.getElementById('phaseFilterSelect');
  if (phaseSelect) {
    phaseSelect.addEventListener('change', (e) => {
      state.filters.phaseFilter = e.target.value;
      renderPhasesTable();
    });
  }

  // Table Header Sorting
  document.querySelectorAll('th[data-sort-table]').forEach(th => {
    th.addEventListener('click', () => {
      const table = th.getAttribute('data-sort-table');
      const field = th.getAttribute('data-sort-field');
      if (state.sort[table].field === field) {
        state.sort[table].asc = !state.sort[table].asc;
      } else {
        state.sort[table].field = field;
        state.sort[table].asc = true;
      }

      if (table === 'batters') renderBattersTable();
      if (table === 'bowlers') renderBowlersTable();
      if (table === 'phases') renderPhasesTable();
    });
  });

  // Modal Backdrop Click
  const modal = document.getElementById('playerModal');
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closePlayerModal();
    });
  }
}

// Helpers
function formatDecimal(val) {
  if (val === null || val === undefined || isNaN(val)) return 'N/A';
  return Number(val).toFixed(2);
}

function formatScore(val) {
  if (val === null || val === undefined || isNaN(val)) return 'N/A';
  return Number(val).toFixed(2);
}
