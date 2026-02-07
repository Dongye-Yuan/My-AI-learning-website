# 🎨 定制指南 - 快速修改你的毕业展示页

## 📍 核心：一个文件搞定所有内容

**重要提示**：所有可编辑内容都集中在 `src/content/profile.ts` 文件中！

你只需要修改这一个文件，就能更新整个网站的所有内容。

---

## 🚀 快速开始（5分钟上手）

### Step 1: 打开配置文件
```bash
src/content/profile.ts
```

### Step 2: 按照下面的清单逐项替换

---

## ✏️ 必须替换的字段清单

### 1. 个人基本信息 (`personal`)

```typescript
personal: {
  name: "张小明",                    // ✏️ 替换为你的姓名
  title: "AI 编程课程毕业生",         // ✏️ 你的头衔
  graduationStatement: "从想法到产品，用 AI 重新定义编程的可能性",  // ✏️ 一句话毕业宣言
  description: "历时 8 周深入学习...",  // ✏️ 修改学习周期
  badges: ["AI 编程", "全栈开发", "产品思维"],  // ✏️ 你的技能标签
  
  social: {
    github: "https://github.com/yourusername",         // ✏️ 你的 GitHub
    linkedin: "https://linkedin.com/in/yourprofile",   // ✏️ 你的 LinkedIn
    email: "your.email@example.com",                   // ✏️ 你的邮箱
    wechat: "your-wechat-id"                          // ✏️ 你的微信号
  }
}
```

---

### 2. 项目信息 (`project`)

#### 项目基本信息
```typescript
project: {
  name: "智能学习助手",              // ✏️ 你的项目名称
  tagline: "用 AI 让每个人都拥有专属学习导师",  // ✏️ 项目 Slogan
  demoUrl: "https://your-demo.vercel.app",  // ✏️ 项目演示链接
  githubUrl: "https://github.com/yourusername/your-project",  // ✏️ 项目 GitHub
```

#### 痛点场景（3个）
```typescript
painPoints: [
  {
    title: "学习资源碎片化",        // ✏️ 痛点标题
    description: "网上学习资料太多太杂..."  // ✏️ 痛点描述
  },
  // ... 修改或添加更多痛点
]
```

#### MVP 功能（3个）
```typescript
mvpFeatures: [
  {
    title: "AI 智能问答",           // ✏️ 功能名称
    description: "基于 GPT-4 的智能助手...",  // ✏️ 功能描述
    tech: ["OpenAI API", "React", "TypeScript"]  // ✏️ 使用的技术
  },
  // ... 修改或添加更多功能
]
```

#### 成果展示（3个）
```typescript
achievements: [
  {
    title: "快速迭代",             // ✏️ 成果标题
    description: "从想法到 MVP 仅用 2 周"  // ✏️ 成果描述
  },
  // ... 修改或添加更多成果
]
```

#### 思考过程（3个阶段）
```typescript
insights: [
  {
    phase: "发现问题",              // ✏️ 阶段名称
    content: "我在学习编程时发现..."  // ✏️ 详细思考过程
  },
  // ... 修改或添加更多思考
]
```

---

### 3. 学习复盘 (`learning`)

#### AI 编程心得（3条）
```typescript
insights: [
  {
    title: "AI 是思维放大器",        // ✏️ 心得标题
    description: "AI 不是替代编程..."  // ✏️ 心得描述
  },
  // ... 修改或添加更多心得
]
```

#### 关键方法（3个）
```typescript
keyMethods: [
  {
    number: "01",                   // 保持不变
    title: "用 AI 快速搭建原型",     // ✏️ 方法标题
    description: "先用 Cursor/v0.dev 快速生成..."  // ✏️ 方法描述
  },
  // ... 修改或添加更多方法
]
```

#### 学习路径（5步）
```typescript
learningPath: [
  {
    step: "1",                      // 保持不变
    title: "熟悉 AI 编程工具",       // ✏️ 步骤标题
    content: "从 Cursor 或 GitHub Copilot 开始...",  // ✏️ 步骤内容
    duration: "Week 1-2"            // ✏️ 时间周期
  },
  // ... 修改或添加更多步骤
]
```

