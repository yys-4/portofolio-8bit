# 🎮 8-bit Retro Portfolio

A gamified personal portfolio website with an authentic NES/8-bit aesthetic. Transform your professional CV into an immersive gaming experience!

![Portfolio Preview](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- **🕹️ Gamified Sections:**
  - **Player Select** - Hero section with character stats (ATK, DEF, MAG, SPD)
  - **Inventory** - Skills displayed as power-ups with progress bars
  - **Quest Log** - Work experience as completed adventures
  - **Multiplayer Mode** - Contact section with arcade-style buttons

- **🎨 Authentic 8-bit Styling:**
  - Press Start 2P pixel font
  - Thick pixelated borders
  - NES-inspired color palette
  - Arcade button press animations
  - Blinking "Insert Coin" effects

- **📱 Fully Responsive:**
  - Mobile-first design
  - Adapts to all screen sizes
  - Touch-friendly interactions

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or pnpm

### Installation

\`\`\`bash
# Clone the repository
git clone <your-repo-url>
cd portfolio

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view your portfolio.

## 🎯 Customization

### Update Your CV Data

Edit \`lib/cv-data.ts\` to customize your portfolio:

\`\`\`typescript
export const playerData = {
  hero: {
    name: "Your Name",
    class: "Your Class",
    level: 99,
    bio: "Your bio...",
    stats: { attack: 95, defense: 90, magic: 85, speed: 88 }
  },
  skills: [
    { name: "Next.js", level: 95, type: "attack", icon: "⚛️" },
    // Add your skills...
  ],
  experience: [
    {
      questName: "Your Job Title",
      guild: "Company Name",
      achievements: ["Achievement 1", "Achievement 2"],
      // ...
    }
  ],
  contact: {
    methods: [
      { name: "Send Message", action: "mailto:your@email.com", icon: "📧" },
      // Update with your links...
    ]
  }
};
\`\`\`

### Add Your Avatar

1. Create a pixel-art avatar (16x16 or 32x32)
2. Save to \`public/images/avatar.png\`
3. Update \`components/hero-section.tsx\`

### Color Customization

Edit \`app/globals.css\` to change the NES color palette:

\`\`\`css
.bg-nes-dark { background-color: #212529; }
.bg-nes-yellow { background-color: #f7d51d; }
.bg-nes-blue { background-color: #209cee; }
/* Add more colors... */
\`\`\`

## 🏗️ Tech Stack

- **Framework:** [Next.js 15](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Components:** [8bitcn-ui](https://8bitcn.com/) (shadcn-based retro components)
- **Font:** [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)

## 📁 Project Structure

\`\`\`
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── hero-section.tsx    # Player Select
│   ├── skills-inventory.tsx # Skills/Inventory
│   ├── quest-log.tsx       # Experience/Quest Log
│   ├── contact-section.tsx # Contact/Multiplayer
│   └── ui/8bit/            # 8bitcn-ui components
└── lib/
    └── cv-data.ts          # Your CV data
\`\`\`

## 🎨 Gamification Mapping

| CV Section | Gaming Equivalent | Visual Treatment |
|------------|------------------|------------------|
| Profile | Player Select | Character sprite, Level 99, stats |
| Skills | Inventory/Power-ups | Progress bars, skill levels |
| Experience | Quest Log | Completed quests with XP |
| Contact | Multiplayer Mode | Arcade buttons |

## 🚢 Deployment

### Deploy to Vercel (Recommended)

\`\`\`bash
# Build the project
npm run build

# Deploy to Vercel
npx vercel
\`\`\`

Or connect your GitHub repository to [Vercel](https://vercel.com) for automatic deployments.

### Build for Production

\`\`\`bash
npm run build
npm run start
\`\`\`

## 📝 License

MIT License - feel free to use this template for your own portfolio!

## 🙏 Credits

- **8bitcn-ui:** [TheOrcDev/8bitcn-ui](https://github.com/TheOrcDev/8bitcn-ui)
- **Press Start 2P Font:** [Google Fonts](https://fonts.google.com/specimen/Press+Start+2P)
- **Inspiration:** Classic NES games and retro gaming aesthetics

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

**Built with ❤️ and 🎮 by Muhammad Ayyas**
