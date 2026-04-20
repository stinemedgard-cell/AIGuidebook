# KI i Akademia - Informasjonsplattform

## Design Guidelines

### Design References
- Academic/institutional websites with clean, trustworthy aesthetics
- Norwegian university portals for tone and structure

### Color Palette
- Primary: #1e293b (Deep Blue/Slate 800)
- Secondary: #334155 (Slate 700)
- Accent: #3b82f6 (Blue 500)
- Background: #f8fafc (Slate 50)
- White: #ffffff
- Light Gray: #f1f5f9 (Slate 100)
- Border: #e2e8f0 (Slate 200)
- Success: #22c55e (Green)
- Danger: #ef4444 (Red)
- Warning: #f59e0b (Amber)

### Typography
- Headings: Inter, font-weight 700
- Body: Inter, font-weight 400
- Navigation: Inter, font-weight 600

### Key Component Styles
- Cards: White bg, subtle shadow, rounded-xl, hover lift effect
- Buttons: Blue accent bg, white text, rounded-lg
- Accordions: Clean borders, smooth expand animation
- Modals: backdrop-blur overlay, centered, rounded-xl

### Images to Generate
1. hero-academic-ai.jpg - Abstract academic illustration with AI/technology elements, blue tones, modern
2. ethics-academic.jpg - Illustration representing academic ethics and integrity, scales of justice with digital elements
3. security-data.jpg - Illustration of data security and privacy, shield with lock, digital protection
4. reliability-ai.jpg - Illustration of AI reliability, magnifying glass examining data accuracy
5. news-ai-research.jpg - Academic research with AI, students and technology

---

## File Structure (max 8 code files)

1. **src/pages/Index.tsx** - Landing page (Hero, Chat, Guidelines cards, Tools grid, News carousel, FAQ)
2. **src/pages/Guidelines.tsx** - Guidelines subpage (Etikk, Sikkerhet, Pålitelighet) with route param
3. **src/pages/Tools.tsx** - Anbefalte Verktøy with filtering system
4. **src/pages/References.tsx** - Kildehenviser & Redegjørelse with tab system
5. **src/pages/Checklist.tsx** - Interaktiv Sjekkliste with progress bar, LocalStorage, PDF download
6. **src/pages/Legal.tsx** - Personvern, Vilkår, Om oss (route param based)
7. **src/components/Layout.tsx** - Header, Footer, Contact Modal, Language context
8. **src/App.tsx** - Router setup (update existing)

## Features per file

### Layout.tsx
- Sticky header with logo, nav links, language switcher (NO/EN), contact button
- Footer with 3 columns
- Contact modal with backdrop-blur
- Language context provider (NO/EN)

### Index.tsx (Landing Page)
- Hero with centered heading + simulated RAG chat interface
- 3 clickable example questions
- Guidelines cards (Etikk, Sikkerhet, Pålitelighet)
- Practical tools grid (3 modules)
- News carousel (horizontal, 3-4 articles)
- FAQ accordions (5 items)

### Guidelines.tsx
- Dynamic route (/retningslinjer/:type)
- Top section with illustration, title, last updated
- Content with examples, case studies
- Tillatt/Ikke-tillatt table

### Tools.tsx
- Filter system (Alle, Tekst, Koding, Analyse, Multimedia)
- Tool cards with name, icon, use case, status badge, security note, link

### References.tsx
- Tab system (APA 7, Harvard, Vancouver)
- In-text and bibliography examples with copy button
- Redegjørelse templates (3 levels)
- Fusk vs Godkjent comparison (red vs green)

### Checklist.tsx
- Progress bar
- 3 categories with checkpoints
- LocalStorage persistence
- Download PDF button

### Legal.tsx
- Route param based (/juridisk/:type)
- Personvern, Vilkår, Om oss content