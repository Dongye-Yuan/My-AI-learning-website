/**
 * Chat Section - AI 数字分身聊天区域（占位 UI）
 * 未来可接入 AI API 实现真实对话
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, Sparkles } from "lucide-react";
import { useState } from "react";

const ChatSection = () => {
  const [inputValue, setInputValue] = useState("");

  // 🔧 可编辑内容配置
  const config = {
    botName: "你的 AI 分身",
    botDescription: "基于我的学习经历训练的 AI 助手，可以回答关于课程、项目和学习路径的问题",
    suggestedQuestions: [
      "你在课程中学到了什么？",
      "如何开始 AI 编程学习？",
      "你的项目是如何实现的？",
      "有什么学习建议吗？"
    ],
    comingSoon: true // 设置为 false 可显示输入框，true 显示即将上线
  };

  const handleSend = () => {
    if (inputValue.trim()) {
      // TODO: 未来接入 AI API
      console.log("发送消息:", inputValue);
      setInputValue("");
    }
  };

  return (
    <section id="chat" className="py-20 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Section Header */}
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Bot className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold">AI 数字分身</h2>
          <p className="text-xl text-muted-foreground">{config.botDescription}</p>
        </div>

        {/* 聊天界面 */}
        <Card className="card-shadow border-2">
          <CardHeader className="border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle>{config.botName}</CardTitle>
                <CardDescription>24/7 在线，随时解答你的疑问</CardDescription>
              </div>
              <Badge variant="secondary" className="ml-auto">AI</Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 pt-6">
            
            {/* 即将上线提示 */}
            {config.comingSoon && (
              <div className="text-center py-12 space-y-4">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto animate-pulse">
                  <Bot className="w-10 h-10 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">即将上线</h3>
                  <p className="text-muted-foreground">
                    AI 数字分身功能正在开发中，敬请期待！
                  </p>
                </div>
                <div className="pt-4">
                  <Badge variant="outline" className="text-lg px-4 py-2">
                    开发进度: 30%
                  </Badge>
                </div>
              </div>
            )}

            {/* 建议问题（仅在非即将上线时显示） */}
            {!config.comingSoon && (
              <>
                <div className="space-y-3">
                  <div className="text-sm font-medium text-muted-foreground">建议问题</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {config.suggestedQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-auto py-3 px-4 text-left justify-start"
                        onClick={() => setInputValue(question)}
                      >
                        {question}
                      </Button>
                    ))}
                  </div>
                </div>

                {/* 聊天输入框 */}
                <div className="flex gap-2">
                  <Input
                    placeholder="问我任何关于课程和项目的问题..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                    className="flex-1"
                  />
                  <Button onClick={handleSend} size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </>
            )}

            {/* 技术说明 */}
            <div className="bg-muted/50 p-4 rounded-lg space-y-2">
              <div className="text-sm font-medium">🔧 技术实现提示</div>
              <div className="text-sm text-muted-foreground space-y-1">
                <div>• 可接入 OpenAI / Anthropic API 实现真实对话</div>
                <div>• 使用 RAG（检索增强生成）基于课程内容回答</div>
                <div>• 建议使用 Supabase Edge Functions 处理 API 调用</div>
                <div>• 配置环境变量存储 API Keys</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 未来功能展望 */}
        <Card className="card-shadow">
          <CardHeader>
            <CardTitle className="text-lg">未来功能计划</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Badge>Phase 1</Badge>
                <div className="text-sm font-medium">基础对话</div>
                <div className="text-sm text-muted-foreground">回答预设问题</div>
              </div>
              <div className="space-y-2">
                <Badge>Phase 2</Badge>
                <div className="text-sm font-medium">智能推荐</div>
                <div className="text-sm text-muted-foreground">学习路径建议</div>
              </div>
              <div className="space-y-2">
                <Badge>Phase 3</Badge>
                <div className="text-sm font-medium">语音交互</div>
                <div className="text-sm text-muted-foreground">语音对话功能</div>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </section>
  );
};

export default ChatSection;
