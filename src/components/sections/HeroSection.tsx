/**
 * Hero Section - 毕业展示页头部区域
 * 包含：个人介绍 + 毕业宣言 + 快速导航按钮
 */

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";

const HeroSection = () => {
  // 🔧 可编辑内容配置
  const config = {
    name: "你的姓名",
    title: "AI 编程课程毕业生",
    graduationStatement: "从想法到产品，用 AI 重新定义编程的可能性",
    description: "历时 X 周深入学习 AI 辅助编程，完成从 0 到 1 的产品实践，探索 AI 时代的开发新范式。",
    badges: ["AI 编程", "全栈开发", "产品思维"],
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourprofile",
      email: "your.email@example.com"
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Badges */}
        <div className="flex flex-wrap gap-2 justify-center">
          {config.badges.map((badge, index) => (
            <Badge key={index} variant="secondary" className="px-4 py-1 text-sm">
              {badge}
            </Badge>
          ))}
        </div>

        {/* 主标题 */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="block mb-2">{config.name}</span>
            <span className="text-gradient">{config.title}</span>
          </h1>
        </div>

        {/* 毕业宣言 */}
        <p className="text-2xl md:text-3xl font-medium text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {config.graduationStatement}
        </p>

        {/* 描述 */}
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          {config.description}
        </p>

        {/* CTA 按钮 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Button 
            size="lg" 
            className="text-lg px-8 glow-effect"
            onClick={() => scrollToSection('projects')}
          >
            查看项目路演
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8"
            onClick={() => scrollToSection('learning')}
          >
            学习复盘
          </Button>
        </div>

        {/* 社交链接 */}
        <div className="flex gap-4 justify-center pt-8">
          <Button variant="ghost" size="icon" asChild>
            <a href={config.social.github} target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={config.social.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href={`mailto:${config.social.email}`}>
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>

        {/* 滚动提示 */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
