/**
 * Learning Section - 学习复盘区域
 * 包含：AI 编程心得 + 关键方法 + 学习路径
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Sparkles, TrendingUp, Zap } from "lucide-react";
import { profileData } from "@/content/profile";

const LearningSection = () => {
  const { learning } = profileData;

  const icons = [Sparkles, Zap, TrendingUp];

  return (
    <section id="learning" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">学习历程</h2>
          <p className="text-xl text-muted-foreground">AI 编程学习路径与关键收获</p>
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
            {learning.insights.map((insight, index) => {
              const Icon = icons[index % icons.length];
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

        {/* 关键方法 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center">我学到的 3 个关键方法</h3>
          
          <div className="grid md:grid-cols-3 gap-6">
            {learning.keyMethods.map((method, index) => (
              <Card key={index} className="card-shadow hover:shadow-lg transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="text-6xl font-bold text-primary/20 mb-2">
                    {method.number}
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* 学习路径 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center">我的学习路径建议</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {learning.learningPath.map((step, index) => (
              <Card key={index} className="card-shadow hover:shadow-lg transition-shadow relative">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary text-primary-foreground font-bold text-lg">
                      {step.step}
                    </div>
                    <Badge variant="outline">{step.duration}</Badge>
                  </div>
                  <CardTitle className="text-base">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{step.content}</p>
                </CardContent>
                
                {/* 连接线（非最后一个） */}
                {index < learning.learningPath.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border"></div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* 推荐资源 */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-center">推荐学习资源</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {learning.resources.map((resource, index) => (
              <Card key={index} className="card-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{resource.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resource.items.map((item, i) => (
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
