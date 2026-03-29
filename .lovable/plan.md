

# King_Cobra74 — Viewer Commands (HIVE Style Redesign)

## Overview
Redesign the Viewer Commands page using the HIVE Music Player's dark theme with orange/amber accent colors, clean layout, and minimal aesthetic.

## Design System
- **Background**: Very dark (#0d0d0d / near-black)
- **Card/Surface**: Slightly lighter dark (#1a1a1a)
- **Accent color**: Orange/amber (#f5a623) — used for headings, badges, active tabs, highlights
- **Text**: White primary, muted gray secondary
- **Font style**: Clean, modern, slightly monospaced for command names
- **Border radius**: Subtle rounded corners matching HIVE style

## Layout & Components

### Header
- HIVE-style logo area with "🎮 King_Cobra74 — Viewer Commands"
- Subtitle: "Everything you can do in chat — flight controls, AI copilot, music requests, and more."
- Settings gear icon in top-right (decorative)

### Category Navigation
- Horizontal pill/chip tabs: General, Flight Controls, Quick Sim, Camera, TTS & AI, Music, AI Art, Routes, Keywords, Bot Features
- Active tab gets orange background, others are outlined/subtle
- Clicking a tab scrolls to or filters that section

### Command Tables
- Each category section with an orange heading + subtle divider
- Brief section description below heading
- Table with two columns: COMMAND (orange badge style) and DESCRIPTION
- Alternating row backgrounds for readability
- Command names styled as inline code/badges with orange tint

### Commands Data
- All categories and commands hardcoded from the screenshot (General section with !commands, !planestatus, !planehelp, !flightdata, !autopilot, !hive, !features, !sim, !discord, !socials, !uptime)
- Placeholder commands for other categories (user can fill in later)

### Responsive
- Stacks vertically on mobile, horizontal scroll for tabs if needed

## Pages
- Single page at "/" replacing the current placeholder

