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
  projects: [
    // 项目 1: 行动启动器
    {
      name: "行动启动器",
      oneLiner: "帮助你克服启动困难，将想法转化为行动",
      problem: [
        {
          title: "启动困难症",
          description: "很多人有想法但迟迟不行动，总是拖延、等待完美时机，最终错失机会。"
        },
        {
          title: "目标模糊不清",
          description: "想做的事情太抽象，不知道第一步该做什么，导致无从下手。"
        },
        {
          title: "缺少外部推力",
          description: "缺乏督促和反馈机制，很难持续推进，容易半途而废。"
        }
      ],
      mvp: [
        {
          title: "AI 需求拆解",
          description: "输入模糊想法，AI 自动拆解成具体可执行的小步骤，降低启动门槛。",
          tech: ["OpenAI API", "Prompt Engineering"]
        },
        {
          title: "倒计时激励",
          description: "设置截止日期后自动生成倒计时，营造紧迫感，推动立即行动。",
          tech: ["React Hooks", "Notifications"]
        },
        {
          title: "进度可视化",
          description: "完成小任务即时打钩，进度条实时更新，获得正向反馈提升动力。",
          tech: ["React", "Local Storage"]
        }
      ],
      process: [
        {
          phase: "发现痛点",
          content: "我自己就是重度拖延症患者，经常有想法但不行动。观察发现很多人都有「想做但启动困难」的问题，于是想做一个工具来解决。"
        },
        {
          phase: "设计方案",
          content: "核心思路是「降低启动门槛 + 营造紧迫感」。用 AI 把模糊想法拆解成第一步行动，用倒计时制造压力。技术选型轻量化，纯前端实现快速验证。"
        },
        {
          phase: "快速迭代",
          content: "第一版只做了任务拆解和倒计时，自己先用了一周。发现缺少成就感，补充了进度可视化。用 AI 辅助完成前端开发，2 周完成 MVP。"
        }
      ],
      achievements: [
        {
          title: "快速验证",
          description: "2 周完成 MVP 并自用"
        },
        {
          title: "产品思维",
          description: "从自身痛点出发找到真需求"
        },
        {
          title: "AI 驱动",
          description: "用 AI 拆解需求和生成代码"
        }
      ],
      stack: ["React", "TypeScript", "Tailwind CSS", "OpenAI API", "Vercel"],
      links: {
        demo: "https://fb7ba741d8c3403c800df429edeea56c.prod.enter.pro",
        github: "https://github.com/wangmengyuan/action-starter"
      }
    },
    
    // 项目 2: 边听边记录
    {
      name: "边听边记录",
      oneLiner: "AI 驱动的播客/视频笔记工具，边听边生成结构化笔记",
      problem: [
        {
          title: "听课效率低",
          description: "听播客或看视频时，来不及记笔记，事后回忆又想不起重点内容。"
        },
        {
          title: "笔记难以检索",
          description: "记录的笔记是流水账，没有结构，后续查找某个知识点非常困难。"
        },
        {
          title: "无法提炼精华",
          description: "1 小时的内容，哪些是核心观点？哪些是案例？自己整理耗时且不系统。"
        }
      ],
      mvp: [
        {
          title: "实时语音转文字",
          description: "播放音视频时，自动转录为文字，支持中英文识别，准确率高达 95%。",
          tech: ["Web Speech API", "Whisper API"]
        },
        {
          title: "AI 智能提炼",
          description: "基于 AI 自动提取核心观点、关键论据、精彩案例，生成结构化笔记大纲。",
          tech: ["OpenAI GPT-4", "Prompt Engineering"]
        },
        {
          title: "时间轴标注",
          description: "笔记关联音频时间轴，点击某段文字即可跳转到对应音频位置，方便回听。",
          tech: ["React", "Audio API"]
        }
      ],
      process: [
        {
          phase: "场景洞察",
          content: "我经常听播客学习，但很难边听边记笔记，事后又记不住内容。调研发现很多人有同样困扰，市面缺少好用的工具。"
        },
        {
          phase: "技术选型",
          content: "核心是「实时转录 + AI 提炼」。对比了多个语音识别方案，最终选择 Whisper API（准确率高）+ GPT-4（理解能力强）。前端用 React 构建交互界面。"
        },
        {
          phase: "MVP 验证",
          content: "先做语音转文字 + 基础笔记功能，验证技术可行性。再接入 AI 提炼，优化提示词让输出更结构化。用 Cursor 加速开发，3 周完成核心功能。"
        }
      ],
      achievements: [
        {
          title: "技术突破",
          description: "实现实时语音识别 + AI 提炼"
        },
        {
          title: "用户价值",
          description: "自己每天使用，笔记效率提升 5 倍"
        },
        {
          title: "完整闭环",
          description: "从转录、提炼到检索的完整流程"
        }
      ],
      stack: ["React", "TypeScript", "Whisper API", "OpenAI GPT-4", "Supabase"],
      links: {
        demo: "https://listen-note.vercel.app",
        github: "https://github.com/wangmengyuan/listen-note"
      }
    }
  ],

  // ====================================
  // 📚 学习复盘
  // ====================================
  learning: {
    // AI 编程心得
    insights: [
      {
        title: "AI 是效率倍增器",
        description: "用 AI 辅助开发「行动启动器」和「边听边记录」，开发速度提升了 5 倍。AI 能快速生成脚手架代码，让我专注于产品逻辑和用户体验。"
      },
      {
        title: "提示词工程是核心能力",
        description: "在「行动启动器」中，用精准的提示词让 AI 拆解需求；在「边听边记录」中，优化提示词让笔记提炼更结构化。清晰的需求描述 + 充足的上下文 = 高质量输出。"
      },
      {
        title: "快速验证比完美实现更重要",
        description: "两个项目都先做最小 MVP 验证核心价值，再根据使用反馈迭代。「行动启动器」2 周、「边听边记录」3 周就完成核心功能并自用。"
      },
      {
        title: "从自身痛点出发",
        description: "做自己需要的产品更容易成功。我自己是拖延症患者、也经常听播客学习，这两个痛点催生了两个产品，每天自用持续优化。"
      },
      {
        title: "学会调试 AI 生成的代码",
        description: "AI 生成的代码需要理解、测试和优化。在开发中学会了快速定位问题、调整代码逻辑、优化性能，这比单纯依赖 AI 更重要。"
      }
    ],

    // 关键方法（3个）
    keyMethods: [
      {
        number: "01",
        title: "AI 辅助需求拆解",
        description: "用 AI 将模糊想法拆解成可执行步骤。例如「行动启动器」就是通过 AI 把大目标分解成小任务，降低启动门槛。"
      },
      {
        number: "02",
        title: "快速 MVP 验证",
        description: "先做最小功能集验证想法。「边听边记录」第一版只做语音转文字，验证可行后再加 AI 提炼功能。"
      },
      {
        number: "03",
        title: "自用驱动迭代",
        description: "做自己需要的产品，每天使用发现问题并快速优化。两个项目都是从自身痛点出发，持续改进。"
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
- 技术栈：React, TypeScript, Tailwind CSS, OpenAI API, Whisper API
- 项目经验：
  1. 行动启动器 - AI 需求拆解 + 倒计时激励，帮助克服拖延症
  2. 边听边记录 - AI 驱动的播客/视频笔记工具，实时转录 + 智能提炼

回答风格：
1. 真诚、专业、有条理
2. 突出技术深度和产品思维
3. 用具体案例说明能力（重点提到两个项目）
4. 展现学习能力和快速迭代能力

可以回答的问题类型：
- 行动启动器和边听边记录的技术实现
- 如何用 AI 做需求拆解和快速验证
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
        content: "我可以回答关于她的项目经验（行动启动器、边听边记录）、技术栈、学习历程的任何问题。你想了解什么呢？"
      }
    ],
    
    // 建议问题
    suggestedQuestions: [
      "介绍一下行动启动器和边听边记录",
      "如何用 AI 做需求拆解和快速迭代？",
      "你的技术栈和学习路径是什么？",
      "这两个项目的核心技术难点是什么？"
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
