# 🚀 部署指南 - Vercel 部署完整流程

本指南帮助你将毕业展示页从本地开发环境部署到 Vercel 生产环境。

---

## 📋 前置条件

- ✅ 已安装 Node.js (v18+)
- ✅ 已安装 pnpm (`npm install -g pnpm`)
- ✅ 拥有 GitHub 账号
- ✅ 拥有 Vercel 账号（可用 GitHub 登录）

---

## 🏠 本地开发

### 1. 安装依赖
```bash
pnpm install
```

### 2. 启动开发服务器
```bash
pnpm dev
```
访问 `http://localhost:5173` 查看效果

### 3. 构建测试
```bash
pnpm build
pnpm preview
```
确保构建成功后再进行部署

---

## 📦 GitHub 配置

### Step 1: 初始化 Git 仓库
```bash
# 初始化 Git（如果还没有）
git init

# 添加所有文件
git add .

# 提交
git commit -m "feat: 完成课程毕业展示页"
```

### Step 2: 创建 GitHub 仓库
1. 访问 [GitHub](https://github.com)
2. 点击右上角 `+` → `New repository`
3. 填写信息：
   - **Repository name**: `graduation-showcase` (或你喜欢的名字)
   - **Description**: `我的 AI 编程课程毕业展示页`
   - **Public** (公开) 或 **Private** (私有)
4. **不要**勾选 "Add a README file"
5. 点击 `Create repository`

### Step 3: 推送代码到 GitHub
```bash
# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# 重命名主分支为 main
git branch -M main

# 推送代码
git push -u origin main
```

---

## 🌐 Vercel 部署

### Step 1: 连接 Vercel

#### 方法 1: 通过 Vercel Dashboard（推荐新手）
1. 访问 [vercel.com](https://vercel.com) 并登录
2. 点击 `Add New...` → `Project`
3. 导入你的 GitHub 仓库：
   - 点击 `Import Git Repository`
   - 搜索并选择你的仓库
   - 点击 `Import`

#### 方法 2: 通过 Vercel CLI
```bash
# 安装 Vercel CLI
npm i -g vercel

# 登录 Vercel
vercel login

# 部署
vercel
```

### Step 2: 配置构建设置

Vercel 会自动检测项目类型，确认以下配置：

```
Framework Preset: Vite
Build Command: pnpm run build
Output Directory: dist
Install Command: pnpm install
```

如需手动配置，可以在项目根目录创建 `vercel.json`：
```json
{
  "buildCommand": "pnpm run build",
  "outputDirectory": "dist",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install"
}
```

### Step 3: 环境变量配置（可选）

如果你的项目使用了 Supabase 或其他 API：

1. 在 Vercel Dashboard 进入你的项目
2. 点击 `Settings` → `Environment Variables`
3. 添加环境变量：
   ```
   VITE_SUPABASE_URL = https://your-project.supabase.co
   VITE_SUPABASE_ANON_KEY = your-anon-key
   ```
4. 点击 `Save`

### Step 4: 部署

1. 点击 `Deploy` 按钮
2. 等待构建完成（通常 1-3 分钟）
3. 部署成功后，Vercel 会提供一个链接：
   ```
   https://your-project.vercel.app
   ```

---

## 🎯 自定义域名（可选）

### Step 1: 购买域名
- 推荐平台：[Namecheap](https://www.namecheap.com), [GoDaddy](https://www.godaddy.com), [阿里云](https://wanwang.aliyun.com)

### Step 2: 在 Vercel 添加域名
1. 进入项目 → `Settings` → `Domains`
2. 输入你的域名（如 `yourname.com`）
3. 点击 `Add`

### Step 3: 配置 DNS
在你的域名服务商处添加 DNS 记录：

**方法 1: A 记录（推荐）**
```
Type: A
Name: @
Value: 76.76.21.21
```

**方法 2: CNAME 记录**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

等待 DNS 生效（可能需要几分钟到几小时）

---

## 🔄 自动部署

配置完成后，每次推送到 GitHub 会自动触发部署：

```bash
# 修改代码后
git add .
git commit -m "update: 更新项目内容"
git push

# Vercel 会自动部署最新代码
```

---

## 📊 部署状态监控

### Vercel Dashboard
- 查看部署历史
- 查看构建日志
- 查看访问统计
- 配置环境变量

### 部署预览
- 每个 Pull Request 会自动生成预览链接
- 测试新功能而不影响生产环境

---

## 🐛 常见问题

### Q1: 构建失败
**检查项**:
- 确保 `package.json` 中的脚本正确
- 检查是否有 TypeScript 错误
- 查看 Vercel 构建日志

### Q2: 页面空白
**解决方案**:
- 检查 `dist` 目录是否生成
- 确认路由配置正确
- 查看浏览器控制台错误

### Q3: 环境变量不生效
**解决方案**:
- 确保变量名以 `VITE_` 开头
- 重新部署项目
- 检查变量是否在正确的环境（Production/Preview）

### Q4: 自定义域名无法访问
**解决方案**:
- 等待 DNS 生效（最长 48 小时）
- 使用 [DNS Checker](https://dnschecker.org) 检查 DNS 状态
- 确认 DNS 记录配置正确

---

## 🎉 部署检查清单

部署完成后，检查以下项：

- [ ] 所有页面正常加载
- [ ] 响应式布局正常（移动端/桌面端）
- [ ] 所有链接可点击
- [ ] 社交链接跳转正确
- [ ] 图片资源加载正常
- [ ] 控制台无错误
- [ ] Lighthouse 性能评分 > 90

---

## 📱 分享你的作品

部署完成后，不要忘记分享：

- 📌 更新你的 LinkedIn 个人资料
- 📌 在 GitHub README 添加演示链接
- 📌 分享到技术社区（掘金、V2EX、DEV.to）
- 📌 发送给课程导师/同学

---

## 🚀 下一步

- [ ] 配置 Google Analytics 追踪访问
- [ ] 添加 Open Graph 元标签（社交分享预览）
- [ ] 优化 SEO（添加 meta 描述）
- [ ] 接入 AI API 实现真实聊天功能
- [ ] 持续迭代产品功能

---

**需要帮助？**
- Vercel 文档: https://vercel.com/docs
- GitHub 帮助: https://docs.github.com
- 社区支持: https://github.com/vercel/vercel/discussions

祝你部署顺利！🎊
