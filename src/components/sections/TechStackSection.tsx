/**
 * Tech Stack Section - 技术栈与部署说明区域
 * 展示：使用的技术栈 + GitHub & Vercel 部署步骤
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code2, Palette, Database, Cloud, Github, Rocket, Copy, ExternalLink } from "lucide-react";
import { profileData } from "@/content/profile";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const TechStackSection = () => {
  const { techStack, deployment } = profileData;
  const { toast } = useToast();
  const [copiedStep, setCopiedStep] = useState<number | null>(null);

  const copyToClipboard = (text: string, stepIndex: number) => {
    navigator.clipboard.writeText(text);
    setCopiedStep(stepIndex);
    toast({
      title: "已复制！",
      description: "命令已复制到剪贴板"
    });
    setTimeout(() => setCopiedStep(null), 2000);
  };

  return (
    <section id="deploy" className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">技术栈 & 工程化</h2>
          <p className="text-xl text-muted-foreground">从开发到部署的完整流程</p>
        </div>

        {/* 技术栈展示 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          
          {/* 前端技术 */}
          <Card className="card-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Code2 className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-base">前端技术</CardTitle>
              <CardDescription className="text-xs">现代化 UI 开发</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {techStack.frontend.map((tech, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-medium text-sm">{tech.name}</div>
                  <div className="text-xs text-muted-foreground">{tech.description}</div>
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
              <CardTitle className="text-base">后端服务</CardTitle>
              <CardDescription className="text-xs">数据存储与 API</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {techStack.backend.map((tech, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-medium text-sm">{tech.name}</div>
                  <div className="text-xs text-muted-foreground">{tech.description}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI 技术 */}
          <Card className="card-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Palette className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-base">AI 技术</CardTitle>
              <CardDescription className="text-xs">智能化能力</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {techStack.ai.map((tech, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-medium text-sm">{tech.name}</div>
                  <div className="text-xs text-muted-foreground">{tech.description}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* 部署平台 */}
          <Card className="card-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-2">
                <Cloud className="w-6 h-6 text-accent" />
              </div>
              <CardTitle className="text-base">部署平台</CardTitle>
              <CardDescription className="text-xs">自动化部署流程</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {techStack.deployment.map((tech, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-medium text-sm">{tech.name}</div>
                  <div className="text-xs text-muted-foreground">{tech.description}</div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* AI 工具 */}
          <Card className="card-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-2">
                <Rocket className="w-6 h-6 text-primary" />
              </div>
              <CardTitle className="text-base">AI 工具</CardTitle>
              <CardDescription className="text-xs">AI 辅助开发</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              {techStack.aiTools.map((tech, index) => (
                <div key={index} className="space-y-1">
                  <div className="font-medium text-sm">{tech.name}</div>
                  <div className="text-xs text-muted-foreground">{tech.description}</div>
                </div>
              ))}
            </CardContent>
          </Card>

        </div>

        {/* 部署指南 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center">部署指南</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            {deployment.steps.map((step, index) => (
              <Card key={index} className="card-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {step.number}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{step.title}</CardTitle>
                      <CardDescription>{step.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  {step.commands.map((command, cmdIndex) => (
                    <div key={cmdIndex} className="group">
                      <div className="bg-muted/50 p-3 rounded-lg font-mono text-sm flex items-center justify-between gap-2">
                        <span className="flex-1 break-all">{command}</span>
                        {command.includes('git') || command.includes('VITE_') ? (
                          <Button
                            size="icon"
                            variant="ghost"
                            className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                            onClick={() => copyToClipboard(command, index * 10 + cmdIndex)}
                          >
                            <Copy className="h-3 w-3" />
                          </Button>
                        ) : null}
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 快速链接 */}
        <Card className="card-shadow border-2">
          <CardHeader>
            <CardTitle>项目链接</CardTitle>
            <CardDescription>快速访问我的项目和代码</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col sm:flex-row gap-4">
            <Button asChild className="flex-1">
              <a href={deployment.github.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub 仓库
              </a>
            </Button>
            <Button asChild variant="outline" className="flex-1">
              <a href={deployment.vercel.projectUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                在线演示
              </a>
            </Button>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default TechStackSection;
