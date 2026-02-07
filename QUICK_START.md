# ⚡ 快速开始指南

## 🎯 5 分钟完成部署

### Step 1: 本地运行（30 秒）

```bash
# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 `http://localhost:5173` 查看效果

---

### Step 2: 定制内容（5 分钟）

编辑 **一个文件** 即可：`src/content/profile.ts`

```typescript
// 修改个人信息
personal: {
  name: "你的姓名",              // ✏️ 改这里
  email: "your@email.com",       // ✏️ 改这里
  github: "https://github.com/yourusername",  // ✏️ 改这里
  // ...
}

// 修改项目信息
project: {
  name: "你的项目名称",          // ✏️ 改这里
  tagline: "项目一句话描述",      // ✏️ 改这里
  // ...
}
```

**详细字段说明**：查看 [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)

---

### Step 3: 推送到 GitHub（1 分钟）

```bash
git add .
git commit -m "feat: 完成毕业展示页定制"
git push origin main
```

---

### Step 4: 部署到 Vercel（2 分钟）

1. 访问 [vercel.com](https://vercel.com) 并登录
2. 点击 "Add New Project"
3. 选择你的 GitHub 仓库
4. 点击 "Deploy"

等待 1-3 分钟，部署完成！🎉

**详细部署流程**：查看 [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

## 📋 必须修改的内容清单

### 1. 个人信息（1 分钟）
- [ ] 姓名
- [ ] 邮箱
- [ ] GitHub 链接
- [ ] LinkedIn 链接

### 2. 项目信息（2 分钟）
- [ ] 项目名称
- [ ] 项目描述
- [ ] 痛点场景（3 个）
- [ ] MVP 功能（3 个）

### 3. 学习心得（1 分钟）
- [ ] AI 编程心得（3 条）
- [ ] 关键方法（3 个）

### 4. 部署链接（1 分钟）
- [ ] GitHub 仓库地址
- [ ] Vercel 项目链接

---

## 🎨 页面结构预览

```
┌─────────────────────────────────────┐
│  导航栏 (Navigation Bar)            │
├─────────────────────────────────────┤
│  Hero Section                       │
│  - 个人介绍 + 毕业宣言              │
│  - CTA 按钮                         │
├─────────────────────────────────────┤
│  项目路演 Section                   │
│  - 痛点场景 (3 个卡片)              │
│  - MVP 功能 (3 个卡片)              │
│  - 成果展示 (3 个卡片)              │
│  - 思考过程 (3 个步骤)              │
├─────────────────────────────────────┤
│  学习复盘 Section                   │
│  - AI 编程心得 (3 个卡片)           │
│  - 关键方法 (01/02/03)             │
│  - 学习路径 (5 步时间线)            │
│  - 推荐资源                         │
├─────────────────────────────────────┤
│  技术栈 & 部署 Section              │
│  - 技术栈展示 (5 类)                │
│  - 部署步骤 (4 步)                  │
│  - 项目链接                         │
├─────────────────────────────────────┤
│  AI 数字分身 Section                │
│  - 聊天窗口 (占位 UI)               │
│  - 未来功能计划                     │
├─────────────────────────────────────┤
│  Footer Section                     │
│  - 社交链接 + 项目链接              │
│  - 版权信息                         │
└─────────────────────────────────────┘
```

---

## 🛠️ 可用命令

```bash
pnpm dev          # 启动开发服务器
pnpm build        # 构建生产版本
pnpm preview      # 预览生产构建
pnpm lint         # 运行 ESLint 检查
```

---

## 📚 更多文档

- **定制内容**：[CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md)
- **项目结构**：[PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md)
- **部署指南**：[DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

---

## 🎉 完成检查清单

部署前确认：
- [ ] 本地运行正常
- [ ] 所有占位内容已替换
- [ ] 移动端显示正常
- [ ] 所有链接有效
- [ ] 已推送到 GitHub
- [ ] Vercel 部署成功

---

**准备好了吗？开始定制你的毕业展示页！🚀**

有问题？查看 [CUSTOMIZATION_GUIDE.md](./CUSTOMIZATION_GUIDE.md) 获取详细帮助。
