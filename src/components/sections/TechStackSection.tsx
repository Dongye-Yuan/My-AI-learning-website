/**
 * Tech Stack Section - 技术栈与部署说明区域
 * 展示：使用的技术栈 + GitHub & Vercel 部署步骤
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Code2, Palette, Database, Cloud, Github, Rocket } from "lucide-react";

const TechStackSection = () => {
  // 🔧 可编辑内容配置
  const config = {
    // 技术栈分类
    techStack: {
      frontend: [
        { name: "React", description: "组件化 UI 开发" },
        { name: "TypeScript", description: "类型安全" },
        { name: "Tailwind CSS", description: "快速样式开发" },
        { name: "Vite", description: "极速构建工具" }
      ],
      backend: [
        { name: "Supabase", description: "后端即服务" },
        { name: "PostgreSQL", description: "关系型数据库" },
        { name: "Row Level Security", description: "数据安全" }
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

    // GitHub 仓库信息
    github: {
      repoUrl: "https://github.com/yourusername/your-repo",
      repoName: "your-repo"
    },

    // Vercel 部署信息
    vercel: {
      projectUrl: "https://your-project.vercel.app",
      projectName: "your-project"
    }
  };

  return (
    <section id="tech-stack" className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">技术栈 & 部署</h2>
          <p className="text-xl text-muted-foreground">现代化的开发工具链</p>
        </div>

        {/* 技术栈展示 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* 前端技术 */}
          <Card className="card-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>前端技术</CardTitle>
              <CardDescription>现代化 UI 开发</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {config.techStack.frontend.map((tech, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-medium">{tech.name}</div>
                  <div className="text-sm text-muted-foreground">{tech.description}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 后端技术 */}
          <Card className="card-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                <Database className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>后端服务</CardTitle>
              <CardDescription>数据存储与 API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {config.techStack.backend.map((tech, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-medium">{tech.name}</div>
                  <div className="text-sm text-muted-foreground">{tech.description}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 部署平台 */}
          <Card className="card-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Cloud className="w-6 h-6 text-primary" />
              </div>
              <CardTitle>部署平台</CardTitle>
              <CardDescription>自动化部署流程</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {config.techStack.deployment.map((tech, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-medium">{tech.name}</div>
                  <div className="text-sm text-muted-foreground">{tech.description}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI 工具 */}
          <Card className="card-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                <Palette className="w-6 h-6 text-accent" />
              </div>
              <CardTitle>AI 工具</CardTitle>
              <CardDescription>AI 辅助开发</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {config.techStack.aiTools.map((tech, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-medium">{tech.name}</div>
                  <div className="text-sm text-muted-foreground">{tech.description}</div>
                </div>
              ))}
            </CardContent>
          </Card>

        </div>

        {/* 部署指南 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center">部署指南</h3>
          
          <Tabs defaultValue="github" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="github">
                <Github className="w-4 h-4 mr-2" />
                GitHub 配置
              </TabsTrigger>
              <TabsTrigger value="vercel">
                <Rocket className="w-4 h-4 mr-2" />
                Vercel 部署
              </TabsTrigger>
            </TabsList>

            {/* GitHub 配置步骤 */}
            <TabsContent value="github" className="space-y-4 mt-6">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Step 1: 创建 GitHub 仓库</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div># 初始化 Git 仓库</div>
                    <div>git init</div>
                    <div>git add .</div>
                    <div>git commit -m "Initial commit"</div>
                  </div>
                  <div className="text-muted-foreground">
                    在 GitHub 创建新仓库，然后推送代码
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg font-mono text-sm space-y-2">
                    <div>git remote add origin {config.github.repoUrl}.git</div>
                    <div>git branch -M main</div>
                    <div>git push -u origin main</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Step 2: 配置仓库</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Badge variant="secondary">1</Badge>
                    <div>添加 README.md 说明项目介绍</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="secondary">2</Badge>
                    <div>配置 .gitignore 忽略 node_modules 等</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="secondary">3</Badge>
                    <div>设置仓库为 Public（如需公开展示）</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Vercel 部署步骤 */}
            <TabsContent value="vercel" className="space-y-4 mt-6">
              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Step 1: 连接 Vercel</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Badge variant="secondary">1</Badge>
                    <div>访问 <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">vercel.com</a> 并登录</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="secondary">2</Badge>
                    <div>点击 "Add New Project"</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="secondary">3</Badge>
                    <div>导入你的 GitHub 仓库</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Step 2: 配置构建设置</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="font-medium">Framework Preset</div>
                    <Badge>Vite</Badge>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium">Build Command</div>
                    <div className="bg-muted/50 p-3 rounded-lg font-mono text-sm">
                      pnpm run build
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="font-medium">Output Directory</div>
                    <div className="bg-muted/50 p-3 rounded-lg font-mono text-sm">
                      dist
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Step 3: 环境变量配置（可选）</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="text-muted-foreground mb-2">
                    如果使用 Supabase 或其他 API，需要配置环境变量：
                  </div>
                  <div className="bg-muted/50 p-3 rounded-lg font-mono text-sm space-y-1">
                    <div>VITE_SUPABASE_URL=your_supabase_url</div>
                    <div>VITE_SUPABASE_ANON_KEY=your_anon_key</div>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-shadow">
                <CardHeader>
                  <CardTitle>Step 4: 部署完成</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex items-start gap-2">
                    <Badge variant="secondary">✓</Badge>
                    <div>点击 "Deploy"，Vercel 会自动构建并部署</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="secondary">✓</Badge>
                    <div>每次 push 到 main 分支会自动触发部署</div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Badge variant="secondary">✓</Badge>
                    <div>可在 Vercel Dashboard 查看部署状态和日志</div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>

      </div>
    </section>
  );
};

export default TechStackSection;
