# 📝 内容替换指南

本文档列出了毕业展示页中所有需要替换的占位内容。请根据你的实际情况修改相应文件。

---

## 1. 🎯 Hero Section (首页头部)
**文件位置**: `src/components/sections/HeroSection.tsx`

### 需要替换的内容：
```javascript
const config = {
  name: "你的姓名",                           // 替换为你的真实姓名
  title: "AI 编程课程毕业生",                 // 自定义头衔
  graduationStatement: "从想法到产品...",     // 一句话毕业宣言
  description: "历时 X 周深入学习...",        // 课程描述（修改周数）
  badges: ["AI 编程", "全栈开发", "产品思维"], // 技能标签
  social: {
    github: "https://github.com/yourusername",        // 你的 GitHub
    linkedin: "https://linkedin.com/in/yourprofile",  // 你的 LinkedIn
    email: "your.email@example.com"                   // 你的邮箱
  }
};
```

---

## 2. 🚀 Project Section (项目路演)
**文件位置**: `src/components/sections/ProjectSection.tsx`

### 需要替换的内容：
```javascript
const project = {
  name: "你的项目名称",                        // 项目名
  tagline: "一句话描述你的产品价值",           // 产品 Slogan
  demoUrl: "https://your-demo.vercel.app",    // 项目演示链接
  githubUrl: "https://github.com/...",        // 项目 GitHub 仓库
  
  // 痛点场景（2-3个）
  painPoints: [
    {
      title: "痛点 1",
      description: "描述你发现的真实痛点..."
    },
    {
      title: "痛点 2",
      description: "描述第二个关键痛点..."
    }
  ],

  // MVP 功能（3-5个）
  mvpFeatures: [
    {
      title: "核心功能 1",
      description: "描述第一个核心功能...",
      tech: ["React", "Tailwind CSS"]         // 使用的技术栈
    },
    // ... 添加更多功能
  ],

  // 思考过程（3个阶段）
  insights: [
    {
      phase: "发现问题",
      content: "分享你是如何发现这个问题的..."
    },
    // ... 其他阶段
  ]
};
```

---

## 3. 📚 Learning Section (学习复盘)
**文件位置**: `src/components/sections/LearningSection.tsx`

### 需要替换的内容：
```javascript
const config = {
  // AI 编程心得（3-5条）
  insights: [
    {
      title: "AI 是思维放大器",
      description: "你的真实学习心得...",
      icon: Sparkles                          // 可选图标
    },
    // ... 添加更多心得
  ],

  // 学习路径（按阶段调整）
  learningPath: {
    beginner: [                               // 入门阶段
      {
        week: "Week 1-2",
        topic: "AI 编程基础",
        content: "学习内容描述...",
        resources: ["资源1", "资源2"]
      }
    ],
    intermediate: [...],                      // 进阶阶段
    advanced: [...]                           // 高级阶段
  },

  // 推荐资源
  resources: [
    { name: "AI 编程工具", items: ["Cursor", "GitHub Copilot", ...] },
    { name: "学习平台", items: ["freeCodeCamp", ...] },
    { name: "技术社区", items: ["GitHub", ...] }
  ]
};
```

---

## 4. 🛠️ Tech Stack Section (技术栈)
**文件位置**: `src/components/sections/TechStackSection.tsx`

### 需要替换的内容：
```javascript
const config = {
  // 技术栈分类（根据实际使用修改）
  techStack: {
    frontend: [
      { name: "React", description: "组件化 UI 开发" },
      // ... 添加你使用的前端技术
    ],
    backend: [
      { name: "Supabase", description: "后端即服务" },
      // ... 添加你使用的后端技术
    ],
    deployment: [...],
    aiTools: [...]
  },

  // GitHub 仓库信息
  github: {
    repoUrl: "https://github.com/yourusername/your-repo",  // 你的仓库
    repoName: "your-repo"
  },

  // Vercel 部署信息
  vercel: {
    projectUrl: "https://your-project.vercel.app",         // 部署链接
    projectName: "your-project"
  }
};
```

---

## 5. 🤖 Chat Section (AI 数字分身)
**文件位置**: `src/components/sections/ChatSection.tsx`

### 需要替换的内容：
```javascript
const config = {
  botName: "你的 AI 分身",                      // AI 分身名称
  botDescription: "基于我的学习经历训练...",    // 描述
  suggestedQuestions: [                        // 建议问题
    "你在课程中学到了什么？",
    "如何开始 AI 编程学习？",
    // ... 添加更多问题
  ],
  comingSoon: true                              // true=显示即将上线，false=显示输入框
};
```

---

## 6. 📄 Footer Section (页脚)
**文件位置**: `src/components/sections/FooterSection.tsx`

### 需要替换的内容：
```javascript
const config = {
  name: "你的姓名",
  year: new Date().getFullYear(),
  builtWith: "Vite + React + Tailwind CSS",
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    email: "your.email@example.com"
  }
};
```

---

## 📌 快速替换清单

### 必须修改的字段：
- [ ] 个人信息（姓名、邮箱、社交链接）
- [ ] 项目名称、描述、链接
- [ ] GitHub 仓库地址
- [ ] Vercel 部署链接

### 建议修改的字段：
- [ ] 毕业宣言
- [ ] 痛点场景（至少2个）
- [ ] MVP 功能（至少3个）
- [ ] 学习心得（至少3条）
- [ ] 学习路径（根据实际周数调整）

### 可选修改的字段：
- [ ] 技能标签 badges
- [ ] 技术栈列表
- [ ] 推荐学习资源
- [ ] AI 分身建议问题

---

## 🎨 样式定制

如需调整配色方案，修改 `src/index.css` 中的 CSS 变量：
```css
:root {
  --primary: 250 70% 60%;        /* 主色调 */
  --accent: 190 95% 50%;         /* 强调色 */
  /* ... 其他颜色 */
}
```

---

## 💡 提示

1. **搜索替换**：可以全局搜索 "你的" "your" 快速定位所有占位内容
2. **图标更换**：从 `lucide-react` 选择合适的图标替换
3. **内容长度**：建议每段描述控制在 50-100 字，保持简洁
4. **真实性**：用真实的学习经历和思考替换模板内容

---

完成替换后，运行 `pnpm dev` 查看效果！🚀