#### 推荐资源（3类）
```typescript
resources: [
  {
    category: "AI 编程工具",        // ✏️ 资源类别
    items: ["Cursor", "GitHub Copilot", ...]  // ✏️ 具体资源
  },
  // ... 修改或添加更多资源
]
```

---

### 4. 技术栈 (`techStack`)

```typescript
techStack: {
  frontend: [
    { name: "React 18", description: "组件化 UI 开发" },  // ✏️ 根据实际使用修改
    // ... 添加或删除技术
  ],
  backend: [...],    // ✏️ 修改后端技术
  ai: [...],         // ✏️ 修改 AI 技术
  deployment: [...], // ✏️ 修改部署平台
  aiTools: [...]     // ✏️ 修改 AI 工具
}
```

---

### 5. AI 数字分身 (`aiChat`)

```typescript
aiChat: {
  botName: "小明的 AI 分身",        // ✏️ 修改为你的名字
  botDescription: "我是基于小明学习经历训练的 AI 助手...",  // ✏️ 描述
  comingSoon: true,                 // ✏️ false = 启用聊天功能
  
  welcomeMessages: [
    {
      role: "assistant",
      content: "你好！我是小明的 AI 数字分身 👋"  // ✏️ 修改欢迎语
    },
    // ... 修改更多欢迎消息
  ],
  
  suggestedQuestions: [
    "你在课程中学到了什么？",      // ✏️ 修改建议问题
    // ... 添加更多问题
  ]
}
```

---

### 6. 部署信息 (`deployment`)

```typescript
deployment: {
  github: {
    repoUrl: "https://github.com/yourusername/graduation-showcase",  // ✏️ 你的仓库
    repoName: "graduation-showcase"  // ✏️ 仓库名称
  },
  vercel: {
    projectUrl: "https://your-project.vercel.app",  // ✏️ Vercel 链接
    projectName: "graduation-showcase"  // ✏️ 项目名称
  }
}
```

---

## 🎯 修改后的步骤

### 1. 保存文件
修改完 `src/content/profile.ts` 后保存

### 2. 查看效果
如果开发服务器正在运行，页面会自动刷新

### 3. 检查所有 Section
滚动页面，确认所有内容都已更新

---

## 💡 进阶定制

### 自定义颜色主题
修改 `src/index.css` 中的 CSS 变量：

```css
:root {
  --primary: 250 70% 60%;    /* 主色调 */
  --accent: 190 95% 50%;     /* 强调色 */
  /* ... 其他颜色 */
}
```

### 添加更多 Section
1. 在 `src/components/sections/` 创建新组件
2. 在 `src/pages/Index.tsx` 中引入
3. 在 `NavigationBar.tsx` 中添加导航链接

---

## 📋 快速检查清单

完成替换后，检查以下项：

- [ ] 个人信息（姓名、邮箱、社交链接）
- [ ] 项目名称、描述、链接
- [ ] 痛点场景（至少 3 个）
- [ ] MVP 功能（至少 3 个）
- [ ] 成果展示（至少 2 个）
- [ ] 学习心得（至少 3 条）
- [ ] 学习路径（5 步骤）
- [ ] 技术栈（根据实际使用）
- [ ] AI 分身名称和描述
- [ ] GitHub 和 Vercel 链接

---

## 🐛 常见问题

### Q: 修改后没有生效？
A: 确保保存了文件，并且开发服务器正在运行

### Q: 想添加更多痛点/功能怎么办？
A: 在对应数组中添加新对象，保持相同的结构

### Q: 可以删除某些 Section 吗？
A: 可以，在 `src/pages/Index.tsx` 中注释掉对应的组件

---

## 📞 需要帮助？

如果遇到问题：
1. 检查浏览器控制台是否有错误
2. 确认 `profile.ts` 文件语法正确
3. 重启开发服务器：`pnpm dev`

---

**开始定制你的毕业展示页吧！🚀**
