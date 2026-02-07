/**
 * Navigation Bar - 顶部导航栏组件
 * 响应式设计：桌面端横向导航，移动端折叠菜单
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NavigationBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "首页", href: "#hero" },
    { label: "项目", href: "#projects" },
    { label: "学习", href: "#learning" },
    { label: "部署", href: "#deploy" },
    { label: "AI 分身", href: "#chat" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* 桌面端导航栏 */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          {/* Logo */}
          <div className="font-bold text-xl text-gradient">
            王梦缘
          </div>

          {/* 桌面端导航链接 */}
          <div className="hidden md:flex items-center gap-2">
            {navItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                onClick={() => scrollToSection(item.href)}
                className="text-sm"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* 移动端菜单按钮 */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>
      </nav>

      {/* 移动端折叠菜单 */}
      <div
        className={cn(
          "fixed top-16 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b md:hidden transition-all duration-300",
          isMobileMenuOpen
            ? "max-h-screen opacity-100"
            : "max-h-0 opacity-0 overflow-hidden"
        )}
      >
        <div className="px-4 py-4 space-y-2">
          {navItems.map((item, index) => (
            <Button
              key={index}
              variant="ghost"
              onClick={() => scrollToSection(item.href)}
              className="w-full justify-start text-base"
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavigationBar;
