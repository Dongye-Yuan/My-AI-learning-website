/**
 * Learning Section - 学习复盘区域
 * 包含：AI 编程心得 + 推荐学习路径
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Sparkles, TrendingUp, Zap } from "lucide-react";

const LearningSection = () => {
  // 🔧 可编辑内容配置
  const config = {
    // AI 编程心得
    insights: [
      {
        title: "AI 是思维放大器",
        description: "不是替代编程，而是让你专注于「想做什么」而非「怎么做」，极大提升迭代速度。",
        icon: Sparkles
      },
      {
        title: "提示词工程是新技能",
        description: "清晰的问题描述 + 上下文 = 高质量输出。学会与 AI 对话比记住语法更重要。",
        icon: Zap
      },
      {
        title: "从产品视角学开发",
        description: "先思考用户价值，再用 AI 快速实现。技术是手段，解决问题才是目的。",
        icon: TrendingUp
      }
    ],

    // 学习路径推荐
    learningPath: {
      beginner: [
        {
          week: "Week 1-2",
          topic: "AI 编程基础",
          content: "学习使用 Cursor / GitHub Copilot，理解 AI 辅助编程的核心思维",
          resources: ["Cursor 官方教程", "Prompt Engineering 入门"]
        },
        {
          week: "Week 3-4",
          topic: "前端快速上手",
          content: "React + Tailwind CSS 基础，学会用组件化思维构建界面",
          resources: ["React 官方文档", "Tailwind CSS 速查表"]
        }
      ],
      intermediate: [
        {
          week: "Week 5-6",
          topic: "全栈开发实践",
          content: "接入 Supabase 实现数据存储、用户认证、API 调用",
          resources: ["Supabase 快速开始", "RESTful API 设计"]
        },
        {
          week: "Week 7-8",
          topic: "产品化与部署",
          content: "从 MVP 到上线，学会用 Vercel/Netlify 快速部署，域名绑定",
          resources: ["Vercel 部署指南", "域名配置教程"]
        }
      ],
      advanced: [
        {
          week: "Week 9+",
          topic: "进阶探索",
          content: "性能优化、SEO、AI API 集成（OpenAI/Anthropic），持续迭代产品",
          resources: ["Web 性能优化", "AI API 最佳实践"]
        }
      ]
    },

    // 推荐资源
    resources: [
      { name: "AI 编程工具", items: ["Cursor", "GitHub Copilot", "v0.dev", "Bolt.new"] },
      { name: "学习平台", items: ["freeCodeCamp", "Scrimba", "Codecademy", "YouTube"] },
      { name: "技术社区", items: ["GitHub", "DEV.to", "掘金", "V2EX"] }
    ]
  };

  return (
    <section id="learning" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">学习复盘</h2>
          <p className="text-xl text-muted-foreground">AI 编程的心得与成长路径</p>
        </div>

        {/* AI 编程心得 */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <BookOpen className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">我的 AI 编程心得</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {config.insights.map((insight, index) => {
              const Icon = insight.icon;
              return (
                <Card key={index} className="card-shadow hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{insight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{insight.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* 学习路径推荐 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center">推荐学习路径</h3>
          
          <Tabs defaultValue="beginner" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="beginner">入门阶段</TabsTrigger>
              <TabsTrigger value="intermediate">进阶阶段</TabsTrigger>
              <TabsTrigger value="advanced">高级探索</TabsTrigger>
            </TabsList>

            <TabsContent value="beginner" className="space-y-4 mt-6">
              {config.learningPath.beginner.map((item, index) => (
                <Card key={index} className="card-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{item.topic}</CardTitle>
                      <Badge variant="outline">{item.week}</Badge>
                    </div>
                    <CardDescription>{item.content}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {item.resources.map((resource, i) => (
                        <Badge key={i} variant="secondary">{resource}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="intermediate" className="space-y-4 mt-6">
              {config.learningPath.intermediate.map((item, index) => (
                <Card key={index} className="card-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{item.topic}</CardTitle>
                      <Badge variant="outline">{item.week}</Badge>
                    </div>
                    <CardDescription>{item.content}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {item.resources.map((resource, i) => (
                        <Badge key={i} variant="secondary">{resource}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>

            <TabsContent value="advanced" className="space-y-4 mt-6">
              {config.learningPath.advanced.map((item, index) => (
                <Card key={index} className="card-shadow">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{item.topic}</CardTitle>
                      <Badge variant="outline">{item.week}</Badge>
                    </div>
                    <CardDescription>{item.content}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {item.resources.map((resource, i) => (
                        <Badge key={i} variant="secondary">{resource}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>

        {/* 推荐资源 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center">推荐学习资源</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {config.resources.map((category, index) => (
              <Card key={index} className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{category.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {category.items.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default LearningSection;
