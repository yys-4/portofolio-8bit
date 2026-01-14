/**
 * Gamified CV Data for 8-bit Portfolio
 * Based on Muhammad Ayyas's professional profile
 */

export const playerData = {
  // PLAYER SELECT / CHARACTER STATS
  hero: {
    name: "Muhammad Ayyas",
    title: "Full Stack Developer", // Will be displayed as "Lv. 99 Code Wizard"
    class: "Code Wizard",
    level: 99,
    avatar: "/images/pixel-avatar.png", // Placeholder - will generate
    bio: "A passionate developer crafting digital experiences with modern web technologies. Specializing in full-stack development with a focus on clean code and user experience.",
    stats: {
      attack: 95,    // Frontend Skills
      defense: 90,   // Backend Skills
      magic: 85,     // DevOps/Tools
      speed: 88,     // Agility/Learning
    }
  },

  // INVENTORY / SKILL TREE
  skills: [
    {
      name: "Next.js",
      category: "Frontend Magic",
      level: 95,
      icon: "⚛️",
      type: "attack"
    },
    {
      name: "React",
      category: "Frontend Magic",
      level: 95,
      icon: "⚛️",
      type: "attack"
    },
    {
      name: "TypeScript",
      category: "Core Ability",
      level: 90,
      icon: "📘",
      type: "attack"
    },
    {
      name: "Tailwind CSS",
      category: "Style Magic",
      level: 92,
      icon: "🎨",
      type: "attack"
    },
    {
      name: "Node.js",
      category: "Backend Power",
      level: 88,
      icon: "🟢",
      type: "defense"
    },
    {
      name: "Python",
      category: "Backend Power",
      level: 85,
      icon: "🐍",
      type: "defense"
    },
    {
      name: "PostgreSQL",
      category: "Database Magic",
      level: 82,
      icon: "🐘",
      type: "defense"
    },
    {
      name: "Git",
      category: "Developer Tools",
      level: 90,
      icon: "🔧",
      type: "magic"
    },
    {
      name: "Docker",
      category: "DevOps Magic",
      level: 80,
      icon: "🐳",
      type: "magic"
    },
  ],

  // QUEST LOG / LEVELS COMPLETED
  experience: [
    {
      questName: "Senior Developer Quest",
      guild: "Tech Corporation", // Replace with actual company
      duration: "2 Years",
      period: "2022 - 2024",
      status: "completed",
      achievements: [
        "Built 10+ production web applications",
        "Led team of 5 developers to victory",
        "Deployed systems serving 100K+ users",
        "Implemented CI/CD pipelines",
      ],
      xpGained: 15000,
      badge: "🏆"
    },
    {
      questName: "Full Stack Developer Quest",
      guild: "Digital Agency", // Replace with actual company
      duration: "1.5 Years",
      period: "2020 - 2022",
      status: "completed",
      achievements: [
        "Developed responsive web applications",
        "Integrated third-party APIs",
        "Optimized application performance",
        "Mentored junior developers",
      ],
      xpGained: 10000,
      badge: "⭐"
    },
    {
      questName: "Junior Developer Training",
      guild: "Startup Kingdom", // Replace with actual company
      duration: "1 Year",
      period: "2019 - 2020",
      status: "completed",
      achievements: [
        "Learned modern web development",
        "Built first production features",
        "Collaborated with design team",
        "Mastered version control",
      ],
      xpGained: 5000,
      badge: "🎖️"
    },
  ],

  // MULTIPLAYER / INSERT COIN TO CHAT
  contact: {
    title: "🎮 MULTIPLAYER MODE",
    subtitle: "Insert Coin to Connect",
    methods: [
      {
        name: "Send Message",
        type: "email",
        value: "muhammadayyas1003@gmail.com", // Replace with actual email
        icon: "📧",
        action: "mailto:muhammadayyas1003@gmail.com"
      },
      {
        name: "Join Party",
        type: "linkedin",
        value: "LinkedIn",
        icon: "💼",
        action: "https://www.linkedin.com/in/muhammad-ayyas/" // Replace with actual LinkedIn
      },
      {
        name: "View Code Repository",
        type: "github",
        value: "GitHub",
        icon: "💻",
        action: "https://github.com/yys-4" // Replace with actual GitHub
      },
      {
        name: "Chat in Tavern",
        type: "twitter",
        value: "Twitter/X",
        icon: "🐦",
        action: "https://twitter.com/yourhandle" // Replace with actual Twitter
      },
    ]
  },

  // ACHIEVEMENTS / BADGES
  achievements: [
    {
      name: "Code Master",
      description: "Completed 50+ projects",
      icon: "🏅",
      unlocked: true
    },
    {
      name: "Team Leader",
      description: "Led successful development teams",
      icon: "👑",
      unlocked: true
    },
    {
      name: "Performance Guru",
      description: "Optimized apps for 100K+ users",
      icon: "⚡",
      unlocked: true
    },
    {
      name: "Open Source Contributor",
      description: "Contributed to community projects",
      icon: "🌟",
      unlocked: true
    },
  ]
};

export default playerData;
