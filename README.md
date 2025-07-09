# Hussein Almohmmed Law & Legal Consultations Website

A modern, bilingual (English/Arabic) law firm website built with Next.js, featuring advanced animations, responsive design, and elegant UI components.

## 🏗️ Project Structure

```
nextjs-law-firm/
├── app/
│   ├── layout.js              # Root layout with metadata
│   └── page.js                # Main page component (organized & clean)
├── components/
│   ├── AnimatedBackground.js  # Advanced background animations
│   ├── LegalIcons.js         # Legal-themed SVG icons collection
│   ├── ParticlesBackground.js # Particle system background
│   ├── Header.js             # Navigation header component
│   ├── Hero.js               # Hero section with particles
│   ├── Credentials.js        # Professional credentials section
│   ├── About.js              # About section with animations
│   ├── PracticeAreas.js      # 3D flip cards for services
│   ├── Testimonials.js       # Client testimonials
│   ├── Contact.js            # Contact form and info
│   └── Footer.js             # Footer with links and info
├── hooks/
│   └── index.js              # Custom React hooks (language, mobile, menu)
├── data/
│   └── content.js            # Bilingual content (English/Arabic)
├── styles/
│   └── globals.css           # Global styles and animations
└── public/
    └── header.png            # Logo image
```

## 🔧 Development

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build
npm run start
```

## 🌟 Notable Improvements from Original
1. **Modular Architecture**: Separated concerns into logical components
2. **Centralized Content**: All text content in one manageable file
3. **Custom Hooks**: Reusable state logic
4. **Better Performance**: Optimized animations and lazy loading
5. **Cleaner Code**: Removed duplicate code and improved organization
6. **Enhanced Maintainability**: Clear file structure and component separation

This structure makes the codebase more maintainable, scalable, and easier to work with for future enhancements.