# 🎓 AI 编程课程毕业展示页

一个精美的单页应用，用于展示 AI 编程课程的学习成果与项目路演。

[![Built with enter.pro](https://img.shields.io/badge/Build%20with-Enter.pro-FC5776?style=for-the-badge&labelColor=1F1F1F)](https://enter.pro)

## ✨ 特性

- 🎨 现代化 UI 设计（科技感 + 产品路演风格）
- 📱 完全响应式布局（移动端友好）
- 🚀 快速加载与流畅动画
- 🎯 模块化组件结构（易于定制）
- 🌓 支持暗黑模式
- 📦 开箱即用的部署配置

## 📋 页面结构

1. **Hero Section** - 个人介绍 + 毕业宣言
2. **Project Section** - 项目路演（痛点 → MVP → 思考过程）
3. **Learning Section** - 学习复盘与推荐路径
4. **Tech Stack Section** - 技术栈展示 + 部署指南
5. **Chat Section** - AI 数字分身（占位 UI，可扩展）
6. **Footer Section** - 页脚信息

## 🛠️ 技术栈

- **框架**: React 18 + TypeScript
- **构建工具**: Vite
- **样式**: Tailwind CSS + shadcn/ui
- **路由**: React Router
- **部署**: Vercel（推荐）

## 🚀 快速开始

### 1. 安装依赖
```bash
pnpm install
```

### 2. 本地开发
```bash
pnpm dev
```
访问 `http://localhost:5173`

### 3. 构建生产版本
```bash
pnpm build
pnpm preview
```

## 📝 内容定制

所有可编辑内容都集中在各组件的 `config` 对象中，详细指南请查看：

**[📄 CONTENT_GUIDE.md](./CONTENT_GUIDE.md)** - 完整的内容替换清单

**快速替换清单**：
- [ ] 个人信息（姓名、邮箱、社交链接）
- [ ] 项目名称与描述
- [ ] GitHub / Vercel 链接
- [ ] 痛点场景
- [ ] MVP 功能
- [ ] 学习心得

## 🌐 部署到 Vercel

详细部署流程请查看：

**[🚀 DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)** - 完整的部署指南

**快速部署**：
```bash
# 推送到 GitHub
git push origin main

# 在 Vercel 导入仓库
# 自动部署完成！
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
│   └── ui/                # shadcn/ui 基础组件
├── pages/
│   └── Index.tsx          # 主页面（整合所有 Section）
├── lib/
│   └── utils.ts           # 工具函数
├── index.css              # 全局样式 + 设计系统
└── main.tsx               # 应用入口
```

## 🎨 设计系统

配色方案定义在 `src/index.css`：
- 主色调：科技蓝紫 `--primary`
- 强调色：青色 `--accent`
- 支持暗黑模式
- 自定义渐变与阴影

## 🔧 扩展功能

### 接入 AI 聊天功能
在 `ChatSection.tsx` 中：
1. 设置 `comingSoon: false`
2. 接入 OpenAI / Anthropic API
3. 配置环境变量

### 添加更多 Section
1. 在 `src/components/sections/` 创建新组件
2. 在 `src/pages/Index.tsx` 中引入
3. 更新导航链接

## 📦 可用脚本

```bash
pnpm dev          # 启动开发服务器
pnpm build        # 构建生产版本
pnpm preview      # 预览生产构建
pnpm lint         # 运行 ESLint 检查
```

## 📄 许可证

MIT License - 自由使用与修改

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**Made with ❤️ and AI**
