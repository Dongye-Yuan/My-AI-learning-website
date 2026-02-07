/**
 * 📝 毕业展示页内容配置中心
 * 所有可编辑内容集中在此文件，修改后即可更新整个网站
 */

export const profileData = {
  // ====================================
  // 🎯 个人基本信息
  // ====================================
  personal: {
    name: "张小明",
    title: "AI 编程课程毕业生",
    graduationStatement: "从想法到产品，用 AI 重新定义编程的可能性",
    description: "历时 8 周深入学习 AI 辅助编程，完成从 0 到 1 的产品实践，探索 AI 时代的开发新范式。",
    badges: ["AI 编程", "全栈开发", "产品思维"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Felix",
    
    // 社交链接
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourprofile",
      email: "your.email@example.com",
      wechat: "your-wechat-id"
    }
  },

  // ====================================
  // 🚀 项目路演信息
  // ====================================
  project: {
    name: "智能学习助手",
    tagline: "用 AI 让每个人都拥有专属学习导师",
    demoUrl: "https://your-demo.vercel.app",
    githubUrl: "https://github.com/yourusername/your-project",
    
    // 痛点场景
    painPoints: [
      {
        title: "学习资源碎片化",
        description: "网上学习资料太多太杂，不知道从哪里开始，缺乏系统化的学习路径规划。"
      },
      {
        title: "缺少个性化反馈",
        description: "传统课程是一对多教学，无法根据个人进度和理解程度调整，遇到问题得不到及时解答。"
      },
      {
        title: "学习进度难坚持",
        description: "自学容易三天打鱼两天晒网，没有督促机制，很难持续学习并形成习惯。"
      }
    ],

    // MVP 核心功能
    mvpFeatures: [
      {
        title: "AI 智能问答",
        description: "基于 GPT-4 的智能助手，24/7 随时解答学习疑问，提供针对性的讲解和示例代码。",
        tech: ["OpenAI API", "React", "TypeScript"]
      },
      {
        title: "个性化学习路径",
        description: "根据用户背景和目标，AI 自动生成定制化学习计划，每天推送适合当前水平的学习内容。",
        tech: ["Supabase", "RAG", "Vector DB"]
      },
      {
        title: "进度追踪与激励",
        description: "可视化学习进度，设置每日目标和里程碑，完成后获得成就徽章，保持学习动力。",
        tech: ["Chart.js", "Gamification"]
      }
    ],

    // 成果展示
    achievements: [
      {
        title: "快速迭代",
        description: "从想法到 MVP 仅用 2 周"
      },
      {
        title: "用户验证",
        description: "10+ 早期用户测试，NPS 达 8.5/10"
      },
      {
        title: "技术突破",
        description: "首次独立完成全栈 + AI 集成"
      }
    ],

    // 思考过程
    insights: [
      {
        phase: "发现问题",
        content: "我在学习编程时发现，虽然网上资源很多，但很难找到适合自己水平的系统路径。和同学交流后发现这是普遍痛点，于是决定用 AI 来解决这个问题。"
      },
      {
        phase: "设计方案",
        content: "核心思路是「AI + 个性化」。不是简单的聊天机器人，而是能理解用户背景、追踪学习进度、主动推荐内容的智能导师。技术上选择 OpenAI API + Supabase，快速验证可行性。"
      },
      {
        phase: "快速验证",
        content: "先做最小 MVP：AI 问答 + 进度记录。用 Cursor 加速开发，2 周完成并邀请 10 位朋友测试。根据反馈迭代了 3 个版本，学到了「先解决核心痛点，再添加功能」的产品思维。"
      }
    ]
  },

  // ====================================
  // 📚 学习复盘
  // ====================================
  learning: {
    // AI 编程心得
    insights: [
      {
        title: "AI 是思维放大器",
        description: "AI 不是替代编程，而是让你专注于「想做什么」而非「怎么做」。清晰表达需求的能力变得比记住语法更重要，这极大提升了我的迭代速度。"
      },
      {
        title: "提示词工程是新技能",
        description: "学会与 AI 对话是关键能力。好的提示词 = 清晰的问题描述 + 充足的上下文 + 期望的输出格式。花时间优化提示词比手写代码更高效。"
      },
      {
        title: "从产品视角学开发",
        description: "AI 让我能先关注用户价值，再思考技术实现。这种「产品优先」的思维帮我避免了过度工程化，始终聚焦核心问题。"
      }
    ],

    // 关键方法（3个）
    keyMethods: [
      {
        number: "01",
        title: "用 AI 快速搭建原型",
        description: "先用 Cursor/v0.dev 快速生成基础代码，再手动优化细节，效率提升 5 倍。"
      },
      {
        number: "02",
        title: "边做边学，不求完美",
        description: "不等学完再动手，而是带着问题学习。AI 能即时解答，比看文档快得多。"
      },
      {
        number: "03",
        title: "构建个人知识库",
        description: "把常用提示词、代码片段、问题解决方案记录下来，形成自己的「AI 协作手册」。"
      }
    ],

    // 学习路径（5步）
    learningPath: [
      {
        step: "1",
        title: "熟悉 AI 编程工具",
        content: "从 Cursor 或 GitHub Copilot 开始，学会基本的代码补全和生成，理解 AI 辅助编程的核心思维。",
        duration: "Week 1-2"
      },
      {
        step: "2",
        title: "掌握前端基础",
        content: "学习 React + Tailwind CSS，用组件化思维构建界面。AI 能快速生成组件，你负责理解和优化。",
        duration: "Week 3-4"
      },
      {
        step: "3",
        title: "接入后端服务",
        content: "使用 Supabase 实现数据存储、用户认证和 API。先跟着文档做，遇到问题让 AI 帮你调试。",
        duration: "Week 5-6"
      },
      {
        step: "4",
        title: "AI API 集成",
        content: "接入 OpenAI/Anthropic API，学会提示词工程和流式响应。这是 AI 应用的核心环节。",
        duration: "Week 7"
      },
      {
        step: "5",
        title: "部署与迭代",
        content: "用 Vercel 快速部署上线，收集用户反馈，持续迭代产品。技术是手段，解决问题才是目的。",
        duration: "Week 8+"
      }
    ],

    // 推荐资源
    resources: [
      {
        category: "AI 编程工具",
        items: ["Cursor", "GitHub Copilot", "v0.dev", "Bolt.new", "Replit"]
      },
      {
        category: "学习平台",
        items: ["freeCodeCamp", "Scrimba", "Codecademy", "YouTube 教程", "掘金社区"]
      },
      {
        category: "技术社区",
        items: ["GitHub", "Stack Overflow", "DEV.to", "V2EX", "Reddit r/webdev"]
      }
    ]
  },

  // ====================================
  // 🛠️ 技术栈
  // ====================================
  techStack: {
    frontend: [
      { name: "React 18", description: "组件化 UI 开发" },
      { name: "TypeScript", description: "类型安全保障" },
      { name: "Tailwind CSS", description: "快速样式开发" },
      { name: "Vite", description: "极速构建工具" }
    ],
    backend: [
      { name: "Supabase", description: "后端即服务（BaaS）" },
      { name: "PostgreSQL", description: "关系型数据库" },
      { name: "Row Level Security", description: "数据权限控制" },
      { name: "Edge Functions", description: "无服务器函数" }
    ],
    ai: [
      { name: "OpenAI GPT-4", description: "大语言模型" },
      { name: "Langchain", description: "AI 应用框架" },
      { name: "Vector DB", description: "向量数据库" }
    ],
    deployment: [
      { name: "Vercel", description: "前端部署平台" },
      { name: "GitHub", description: "代码托管与协作" },
      { name: "Custom Domain", description: "自定义域名" }
    ],
    aiTools: [
      { name: "Cursor", description: "AI 代码编辑器" },
      { name: "GitHub Copilot", description: "AI 代码助手" },
      { name: "v0.dev", description: "AI UI 生成" }
    ]
  },

  // ====================================
  // 🤖 AI 数字分身
  // ====================================
  aiChat: {
    botName: "小明的 AI 分身",
    botDescription: "我是基于小明学习经历训练的 AI 助手，可以回答关于课程、项目和学习路径的问题",
    comingSoon: true, // 设置为 false 可启用聊天功能
    
    // 欢迎消息
    welcomeMessages: [
      {
        role: "assistant",
        content: "你好！我是小明的 AI 数字分身 👋"
      },
      {
        role: "assistant",
        content: "我可以回答关于 AI 编程课程、项目开发和学习路径的任何问题。你想了解什么呢？"
      }
    ],
    
    // 建议问题
    suggestedQuestions: [
      "你在课程中学到了什么？",
      "如何开始 AI 编程学习？",
      "你的项目是如何实现的？",
      "有什么学习建议吗？"
    ]
  },

  // ====================================
  // 🌐 部署信息
  // ====================================
  deployment: {
    github: {
      repoUrl: "https://github.com/yourusername/graduation-showcase",
      repoName: "graduation-showcase"
    },
    vercel: {
      projectUrl: "https://your-project.vercel.app",
      projectName: "graduation-showcase"
    },
    
    // 部署步骤
    steps: [
      {
        number: "1",
        title: "GitHub 配置",
        description: "创建仓库并推送代码",
        commands: [
          "git init",
          "git add .",
          "git commit -m 'feat: 完成毕业展示页'",
          "git remote add origin YOUR_REPO_URL",
          "git push -u origin main"
        ]
      },
      {
        number: "2",
        title: "导入 Vercel",
        description: "在 Vercel 导入 GitHub 仓库",
        commands: [
          "访问 vercel.com 并登录",
          "点击 'Add New Project'",
          "选择你的 GitHub 仓库",
          "点击 'Import'"
        ]
      },
      {
        number: "3",
        title: "配置环境变量",
        description: "添加必要的 API Keys（如有）",
        commands: [
          "VITE_SUPABASE_URL=your_url",
          "VITE_SUPABASE_ANON_KEY=your_key",
          "VITE_OPENAI_API_KEY=your_api_key"
        ]
      },
      {
        number: "4",
        title: "发布上线",
        description: "部署完成，自动生成链接",
        commands: [
          "点击 'Deploy' 按钮",
          "等待构建完成（1-3 分钟）",
          "获得生产环境 URL",
          "后续 git push 自动部署"
        ]
      }
    ]
  }
};
