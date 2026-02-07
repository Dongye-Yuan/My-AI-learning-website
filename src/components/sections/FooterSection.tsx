/**
 * Footer Section - 页脚区域
 * 包含：版权信息、社交链接、快速导航
 */

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart, ExternalLink } from "lucide-react";
import { profileData } from "@/content/profile";

const FooterSection = () => {
  const { personal, deployment } = profileData;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { label: "首页", href: "#hero" },
    { label: "项目路演", href: "#projects" },
    { label: "学习复盘", href: "#learning" },
    { label: "技术栈", href: "#tech-stack" },
    { label: "AI 分身", href: "#chat" }
  ];

  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* 品牌信息 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{personal.name}</h3>
            <p className="text-sm text-muted-foreground">
              AI 编程学习者 | 产品构建者
            </p>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href={personal.social.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href={`mailto:${personal.social.email}`}>
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* 快速导航 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">快速导航</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* 项目链接 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">项目链接</h3>
            <div className="space-y-2">
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <a href={deployment.github.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub 仓库
                </a>
              </Button>
              <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                <a href={deployment.vercel.projectUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  在线演示
                </a>
              </Button>
            </div>
            <Button 
              variant="outline" 
              size="sm"
              onClick={scrollToTop}
              className="w-full"
            >
              回到顶部
            </Button>
          </div>

        </div>

        {/* 版权信息 */}
        <div className="pt-8 border-t text-center space-y-2">
          <p className="flex items-center justify-center gap-1 text-sm text-muted-foreground">
            © {new Date().getFullYear()} {personal.name}. Made with <Heart className="w-4 h-4 fill-red-500 text-red-500" /> and AI
          </p>
          <p className="text-xs text-muted-foreground">
            Built with Vite + React + Tailwind CSS | Deployed on Vercel
          </p>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
