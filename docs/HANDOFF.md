# 54-Day Novena - Agent Handoff Document

**Last Updated:** 2026-02-05
**Project:** 54-Day Novena App

---

## Project Overview
A specialized Rosary application for the 54-Day Rosary Novena. It guides users through the 27 days of petition and 27 days of thanksgiving, switching mysteries automatically based on the cycle.

**Live URL:** [https://ansumiriam.github.io/54DayNovena/](https://ansumiriam.github.io/54DayNovena/)
**Repository:** `github.com/ansumiriam/54DayNovena`

---

## Tech Stack
- **Framework:** Vite + React + TypeScript
- **Styling:** Tailwind CSS + Shadcn UI
- **Icons:** Lucide React
- **PWA:** vite-plugin-pwa (configured for offline use)
- **Deployment:** GitHub Pages (via `gh-pages` branch)

---

## Core Features
1. **Novena Tracking:** Automatically calculates Day 1-54, Phase (Petition/Thanksgiving), and the correct Mystery for the day.
2. **Prayer Reader:** A dedicated interface for reading the specific mystery details, fruits, and associated prayers.
3. **Malayalam Localization:** Fully localized experience for Malayalam speakers.
4. **Themes:** Light and Dark mode support.
5. **Petitions:** Local storage for personal prayer intentions.

---

## Recent Updates (Feb 5, 2026)

### 1. Full Malayalam Localization
- **Mystery Decades:** All 20 decades (Joyful, Sorrowful, Glorious, Luminous) are now fully translated in `src/data/prayers-ml.ts`.
- **Content:** Translation includes Decade Names, Fruits, Bible Verses (with references), and specific Novena prayers.
- **Reference Accuracy:** Malayalam Bible references (e.g., ലൂക്കാ, യോഹന്നാൻ) updated to match traditional usage.

### 2. Luminous Mysteries Template
- Updated the **Luminous Mysteries** to use the **Joyful Mysteries'** opening and closing prayers for both English and Malayalam.
- This maintain's the traditional "Snow-white buds" template for the Luminous mysteries in the novena context.

### 3. UI/UX Enhancements
- **Language Switch:** Replaced the standard Shadcn Switch with a custom **Segmented Segmented Toggle** (EN | മല) in Settings for a more premium feel and better accessibility.
- **Responsive Reading:** Optimized the reading view for mobile devices to prevent clipping of Malayalam text.

---

## Project Structure
```
src/
├── components/          # Shared UI (Shadcn + Custom)
├── data/               # Prayer content
│   ├── prayers.ts      # English data
│   └── prayers-ml.ts   # Malayalam data
├── hooks/              # custom logic (useNovenaProgress)
├── pages/              # Application screens
│   ├── Home.tsx        # Dashboard
│   ├── PrayerReader.tsx # Reading interface
│   └── Settings.tsx    # App preferences
└── lib/                # Utils (cn, etc.)
```

---

## Pending Work
- [ ] Add sound/haptic feedback for bead tracking if implemented as a manual feature.
- [ ] Implement a "Reset" confirmation with more granular options (Reset Day but keep Petitions).
- [ ] Add more "Common Prayers" for quick access within the reader.

---

*Handoff document updated to reflect the completion of the Malayalam localization phase.*
