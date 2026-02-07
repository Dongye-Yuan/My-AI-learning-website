# 📝 个人网站定制指南 - 王梦缘

## 🎯 一个文件搞定所有内容

**核心文件**：`src/content/profile.ts`

修改这一个文件即可更新整个网站的所有内容。

---

## ✏️ 需要替换的字段清单（给 HR 用）

### 1. 个人基本信息

```typescript
// 在 src/content/profile.ts 中找到 personal 部分：

personal: {
  name: "王梦缘",                    // ✏️ 你的姓名
  title: "AI 学习历程 & 作品集",      // ✏️ 网站标题
  graduationStatement: "从想法到产品，用 AI 加速交付",  // ✏️ 一句话定位
  description: "深度学习 AI 辅助编程...",  // ✏️ 详细介绍
  badges: ["AI 编程", "全栈开发", "快速交付"],  // ✏️ 技能标签
  
  social: {
    github: "https://github.com/wangmengyuan",         // ✏️ GitHub 主页
    linkedin: "https://linkedin.com/in/wangmengyuan",   // ✏️ LinkedIn 主页
    email: "wangmengyuan@example.com",                  // ✏️ 邮箱
    wechat: "your-wechat-id"                           // ✏️ 微信号
  }
}
```

---

### 2. 项目作品（第一个项目）

```typescript
// 项目基本信息
project: {
  name: "AI 驱动的任务管理系统",      // ✏️ 项目名称
  tagline: "智能分析任务优先级，提升团队协作效率",  // ✏️ 项目 Slogan
  demoUrl: "https://your-demo.vercel.app",  // ✏️ 在线演示地址
  githubUrl: "https://github.com/wangmengyuan/your-project",  // ✏️ GitHub 仓库
  
  // 痛点场景（3个）
  painPoints: [
    {
      title: "任务优先级混乱",        // ✏️ 痛点标题
      description: "团队任务繁多..."  // ✏️ 痛点描述
    },
    // ... 可添加更多痛点
  ],
  
  // MVP 核心功能（3个）
  mvpFeatures: [
    {
      title: "AI 智能优先级排序",     // ✏️ 功能名称
      description: "基于任务描述...",  // ✏️ 功能描述
      tech: ["OpenAI API", "React", "TypeScript"]  // ✏️ 使用的技术
    },
    // ... 可添加更多功能
  ],
  
  // 成果展示（3个）
  achievements: [
    {
      title: "快速交付",             // ✏️ 成果标题
      description: "3 周完成 MVP 并上线"  // ✏️ 成果描述
    },
    // ... 可添加更多成果
  ],
  
  // 思考过程（3个阶段）
  insights: [
    {
      phase: "发现问题",              // ✏️ 阶段名称
      content: "在实习期间观察到..."  // ✏️ 详细思考
    },
    // ... 可添加更多阶段
  ]
}
```

---

### 3. 项目作品（第二个项目，可选）

```typescript
// 第二个项目结构相同
project2: {
  name: "个人知识库 AI 助手",        // ✏️ 项目名称
  tagline: "基于笔记内容的智能问答系统",  // ✏️ Slogan
  // ... 结构同 project
}
```

---

### 4. 学习历程

```typescript
learning: {
  // AI 编程心得（5条）
  insights: [
    {
      title: "AI 是效率倍增器",        // ✏️ 心得标题
      description: "用 AI 辅助编程后..."  // ✏️ 心得内容
    },
    // ... 可添加更多心得
  ],
  
  // 关键方法（3个，01/02/03 大号显示）
  keyMethods: [
    {
      number: "01",                   // 保持不变
      title: "用 AI 快速搭建原型",     // ✏️ 方法标题
      description: "先用 Cursor..."   // ✏️ 方法描述
    },
    // ... 可添加更多方法
  ],
  
  // 学习路径（5步）
  learningPath: [
    {
      step: "1",                      // 保持不变
      title: "AI 工具入门",            // ✏️ 步骤标题
      content: "选择 Cursor 作为...",  // ✏️ 步骤内容
      duration: "第 1 周"             // ✏️ 时间周期
    },
    // ... 可添加更多步骤
  ],
  
  // 推荐资源（3类）
  resources: [
    {
      category: "AI 编程工具",        // ✏️ 资源类别
      items: ["Cursor", "GitHub Copilot", ...]  // ✏️ 具体资源
    },
    // ... 可添加更多资源类别
  ]
}
```

