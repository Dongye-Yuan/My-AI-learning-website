/**
 * 📝 个人网站内容配置中心
 * 所有可编辑内容集中在此文件，修改后即可更新整个网站
 */

export const profileData = {
  // ====================================
  // 🎯 个人基本信息
  // ====================================
  personal: {
    name: "王梦缘",
    title: "AI 学习历程 & 作品集",
    graduationStatement: "从想法到产品，用 AI 加速交付",
    description: "深度学习 AI 辅助编程，掌握从需求分析到产品上线的完整流程。擅长快速原型验证与迭代优化，具备全栈开发与产品思维。",
    badges: ["AI 编程", "全栈开发", "快速交付"],
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=WangMengyuan",
    
    // 社交链接
    social: {
      github: "https://github.com/wangmengyuan",
      linkedin: "https://linkedin.com/in/wangmengyuan",
      email: "wangmengyuan@example.com",
      wechat: "your-wechat-id"
    }
  },

  // ====================================
  // 🚀 项目作品集
  // ====================================
  project: {
    name: "AI 驱动的任务管理系统",
    tagline: "智能分析任务优先级，提升团队协作效率",
    demoUrl: "https://your-demo.vercel.app",
    githubUrl: "https://github.com/wangmengyuan/your-project",
    
    // 痛点场景
    painPoints: [
      {
        title: "任务优先级混乱",
        description: "团队任务繁多，成员难以判断哪些工作最重要，经常出现紧急任务延误的情况。"
      },
      {
        title: "协作信息分散",
        description: "项目信息散落在邮件、群聊、文档等多个平台，查找历史记录耗时，沟通成本高。"
      },
      {
        title: "进度追踪困难",
        description: "管理者难以实时了解项目进展，成员工作量不透明，导致资源分配不合理。"
      }
    ],

    // MVP 核心功能
    mvpFeatures: [
      {
        title: "AI 智能优先级排序",
        description: "基于任务描述、截止日期和依赖关系，AI 自动计算优先级评分，帮助团队聚焦核心工作。",
        tech: ["OpenAI API", "React", "TypeScript"]
      },
      {
        title: "实时协作看板",
        description: "可视化任务流转状态，支持拖拽操作，团队成员实时同步进度，减少信息不对称。",
        tech: ["React DnD", "Supabase Realtime", "WebSocket"]
      },
      {
        title: "智能工作量分析",
        description: "自动统计成员任务量与工时，生成可视化报表，辅助管理者优化资源分配。",
        tech: ["Chart.js", "Data Analytics"]
      }
    ],

    // 成果展示
    achievements: [
      {
        title: "快速交付",
        description: "3 周完成 MVP 并上线"
      },
      {
        title: "用户采纳",
        description: "5 个团队试用，效率提升 40%"
      },
      {
        title: "技术深度",
        description: "全栈 + AI + 实时协作完整实现"
      }
    ],

    // 思考过程
    insights: [
      {
        phase: "发现问题",
        content: "在实习期间观察到团队任务管理混乱，成员经常不清楚优先级。调研后发现市面工具功能繁杂但缺乏智能引导，于是决定做一个 AI 驱动的轻量级解决方案。"
      },
      {
        phase: "设计方案",
        content: "核心策略是「AI + 可视化」。用 AI 分析任务属性自动排序，用看板让进度一目了然。技术选型考虑快速验证，选择 React + Supabase + OpenAI API，3 周内完成核心功能。"
      },
      {
        phase: "快速迭代",
        content: "第一版只做优先级排序和基础看板，邀请 3 个团队试用。根据反馈发现工作量分析是刚需，快速补充了数据统计模块。学到了「MVP 要足够小，迭代要足够快」的产品方法论。"
      }
    ]
  },

  // 第二个项目（可选）
  project2: {
    name: "个人知识库 AI 助手",
    tagline: "基于笔记内容的智能问答系统",
    demoUrl: "https://knowledge-assistant.vercel.app",
    githubUrl: "https://github.com/wangmengyuan/knowledge-assistant",
    
    painPoints: [
      {
        title: "笔记难以复用",
        description: "积累的学习笔记越来越多，但想要查找某个知识点时却很难快速定位。"
      }
    ],
    
    mvpFeatures: [
      {
        title: "笔记智能检索",
        description: "基于语义搜索，输入问题即可找到相关笔记段落，无需记住关键词。",
        tech: ["Vector DB", "RAG", "Embedding"]
      },
      {
        title: "AI 知识问答",
        description: "基于个人笔记内容生成回答，确保信息来源可追溯，避免 AI 幻觉。",
        tech: ["OpenAI API", "Langchain"]
      }
    ],
    
    achievements: [
      {
        title: "快速验证",
        description: "2 周完成原型"
      },
      {
        title: "技术探索",
        description: "深入实践 RAG 技术栈"
      }
    ],
    
    insights: [
      {
        phase: "技术选型",
        content: "对比了多种向量数据库方案，最终选择 Supabase + pgvector，既能存储结构化数据又能做向量检索，降低了系统复杂度。"
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
        title: "AI 是效率倍增器",
        description: "用 AI 辅助编程后，开发速度提升了 3-5 倍。AI 能快速生成脚手架代码，让我专注于业务逻辑和产品细节，而不是重复性的实现工作。"
      },
      {
        title: "提示词工程是核心能力",
        description: "清晰的需求描述 + 充足的上下文 = 高质量的 AI 输出。我学会了结构化表达需求、提供代码示例、迭代优化提示词，这比记住 API 更重要。"
      },
      {
        title: "快速验证比完美实现更重要",
        description: "AI 让我能在短时间内实现想法并验证可行性。先做出能用的 MVP，根据反馈快速迭代，比追求完美设计更高效。"
      },
      {
        title: "学会阅读和调试 AI 代码",
        description: "AI 生成的代码不是完美的，需要理解其逻辑、发现潜在问题、优化性能。这让我更重视代码审查和测试。"
      },
      {
        title: "构建个人知识库",
        description: "将常用提示词、代码模板、问题解决方案记录下来，形成自己的 AI 协作手册，提升后续开发效率。"
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
        title: "AI 工具入门",
        content: "选择 Cursor 作为主力编辑器，学习代码补全、生成、重构等基础功能。理解 AI 是助手而非替代品。",
        duration: "第 1 周"
      },
      {
        step: "2",
        title: "前端开发实践",
        content: "用 React + Tailwind CSS 构建界面，学习组件化思维。用 AI 快速生成组件骨架，手动优化细节和交互。",
        duration: "第 2-3 周"
      },
      {
        step: "3",
        title: "后端与数据库",
        content: "接入 Supabase 实现数据持久化、用户认证、实时订阅。学会读懂文档并用 AI 辅助调试。",
        duration: "第 4-5 周"
      },
      {
        step: "4",
        title: "AI API 集成",
        content: "接入 OpenAI/Anthropic API，实践提示词工程、流式响应、函数调用。这是 AI 应用的核心能力。",
        duration: "第 6-7 周"
      },
      {
        step: "5",
        title: "部署与优化",
        content: "用 Vercel 部署上线，配置 CI/CD。学习性能优化、错误监控、用户反馈收集，持续迭代产品。",
        duration: "第 8 周起"
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
    botName: "王梦缘的 AI 分身",
    botDescription: "我是基于王梦缘学习经历和项目经验训练的 AI 助手，可以回答关于技术栈、项目和学习路径的问题",
    comingSoon: true, // 设置为 false 可启用聊天功能
    
    // System Prompt（未来接入 API 时使用）
    systemPrompt: `你是王梦缘的 AI 数字分身，负责代表她回答 HR 和面试官的问题。

背景信息：
- 姓名：王梦缘
- 定位：AI 学习者 & 全栈开发者
- 核心能力：AI 辅助编程、快速原型开发、产品思维
- 技术栈：React, TypeScript, Tailwind CSS, Supabase, OpenAI API
- 项目经验：AI 驱动的任务管理系统、个人知识库 AI 助手

回答风格：
1. 真诚、专业、有条理
2. 突出技术深度和产品思维
3. 用具体案例说明能力
4. 展现学习能力和快速迭代能力

可以回答的问题类型：
- 项目经验和技术细节
- 学习路径和成长经历
- 对 AI 编程的理解
- 求职意向和职业规划`,
    
    // 欢迎消息
    welcomeMessages: [
      {
        role: "assistant",
        content: "你好！我是王梦缘的 AI 数字分身 👋"
      },
      {
        role: "assistant",
        content: "我可以回答关于她的项目经验、技术栈、学习历程的任何问题。你想了解什么呢？"
      }
    ],
    
    // 建议问题
    suggestedQuestions: [
      "介绍一下你的项目经验",
      "如何用 AI 加速开发流程？",
      "你的技术栈和学习路径是什么？",
      "为什么选择 AI 编程方向？"
    ]
  },

  // ====================================
  // 🌐 部署信息
  // ====================================
  deployment: {
    github: {
      repoUrl: "https://github.com/wangmengyuan/portfolio",
      repoName: "portfolio"
    },
    vercel: {
      projectUrl: "https://wangmengyuan.vercel.app",
      projectName: "wangmengyuan-portfolio"
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
