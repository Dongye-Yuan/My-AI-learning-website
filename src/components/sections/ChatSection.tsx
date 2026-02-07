/**
 * Chat Section - AI 数字分身聊天区域
 * 包含：聊天窗口 + 消息显示 + 输入框
 */

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { profileData } from "@/content/profile";
import { cn } from "@/lib/utils";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const ChatSection = () => {
  const { aiChat } = profileData;
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>(aiChat.welcomeMessages);

  // 🔧 TODO: 未来接入 AI API
  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    // 添加用户消息
    const userMessage: Message = {
      role: 'user',
      content: inputValue
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // 模拟 AI 回复（未来替换为真实 API 调用）
    setTimeout(() => {
      const aiResponse: Message = {
        role: 'assistant',
        content: "感谢你的提问！这是一个模拟回复。未来这里会接入真实的 AI API（如 OpenAI/Anthropic）来提供智能回答。"
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
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
          <p className="text-xl text-muted-foreground">{aiChat.botDescription}</p>
        </div>

        {/* 聊天窗口 */}
        <Card className="card-shadow border-2">
          <CardHeader className="border-b">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle>{aiChat.botName}</CardTitle>
                <CardDescription>24/7 在线，随时解答你的疑问</CardDescription>
              </div>
              <Badge variant="secondary" className="ml-auto">
                {aiChat.comingSoon ? "开发中" : "在线"}
              </Badge>
            </div>
          </CardHeader>

          <CardContent className="space-y-6 pt-6">
            
            {/* 即将上线提示 */}
            {aiChat.comingSoon ? (
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
                
                {/* 技术说明 */}
                <div className="bg-muted/50 p-4 rounded-lg space-y-2 mt-8">
                  <div className="text-sm font-medium">🔧 技术实现计划</div>
                  <div className="text-sm text-muted-foreground text-left space-y-1">
                    <div>• 接入 OpenAI / Anthropic API 实现真实对话</div>
                    <div>• 使用 RAG（检索增强生成）基于课程内容回答</div>
                    <div>• Supabase Edge Functions 处理 API 调用</div>
                    <div>• 配置环境变量：VITE_OPENAI_API_KEY</div>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* 消息显示区域 */}
                <div className="space-y-4 max-h-96 overflow-y-auto p-4 bg-muted/30 rounded-lg">
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={cn(
                        "flex gap-3",
                        message.role === 'user' ? "justify-end" : "justify-start"
                      )}
                    >
                      {message.role === 'assistant' && (
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <Bot className="w-4 h-4 text-primary" />
                        </div>
                      )}
                      <div
                        className={cn(
                          "px-4 py-2 rounded-lg max-w-[80%]",
                          message.role === 'user'
                            ? "bg-primary text-primary-foreground"
                            : "bg-card border"
                        )}
                      >
                        {message.content}
                      </div>
                    </div>
                  ))}
                </div>

                {/* 建议问题 */}
                <div className="space-y-3">
                  <div className="text-sm font-medium text-muted-foreground">建议问题</div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {aiChat.suggestedQuestions.map((question, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="h-auto py-3 px-4 text-left justify-start text-sm"
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
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                    className="flex-1"
                  />
                  <Button onClick={sendMessage} size="icon">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </>
            )}

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
