# 54-Day Rosary Novena

A specialized Progressive Web App (PWA) designed to guide users through the traditional 54-Day Rosary Novena (27 days of petition and 27 days of thanksgiving).

## ✨ Features

- **Automatic Cycle Tracking**: Automatically determines the Day, Phase, and Mystery for the day.
- **Bilingual Support**: Full support for English and Malayalam.
- **Privacy First**: All your prayer progress and personal petitions are stored locally on your device.
- **PWA Ready**: Install it on your home screen for offline access.
- **Dark Mode**: Gentle on the eyes for early morning or late night prayers.

## 🚀 Deployment

The app is built with Vite and deployed to GitHub Pages.

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build and Deploy to GitHub Pages
npm run deploy
```

## 📂 Project Structure

- `src/data`: Contains the prayer text and mystery metadata for both languages.
- `src/hooks`: Contains `useNovenaProgress` which handles the core logic for day calculation.
- `src/pages`: Main application screens (Home, PrayerReader, Settings).

## 🛠️ Tech Stack

- **React + TypeScript**
- **Tailwind CSS**
- **Shadcn/UI**
- **Vite**

---
*Created for the faithful to pray with ease.*
