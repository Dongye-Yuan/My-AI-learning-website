# 🎓 AI 编程课程毕业展示页

一个精美的单页应用，用于展示 AI 编程课程的学习成果与项目路演。完整的产品级设计，开箱即用！

[![Built with enter.pro](https://img.shields.io/badge/Build%20with-Enter.pro-FC5776?style=for-the-badge&labelColor=1F1F1F)](https://enter.pro)

## ✨ 特性

- 🎨 **现代化 UI 设计**：科技感 + 产品路演风格，专业级视觉效果
- 📱 **完全响应式布局**：移动端完美适配，自动调整布局
- 🚀 **快速加载与流畅动画**：渐变背景、发光效果、平滑滚动
- 🎯 **模块化组件结构**：6 个独立 Section，易于定制和扩展
- 🌓 **支持暗黑模式**：自动适配系统主题
- 📝 **集中配置管理**：一个文件修改所有内容
- 📦 **开箱即用部署**：Vercel 一键部署配置

## 📋 页面结构（完整实现）

1. ✅ **Hero Section** - 个人介绍 + 毕业宣言 + CTA 按钮
2. ✅ **Project Section** - 项目路演
   - 痛点场景（3 个卡片）
   - MVP 核心功能（3 个卡片 + 技术标签）
   - 成果展示（3 个亮点）
   - 从点子到产品的思考（3 个阶段）
3. ✅ **Learning Section** - 学习复盘
   - AI 编程心得（3 条）
   - 关键方法（01/02/03 大号数字）
   - 学习路径（5 步时间线）
   - 推荐学习资源
4. ✅ **Tech Stack Section** - 技术栈 & 部署
   - 技术栈展示（5 类：前端/后端/AI/部署/工具）
   - 部署步骤（4 步 + 代码复制）
   - 项目链接（GitHub + Vercel）
5. ✅ **Chat Section** - AI 数字分身（占位 UI + API 预留）
   - 聊天窗口界面
   - 欢迎消息 + 建议问题
   - sendMessage() 接口预留
6. ✅ **Footer Section** - 页脚
   - 社交链接 + 项目链接
   - 快速导航 + 版权信息
7. ✅ **Navigation Bar** - 顶部导航（响应式 + 折叠菜单）

## 🛠️ 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS + shadcn/ui
- **路由**: React Router
- **图标**: Lucide React
- **部署**: Vercel

## 🚀 快速开始（5 分钟）

### 1. 安装依赖
```bash
pnpm install
```

### 2. 启动开发服务器
```bash
pnpm dev
```
访问 `http://localhost:5173`

### 3. 定制内容（核心步骤）
编辑 **一个文件** 即可：
```bash
src/content/profile.ts
```

修改个人信息、项目介绍、学习心得等，保存后页面自动刷新！

**详细定制指南**：[📄 CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)

### 4. 构建生产版本
```bash
pnpm build
pnpm preview
```

## 📝 内容定制（30 秒了解）

### 必须修改的字段（5 分钟完成）

在 `src/content/profile.ts` 中：

```typescript
// ✏️ 1. 个人信息
personal: {
  name: "你的姓名",
  email: "your@email.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourprofile"
}

// ✏️ 2. 项目信息
project: {
  name: "你的项目名称",
  tagline: "项目一句话描述",
  painPoints: [...],  // 3 个痛点
  mvpFeatures: [...], // 3 个核心功能
  achievements: [...]  // 3 个成果
}

// ✏️ 3. 学习复盘
learning: {
  insights: [...],    // 3 条心得
  keyMethods: [...],  // 3 个关键方法
  learningPath: [...]  // 5 步学习路径
}

// ✏️ 4. 部署链接
deployment: {
  github: { repoUrl: "你的仓库地址" },
  vercel: { projectUrl: "你的部署链接" }
}
```

**完整字段清单**：[📄 CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)

## 🌐 部署到 Vercel（2 分钟）

### 快速部署（3 步）

```bash
# 1. 推送到 GitHub
git add .
git commit -m "feat: 完成毕业展示页"
git push origin main

# 2. 访问 vercel.com 并登录
# 3. Import 你的 GitHub 仓库 → Deploy
```

等待 1-3 分钟，部署完成！🎉

**详细部署流程**：[🚀 DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

### 环境变量（可选）

如果未来接入 AI API，在 Vercel 添加：

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key
VITE_OPENAI_API_KEY=your_openai_key
```

## 📁 项目结构

```
src/
├── components/
│   ├── sections/          # 页面各个 Section 组件
│   │   ├── HeroSection.tsx
│   │   ├── ProjectSection.tsx
│   │   ├── LearningSection.tsx
│   │   ├── TechStackSection.tsx
│   │   ├── ChatSection.tsx
│   │   └── FooterSection.tsx
│   ├── ui/                # shadcn/ui 基础组件（30+ 个）
│   └── NavigationBar.tsx  # 顶部导航栏
├── content/
│   └── profile.ts         # 🔧 内容配置中心（核心文件）
├── pages/
│   └── Index.tsx          # 主页面（整合所有 Section）
├── index.css              # 全局样式 + 设计系统
└── main.tsx               # 应用入口
```

**详细结构说明**：[📁 PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)

## 🎨 设计系统

### 配色方案（`src/index.css`）
- **主色调**：科技蓝紫 `--primary: 250 70% 60%`
- **强调色**：青色 `--accent: 190 95% 50%`
- **支持暗黑模式**：自动适配
- **自定义渐变**：`--gradient-primary`、`--gradient-accent`
- **发光效果**：`--shadow-glow`、`.glow-effect`

### 自定义工具类
```css
.text-gradient   /* 渐变文字效果 */
.glow-effect     /* 发光阴影效果 */
.card-shadow     /* 卡片阴影效果 */
```

## 🔧 扩展功能

### 接入 AI 聊天功能
在 `src/content/profile.ts` 中：
```typescript
aiChat: {
  comingSoon: false  // 设置为 false 启用聊天
}
```

在 `ChatSection.tsx` 中修改 `sendMessage()` 函数接入 API。

### 添加更多 Section
1. 在 `src/components/sections/` 创建新组件
2. 在 `src/content/profile.ts` 添加数据配置
3. 在 `src/pages/Index.tsx` 中引入
4. 在 `NavigationBar.tsx` 添加导航链接

## 📦 可用脚本

```bash
pnpm dev          # 启动开发服务器（http://localhost:5173）
pnpm build        # 构建生产版本（输出到 dist/）
pnpm preview      # 预览生产构建
pnpm lint         # 运行 ESLint 检查
```

## 📚 完整文档

- **⚡ 快速开始**: [QUICK_START.md](./QUICK_START.md) - 5 分钟上手指南
- **🎨 定制指南**: [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) - 详细字段清单
- **📁 项目结构**: [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - 文件作用说明
- **🚀 部署指南**: [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md) - GitHub + Vercel 完整流程

## ✅ 完成检查清单

部署前确认：
- [ ] 本地运行正常（`pnpm dev`）
- [ ] 所有占位内容已替换（`profile.ts`）
- [ ] 移动端显示正常
- [ ] 所有链接有效（GitHub、Vercel、社交链接）
- [ ] 已推送到 GitHub
- [ ] Vercel 部署成功
- [ ] 自定义域名配置（可选）

## 🎯 核心特色

### 1. 数据与视图分离
所有内容配置在 `profile.ts`，组件只负责展示，易于维护。

### 2. 组件化设计
6 个独立 Section，每个功能清晰，易于定制和扩展。

### 3. 响应式导航
桌面端横向导航，移动端折叠菜单，自动适配。

### 4. 平滑滚动
点击导航或按钮，平滑滚动到对应 Section。

### 5. AI 功能预留
ChatSection 已预留 `sendMessage()` 接口，易于接入 AI API。

## 🐛 常见问题

### Q: 修改 profile.ts 后没有生效？
A: 确保保存了文件，开发服务器会自动刷新。

### Q: 如何修改颜色主题？
A: 编辑 `src/index.css` 中的 CSS 变量。

### Q: 如何添加更多痛点/功能？
A: 在 `profile.ts` 对应数组中添加新对象。

### Q: 可以删除某些 Section 吗？
A: 可以，在 `Index.tsx` 中注释掉对应的组件。

## 📄 许可证

MIT License - 自由使用与修改

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

## 🎉 开始使用

```bash
# 1. 克隆项目
git clone <YOUR_REPO_URL>

# 2. 安装依赖
pnpm install

# 3. 启动开发
pnpm dev

# 4. 定制内容
# 编辑 src/content/profile.ts

# 5. 部署上线
git push
# 在 Vercel 导入仓库即可
```

---

**Made with ❤️ and AI**

祝你的毕业展示页大获成功！🚀
