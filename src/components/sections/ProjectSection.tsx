/**
 * Project Section - 项目路演区域
 * 展示：痛点场景 → MVP 产品 → 成果展示 → 思考过程
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Lightbulb, Rocket, Target, ExternalLink, Award } from "lucide-react";
import { profileData } from "@/content/profile";

const ProjectSection = () => {
  const { project } = profileData;

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">项目路演</h2>
          <p className="text-xl text-muted-foreground">从痛点到产品的完整历程</p>
        </div>

        {/* 项目概览卡片 */}
        <Card className="card-shadow border-2">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl">{project.name}</CardTitle>
            <CardDescription className="text-lg">{project.tagline}</CardDescription>
            <div className="flex gap-4 justify-center pt-4 flex-wrap">
              <Button asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  在线演示
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  查看代码
                </a>
              </Button>
            </div>
          </CardHeader>
        </Card>

        {/* 痛点场景 */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-destructive/10 rounded-lg">
              <Target className="w-6 h-6 text-destructive" />
            </div>
            <h3 className="text-2xl font-bold">痛点场景</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {project.painPoints.map((pain, index) => (
              <Card key={index} className="card-shadow hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{pain.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{pain.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* MVP 产品 */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Rocket className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">MVP 核心功能</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {project.mvpFeatures.map((feature, index) => (
              <Card key={index} className="card-shadow hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {feature.tech.map((tech, i) => (
                      <Badge key={i} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 成果展示 */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-accent/10 rounded-lg">
              <Award className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-2xl font-bold">成果展示</h3>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {project.achievements.map((achievement, index) => (
              <Card key={index} className="card-shadow hover:scale-105 transition-transform">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 思考过程 */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-primary/10 rounded-lg">
              <Lightbulb className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-2xl font-bold">从点子到产品的思考</h3>
          </div>
          
          <div className="space-y-4">
            {project.insights.map((insight, index) => (
              <Card key={index} className="card-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{insight.phase}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{insight.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

// 导入 Github 图标
import { Github } from "lucide-react";

export default ProjectSection;
