# AIGuidebook - Development Plan

## Design Guidelines

### Design References
- **ChatGPT/Gemini**: Central chat interface inspiration
- **Academic/University portals**: Clean, professional, minimalist
- **Style**: Clean Academic Minimalism

### Color Palette
- Primary Background: #FFFFFF (White)
- Secondary Background: #F8F9FA (Light Gray)
- Accent: #1E3A5F (Deep Navy Blue)
- Accent Light: #2D5F8B (Professional Blue)
- Accent Hover: #163050 (Darker Navy)
- Text Primary: #1A1A2E (Near Black)
- Text Secondary: #6B7280 (Gray)
- Border: #E5E7EB (Light Border)
- Chat User Bubble: #1E3A5F (Navy)
- Chat AI Bubble: #F1F5F9 (Light Blue-Gray)

### Typography
- Font Family: Inter (clean, academic feel)
- Heading1: Inter font-weight 700 (36px) - centered
- Heading2: Inter font-weight 600 (28px) - centered
- Heading3: Inter font-weight 600 (20px)
- Body: Inter font-weight 400 (16px)
- Small: Inter font-weight 400 (14px)

### Key Component Styles
- **Buttons**: Navy background (#1E3A5F), white text, 8px rounded, hover: darken
- **Cards**: White bg, subtle border (#E5E7EB), 12px rounded, soft shadow
- **Input**: White bg, border, focus: navy accent ring
- **Accordion**: Clean borders, smooth expand animation

### Layout & Spacing
- Max content width: 1200px centered
- Section padding: 80px vertical
- Card grid: 3-4 columns desktop, 2 tablet, 1 mobile
- Generous white space between sections

### Images to Generate
1. **hero-bg-abstract-network.jpg** - Abstract neural network pattern, soft blue tones, academic feel, subtle and elegant (Style: minimalist, light)
2. **news-ai-education.jpg** - Students using AI tools in a modern university setting, bright and professional (Style: photorealistic)
3. **news-ethics-ai.jpg** - Abstract representation of AI ethics, balanced scales with digital elements, blue tones (Style: minimalist)
4. **news-research-ai.jpg** - Researcher working with AI data visualization, modern lab setting (Style: photorealistic)

---

## Development Tasks

### Files to Create (8 files max)

1. **src/pages/Index.tsx** - Main page composing all sections
2. **src/components/Header.tsx** - Sticky header with logo, language toggle, profile icon, hamburger menu, Feide login modal
3. **src/components/HeroChat.tsx** - KI-Chat interface with message area, input bar, chat history sidebar
4. **src/components/Guidelines.tsx** - Retningslinjer section with info cards grid
5. **src/components/FAQ.tsx** - FAQ accordion section
6. **src/components/NewsCarousel.tsx** - News carousel with framer-motion
7. **src/components/Footer.tsx** - Footer with links, contact form modal
8. **src/App.tsx** - Router setup (update existing)

### Implementation Order
1. Create all component files
2. Update Index.tsx to compose them
3. Update App.tsx for routing
4. Update index.html title
5. Lint & build check
6. CheckUI validation