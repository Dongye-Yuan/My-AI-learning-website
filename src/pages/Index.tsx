/**
 * 主页面 - 课程毕业展示页
 * 整合所有 section 组件 + 导航栏
 */

import NavigationBar from "@/components/NavigationBar";
import HeroSection from "@/components/sections/HeroSection";
import ProjectSection from "@/components/sections/ProjectSection";
import LearningSection from "@/components/sections/LearningSection";
import TechStackSection from "@/components/sections/TechStackSection";
import ChatSection from "@/components/sections/ChatSection";
import FooterSection from "@/components/sections/FooterSection";
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  return (
    <div className="min-h-screen">
      <NavigationBar />
      <HeroSection />
      <ProjectSection />
      <LearningSection />
      <TechStackSection />
      <ChatSection />
      <FooterSection />
      <Toaster />
    </div>
  );
};

export default Index;
