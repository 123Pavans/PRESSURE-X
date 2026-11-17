# PRESSURE-X: RR SupeRR Selector | IPL 2027 Scouting Analytics

A professional, high-performance cricket scouting analytics platform engineered to discover emerging Indian domestic T20 talent for **Rajasthan Royals' IPL 2027 recruitment cycle**.

Built with a terminal-inspired dark navy UI, Rajasthan Royals-themed pink and royal blue accents, interactive Chart.js visualizations, and dynamic PapaParse CSV data streaming.

---

## 🚀 Key Features

1. **Home Intelligence Dashboard:**
   - Real-time KPIs for shortlisted batters (10) and bowlers (10).
   - Multi-axis radar comparison benchmarking top prospect profiles (Virat Singh vs Khrievitso Kense).
   - High-level architecture overview and talent filtering pipeline.

2. **Batter Scouting Hub (Top 10):**
   - Verified domestic data streamed directly from `PRESSURE_X_Final_10_Batters.csv`.
   - Priority spotlight cards for Top 3 Prospects: **Virat Singh**, **Atharva Taide**, and **Shivam Chauhan**.
   - Dual-axis interactive comparison chart (Scouting Score vs Strike Rate).
   - Real-time text search and multi-column sorting (Rank, Name, Matches, Runs, Average, Strike Rate, Score).

3. **Bowler Scouting Hub (Top 10):**
   - Verified domestic data streamed directly from `PRESSURE_X_Final_10_Bowlers.csv`.
   - Priority spotlight cards for Top 4 Prospects: **Khrievitso Kense**, **NA Rathva**, **Akash Choudhary**, and **Pradipta Pramanik**.
   - Dual-axis interactive comparison chart (Scouting Score vs Economy Efficiency).
   - Interactive search and sortable table covering Economy, Bowling Average, and Strike Rate.

4. **Bowling Phase Analysis:**
   - Ball-by-ball performance segregation across **Powerplay** (0–5), **Middle Overs** (6–14), and **Death Overs** (15–19).
   - Phase score rankings from `PRESSURE_X_Bowling_Phase_Analysis.csv`.
   - Interactive Phase Filter and Ball Volume Heatmap matrix isolating specialist roles.

5. **Methodology & Mathematical Formulations:**
   - Transparent breakdown of the weighted multi-factor percentile models:
     - **Batter Model (100%):** Average (25%) + Strike Rate (25%) + Runs (20%) + Consistency (15%) + Recent Matches (10%) + Active Seasons (5%).
     - **Bowler Model (100%):** Bowling Avg (25%) + Economy (25%) + Wickets (20%) + Strike Rate (15%) + Economy Consistency (10%) + Recent Matches (5%).
   - Candidate filtering thresholds (≥ 8 matches, ≥ 250 runs or 12 wickets, Age ≤ 29).

6. **Recruitment Insights & Tactical Scouting Dossier:**
   - Dedicated scouting breakdowns highlighting technical strengths, tactical roles, phase compatibility, and trial action plans.
   - Individual player modal popup with deep-dive performance stats.

7. **Reports & Downloads Hub:**
   - Direct download buttons for all project artifacts:
     - Final Scouting Report (`PRESSURE_X_Final_Scouting_Report.xlsx`)
     - Executive Scouting Presentation (`PRESSURE_X_Project_Presentation.pptx`)
     - Top 10 Batters (`PRESSURE_X_Final_10_Batters.csv`)
     - Top 10 Bowlers (`PRESSURE_X_Final_10_Bowlers.csv`)
     - Bowling Phase Analysis (`PRESSURE_X_Bowling_Phase_Analysis.csv`)
     - Master Dataset Payload (`dataset.json`)

8. **Strict Data Integrity & Disclosures:**
   - 0% fabricated statistics; zero invented metrics.
   - Prominent disclosure of SMAT 2024/25 historical bounds, relative candidate cohort percentiles, and IPL appearance verification limits.

---

## 🛠️ Technology Stack

- **HTML5 & Vanilla CSS3:** Modern glassmorphism, responsive CSS grid, flexbox, zero heavyweight frameworks.
- **JavaScript (ES6+):** Modular client-side state management, search/sort engine, and dual-layer fetch fallback.
- **Chart.js:** Responsive radar, bar, and dual-axis combo charts with custom dark navy tooltips.
- **PapaParse:** Client-side CSV stream processing directly parsing local CSV files.
- **Lucide Icons:** Clean, minimalist iconography.

---

## 💻 Running the Platform Locally

### Option 1: Python HTTP Server (Recommended)
From the project folder (`pressure-x/`):

```bash
# Python 3.x
python -m http.server 8000
```
Open your browser and navigate to:
```
http://localhost:8000
```

### Option 2: Node.js / npx
```bash
npx serve .
# or
npx http-server -p 8000
```

### Option 3: Direct File Opening
Double-click `index.html` in your file explorer. Thanks to the embedded dataset fallback, all interactive charts, filters, and priority cards will render seamlessly without needing an active server.

---

## 🌐 Deployment Instructions

### Deploy to GitHub Pages
1. Initialize a git repository and commit the project files:
   ```bash
   git init
   git add .
   git commit -m "Initial commit of PRESSURE-X scouting platform"
   ```
2. Push to your GitHub repository:
   ```bash
   git remote add origin https://github.com/<your-username>/pressure-x.git
   git branch -M main
   git push -u origin main
   ```
3. In GitHub repository settings:
   - Navigate to **Settings** > **Pages**.
   - Under **Build and deployment** > **Source**, select `Deploy from a branch`.
   - Set branch to `main` and folder to `/ (root)`.
   - Click **Save**. The website will be live in ~60 seconds.

### Deploy to Vercel
1. Install Vercel CLI (or connect GitHub repo via [vercel.com](https://vercel.com)):
   ```bash
   npm i -g vercel
   vercel
   ```
2. Accept the defaults (root directory `./`, no build command required).

---

## 📊 Data Files Reference

| File | Purpose | Source |
|---|---|---|
| `PRESSURE_X_Final_10_Batters.csv` | Top 10 shortlisted domestic batters | SMAT candidate pool |
| `PRESSURE_X_Final_10_Bowlers.csv` | Top 10 shortlisted domestic bowlers | SMAT candidate pool |
| `PRESSURE_X_Bowling_Phase_Analysis.csv` | Phase-wise balls, wickets, economy, & score | Ball-by-ball analysis |
| `PRESSURE_X_Final_Scouting_Report.xlsx` | Multi-sheet scouting master report | Exported Excel report |
| `PRESSURE_X_Project_Presentation.pptx` | 6-slide executive recruitment briefing | Project Presentation |

---

## ⚖️ Disclaimer
PRESSURE-X is an independent sports analytics evaluation framework built for cricket recruitment intelligence and player performance modeling. It does not claim official commercial endorsement or affiliation with Rajasthan Royals or the BCCI.
