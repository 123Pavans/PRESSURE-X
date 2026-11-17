# PRESSURE-X: RR SupeRR Selector Season 2

A data-driven domestic T20 scouting analysis to identify 10 emerging
batters and 10 emerging bowlers for a Rajasthan Royals scouting
watchlist ahead of IPL 2027.

> **Important:** PRESSURE-X is a decision-support project. Statistical
> rankings are not final recruitment recommendations and do not replace
> professional scouting, video review, fitness assessment, or role-fit
> evaluation.

## Project Objectives

-   Build a shortlist of 10 emerging batters and 10 emerging bowlers.
-   Rank players using transparent, weighted performance metrics.
-   Analyse shortlisted bowlers by Powerplay, Middle Overs, and Death
    Overs.
-   Convert the analysis into practical scouting priorities.

## Key Deliverables

  ---------------------------------------------------------------------------------------
  File                                                Description
  --------------------------------------------------- -----------------------------------
  `PRESSURE_X_Final_Scouting_Report.xlsx`             Consolidated report containing the
                                                      executive summary, player
                                                      shortlists, methodology, bowling
                                                      phase analysis, recruitment
                                                      recommendations, and limitations.

  `PRESSURE_X_Final_10_Batters.csv`                   Final ranked batter shortlist.

  `PRESSURE_X_Final_10_Bowlers.csv`                   Final ranked bowler shortlist.

  `PRESSURE_X_Bowling_Phase_Analysis.csv`             Best-phase analysis for the 10
                                                      shortlisted bowlers.

  `PRESSURE_X_RR_SupeRR_Selector_Presentation.pptx`   Project presentation.
  ---------------------------------------------------------------------------------------

## Methodology

### Batter scoring

  Metric                         Weight
  ---------------------------- --------
  Batting average percentile        25%
  Strike-rate percentile            25%
  Total runs percentile             20%
  Consistency                       15%
  Recent matches                    10%
  Active seasons                     5%

Minimum candidate filters: at least 8 matches and 250 runs. The
emerging-player pool used an age context of 29 years or below.

### Bowler scoring

  Metric                                               Weight
  -------------------------------------------------- --------
  Bowling average percentile (lower is better)            25%
  Economy-rate percentile (lower is better)               25%
  Total wickets                                           20%
  Bowling strike-rate percentile (lower is better)        15%
  Economy consistency                                     10%
  Recent matches                                           5%

Minimum candidate filters: at least 8 matches and 12 wickets.

Scores are weighted, candidate-pool-relative percentile scores. They
should be interpreted as ranking signals within this analysis, not
universal player ratings.

## Bowling Phase Analysis

The phase analysis groups deliveries into: - **Powerplay:** overs 0--5 -
**Middle Overs:** overs 6--14 - **Death Overs:** overs 15--19

The phase table records each shortlisted bowler's best-performing phase,
sample balls, wickets, economy, and relative phase score. Phase scores
are relative to the comparison groups and are not absolute performance
grades.

## Data and Coverage

The available domestic T20 / Syed Mushtaq Ali Trophy ball-by-ball data
used for phase analysis ends in the 2024/25 season. The project does not
claim to measure 2025/26 form.

The IPL identity and career-appearance audit is incomplete for some
shortlisted players. A missing match in the reviewed data must not be
interpreted as proof that a player has never appeared in the IPL. Known
IPL exposure and unresolved identity matches should be checked against
authoritative player and match records before using the shortlist for
eligibility decisions.

## Important Limitations

1.  **Historical coverage:** The available SMAT ball-by-ball archive
    ends in 2024/25.
2.  **IPL eligibility audit:** Full career appearance verification is
    incomplete for some candidates. The shortlist should not be treated
    as a verified list of players with 12 or fewer IPL appearances.
3.  **Sample size:** Some players have limited match, wicket, or phase
    samples. High scores based on small samples require additional
    scrutiny.
4.  **Relative scores:** Percentile scores depend on the filtered
    candidate pool and are not absolute measures of talent.
5.  **Season averages:** Unweighted averages of season-level statistics
    can be affected by unequal season sample sizes.
6.  **Squad fit:** The model does not fully assess role requirements,
    opposition matchups, fielding, fitness, availability, auction price,
    or team balance.

## Suggested Repository Structure

``` text
PRESSURE-X/
├── data/
│   └── README.md                  # Describe data sources and access restrictions
├── notebooks/
│   └── PRESSURE_X_Analysis.ipynb  # Main analysis notebook
├── outputs/
│   ├── PRESSURE_X_Final_Scouting_Report.xlsx
│   ├── PRESSURE_X_Final_10_Batters.csv
│   ├── PRESSURE_X_Final_10_Bowlers.csv
│   └── PRESSURE_X_Bowling_Phase_Analysis.csv
├── presentation/
│   └── PRESSURE_X_RR_SupeRR_Selector_Presentation.pptx
└── README.md
```

Do not upload datasets unless their licence and redistribution terms
permit it. If the raw data is not distributable, document its source and
provide instructions for obtaining it.

## Reproducing the Analysis

1.  Clone or download this repository.
2.  Review the data-source notes and ensure you have permission to use
    the required datasets.
3.  Install the Python packages imported by the notebook (for example,
    `pandas`, `numpy`, and the relevant notebook/visualisation
    packages).
4.  Place the permitted source data in the expected data directory.
5.  Open and run the analysis notebook in order.
6.  Review the generated tables and validate player identity,
    eligibility, and sample sizes before relying on the rankings.

Exact dataset filenames and notebook paths should be documented in the
repository after the final notebook is added.

## Validation Status

The final exported tables were checked for: - 10 rows in each shortlist
and phase-analysis table - No missing values in the exported tables - No
duplicate rows or duplicate player names - Successful CSV export

These checks confirm output structure and completeness, not the
correctness of every underlying statistic or player-eligibility claim.

## Scouting Priorities

The analysis identifies a priority group among the shortlisted batters
and bowlers. These players should receive further review rather than
automatic selection. Recommended next checks include: - Recent match
video and role-specific performance - Quality of opposition and match
conditions - Powerplay, middle-over, and death-over role suitability -
Fitness, fielding, availability, and workload - IPL squad balance and
auction context

## Disclaimer

PRESSURE-X is an independent academic / analytical scouting project. It
is not an official Rajasthan Royals product and does not imply
endorsement, affiliation, or access to internal franchise scouting
information. All rankings are based on the data and methodology
described in this repository.
