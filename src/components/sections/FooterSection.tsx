/**
 * Footer Section - 页脚区域
 * 包含：版权信息、社交链接、快速导航
 */

import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

const FooterSection = () => {
  // 🔧 可编辑内容配置
  const config = {
    name: "你的姓名",
    year: new Date().getFullYear(),
    builtWith: "Vite + React + Tailwind CSS",
    social: {
      github: "https://github.com/yourusername",
      linkedin: "https://linkedin.com/in/yourprofile",
      email: "your.email@example.com"
    },
    quickLinks: [
      { label: "首页", href: "#hero" },
      { label: "项目路演", href: "#projects" },
      { label: "学习复盘", href: "#learning" },
      { label: "技术栈", href: "#tech-stack" },
      { label: "AI 分身", href: "#chat" }
    ]
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          
          {/* 品牌信息 */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">{config.name}</h3>
            <p className="text-sm text-muted-foreground">
              AI 编程学习者 | 产品构建者
            </p>
            <div className="flex gap-2">
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
          </div>

          {/* 快速导航 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">快速导航</h3>
            <ul className="space-y-2">
              {config.quickLinks.map((link, index) => (
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

          {/* 技术信息 */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">技术栈</h3>
            <p className="text-sm text-muted-foreground">
              Built with {config.builtWith}
            </p>
            <p className="text-sm text-muted-foreground">
              Deployed on Vercel
            </p>
            <Button 
              variant="outline" 
              size="sm"
              onClick={scrollToTop}
            >
              回到顶部
            </Button>
          </div>

        </div>

        {/* 版权信息 */}
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            © {config.year} {config.name}. Made with <Heart className="w-4 h-4 fill-red-500 text-red-500" /> and AI
          </p>
        </div>

      </div>
    </footer>
  );
};

export default FooterSection;
