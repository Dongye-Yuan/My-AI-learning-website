# 📁 项目结构说明

## 目录结构

```
graduation-showcase/
├── src/
│   ├── components/
│   │   ├── sections/              # 页面各个 Section 组件
│   │   │   ├── HeroSection.tsx           # 首页头部区域
│   │   │   ├── ProjectSection.tsx        # 项目路演区域
│   │   │   ├── LearningSection.tsx       # 学习复盘区域
│   │   │   ├── TechStackSection.tsx      # 技术栈与部署区域
│   │   │   ├── ChatSection.tsx           # AI 数字分身聊天区域
│   │   │   └── FooterSection.tsx         # 页脚区域
│   │   ├── ui/                    # shadcn/ui 基础组件库
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── input.tsx
│   │   │   ├── tabs.tsx
│   │   │   └── ... (其他 UI 组件)
│   │   └── NavigationBar.tsx      # 顶部导航栏组件
│   ├── content/
│   │   └── profile.ts             # 🔧 内容配置中心（所有可编辑内容）
│   ├── hooks/
│   │   ├── use-mobile.tsx         # 移动端检测 Hook
│   │   └── use-toast.ts           # Toast 通知 Hook
│   ├── lib/
│   │   └── utils.ts               # 工具函数（cn 等）
│   ├── pages/
│   │   ├── Index.tsx              # 主页面（整合所有 Section）
│   │   └── NotFound.tsx           # 404 页面
│   ├── index.css                  # 全局样式 + 设计系统
│   ├── main.tsx                   # 应用入口
│   └── router.tsx                 # 路由配置
├── public/
│   ├── favicon.ico
│   └── placeholder.svg
├── CUSTOMIZATION_GUIDE.md         # 📝 定制指南
├── PROJECT_STRUCTURE.md           # 📁 本文件
├── DEPLOYMENT_GUIDE.md            # 🚀 部署指南
├── README.md                      # 项目说明
├── vercel.json                    # Vercel 部署配置
├── package.json                   # 依赖配置
├── tailwind.config.ts             # Tailwind CSS 配置
├── tsconfig.json                  # TypeScript 配置
└── vite.config.ts                 # Vite 配置
```

---

## 📄 文件作用说明

### 核心文件

#### `src/content/profile.ts`
**最重要的文件！** 所有可编辑内容的配置中心
- 个人信息（姓名、邮箱、社交链接）
- 项目信息（名称、描述、痛点、MVP、成果）
- 学习复盘（心得、方法、路径）
- 技术栈列表
- AI 分身配置
- 部署信息

#### `src/pages/Index.tsx`
主页面，整合所有 Section 组件
- 导入并渲染所有 Section
- 添加导航栏和 Toast 组件

#### `src/components/NavigationBar.tsx`
顶部导航栏组件
- 桌面端：横向导航
- 移动端：折叠菜单
- 平滑滚动到各个 Section

---

### Section 组件详解

#### `HeroSection.tsx`
首页头部区域
- 个人介绍和毕业宣言
- 技能标签
- CTA 按钮（查看项目、学习复盘）
- 社交链接（GitHub、LinkedIn、邮箱）
- 背景装饰动画

#### `ProjectSection.tsx`
项目路演区域
- 项目概览卡片（名称、Slogan、链接）
- 痛点场景展示（3 个卡片）
- MVP 核心功能（3 个卡片 + 技术标签）
- 成果展示（3 个高亮卡片）
- 思考过程（3 个步骤卡片）

#### `LearningSection.tsx`
学习复盘区域
- AI 编程心得（3 个卡片）
- 关键方法（3 个大号数字卡片 01/02/03）
- 学习路径（5 步时间线）
- 推荐学习资源（3 类资源列表）

#### `TechStackSection.tsx`
技术栈与部署区域
- 技术栈展示（前端、后端、AI、部署、工具）
- 部署指南（4 步流程 + 代码复制）
- 项目链接（GitHub + Vercel 快速访问）

#### `ChatSection.tsx`
AI 数字分身聊天区域
- 聊天窗口界面
- 消息气泡显示
- 输入框和发送按钮
- 建议问题列表
- 开发中/在线状态切换
- `sendMessage()` 接口预留（未来接入 AI API）

#### `FooterSection.tsx`
页脚区域
- 品牌信息和社交链接
- 快速导航
- 项目链接（GitHub + Vercel）
- 回到顶部按钮
- 版权信息

---

### UI 组件库 (`src/components/ui/`)

基于 shadcn/ui 的 React 组件：
- `button.tsx` - 按钮组件
- `card.tsx` - 卡片组件
- `badge.tsx` - 徽章组件
- `input.tsx` - 输入框组件
- `tabs.tsx` - 标签页组件
- `toast.tsx` + `toaster.tsx` - Toast 通知
- 其他 30+ 个基础 UI 组件

---

### 样式文件

#### `src/index.css`
全局样式和设计系统
- CSS 变量定义（颜色、渐变、阴影）
- 明亮/暗黑模式配色
- 自定义滚动条样式
- 工具类（text-gradient、glow-effect、card-shadow）

#### `tailwind.config.ts`
Tailwind CSS 配置
- 主题扩展
- 颜色系统映射
- 动画配置

---

### 配置文件

#### `vercel.json`
Vercel 部署配置
- 构建命令：`pnpm run build`
- 输出目录：`dist`
- 框架：Vite

#### `package.json`
项目依赖和脚本
- 依赖：React、TypeScript、Tailwind CSS、shadcn/ui
- 脚本：`dev`、`build`、`preview`、`lint`

#### `vite.config.ts`
Vite 构建配置
- 路径别名：`@/` → `src/`
- 插件：React

---

## 🔄 数据流向

```
profile.ts (数据源)
    ↓
Section 组件 (读取数据)
    ↓
Index.tsx (整合显示)
    ↓
浏览器渲染
```

**核心理念**：数据与视图分离
- 所有内容配置在 `profile.ts`
- Section 组件只负责展示
- 修改内容时只需编辑 `profile.ts`

---

## 🎨 样式系统

### 设计 Token (CSS 变量)
```css
--primary      /* 主色调 */
--accent       /* 强调色 */
--muted        /* 次要色 */
--background   /* 背景色 */
--foreground   /* 前景色 */
```

### 自定义工具类
```css
.text-gradient  /* 渐变文字 */
.glow-effect    /* 发光效果 */
.card-shadow    /* 卡片阴影 */
```

---

## 📦 组件化设计原则

1. **单一职责**：每个 Section 只负责一个区域
2. **数据驱动**：从 `profile.ts` 读取配置
3. **可复用**：使用 shadcn/ui 基础组件
4. **响应式**：移动端和桌面端自适应
5. **可扩展**：易于添加新 Section 或功能

---

## 🚀 扩展建议

### 添加新 Section
1. 在 `src/components/sections/` 创建新组件
2. 在 `profile.ts` 添加对应数据配置
3. 在 `Index.tsx` 中引入并渲染
4. 在 `NavigationBar.tsx` 添加导航链接

### 接入 AI API
1. 在 `ChatSection.tsx` 中修改 `sendMessage()` 函数
2. 接入 OpenAI/Anthropic API
3. 添加环境变量 `VITE_OPENAI_API_KEY`
4. 部署时在 Vercel 配置环境变量

---

## 📚 技术栈

- **框架**: React 18 + TypeScript
- **构建**: Vite
- **样式**: Tailwind CSS
- **组件**: shadcn/ui
- **路由**: React Router
- **图标**: Lucide React
- **部署**: Vercel

---

**理解项目结构后，开始定制你的毕业展示页吧！🎉**