---

### 5. AI 数字分身配置

```typescript
aiChat: {
  botName: "王梦缘的 AI 分身",        // ✏️ AI 名称
  botDescription: "我是基于王梦缘学习经历...",  // ✏️ AI 描述
  comingSoon: true,                 // ✏️ true=显示开发中，false=启用聊天
  
  // System Prompt（接入 AI API 时使用）
  systemPrompt: `你是王梦缘的 AI 数字分身...`,  // ✏️ AI 角色设定
  
  // 欢迎消息
  welcomeMessages: [
    {
      role: "assistant",
      content: "你好！我是王梦缘的 AI 数字分身 👋"  // ✏️ 欢迎语
    },
    // ... 可添加更多欢迎消息
  ],
  
  // 建议问题
  suggestedQuestions: [
    "介绍一下你的项目经验",      // ✏️ 建议问题
    // ... 可添加更多问题
  ]
}
```

---

### 6. 部署信息

```typescript
deployment: {
  github: {
    repoUrl: "https://github.com/wangmengyuan/portfolio",  // ✏️ GitHub 仓库
    repoName: "portfolio"  // ✏️ 仓库名称
  },
  vercel: {
    projectUrl: "https://wangmengyuan.vercel.app",  // ✏️ Vercel 部署地址
    projectName: "wangmengyuan-portfolio"  // ✏️ 项目名称
  }
}
```

---

## 🚀 修改后的操作流程

### 1. 编辑配置文件
```bash
# 打开核心配置文件
src/content/profile.ts

# 根据上面的清单，逐项替换内容
```

### 2. 保存并查看效果
```bash
# 如果开发服务器正在运行，保存后页面会自动刷新
pnpm dev
```

### 3. 检查所有 Section
滚动页面，确认以下内容已更新：
- [ ] 首页个人信息
- [ ] 项目作品展示
- [ ] 学习历程
- [ ] 部署与技术栈
- [ ] AI 数字分身
- [ ] 页脚链接

---

## 💡 常用操作

### 添加更多项目
在 `profile.ts` 中添加 `project3`, `project4` 等，格式同 `project`

### 修改配色
编辑 `src/index.css` 中的 CSS 变量：
```css
:root {
  --primary: 250 70% 60%;    /* 主色调 */
  --accent: 190 95% 50%;     /* 强调色 */
}
```

### 启用 AI 聊天功能
1. 在 `profile.ts` 中设置 `comingSoon: false`
2. 在 `ChatSection.tsx` 的 `sendMessage()` 中接入 AI API
3. 使用 `aiChat.systemPrompt` 作为系统提示词

---

## 📋 面向 HR 的检查清单

修改完成后，确认以下内容：
- [ ] 姓名、邮箱、社交链接已更新
- [ ] 至少 1 个完整的项目案例
- [ ] 每个项目包含痛点、功能、成果、思考
- [ ] 学习历程体现成长路径
- [ ] 技术栈准确反映实际能力
- [ ] 所有链接可点击且有效
- [ ] 移动端显示正常

---

## 🎯 给 HR 的使用建议

这个网站是王梦缘的在线作品集，展示了：

1. **项目经验**：完整的产品开发流程，从需求分析到上线
2. **技术能力**：全栈开发 + AI 集成的实战经验
3. **学习能力**：系统化的学习路径，快速掌握新技术
4. **产品思维**：关注用户价值，快速迭代验证
5. **工程化能力**：从开发到部署的完整流程

**联系方式**：页面顶部和底部均有 GitHub、LinkedIn、邮箱链接

---

**准备好投递简历了吗？确保所有内容都是最新的！🚀**
