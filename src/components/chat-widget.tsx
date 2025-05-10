"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Loader2 } from "lucide-react";
import { 
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useChat } from "@ai-sdk/react";
import { initialMessage } from "@/lib/data";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Use the AI SDK's useChat hook with proper configuration
  const { 
    messages, 
    input, 
    handleInputChange, 
    handleSubmit,
    isLoading
  } = useChat({
    api: "/api/gemini",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content: initialMessage,
      }
    ]
  });

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  // Format time as HH:MM
  const formatTime = (): string => {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  // Scroll to bottom when messages change
  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isOpen]);

  // Create onSubmit wrapper for handling form submission
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.trim()) {
      handleSubmit(e);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      {/* Chat Icon Button */}
      <motion.button
        className={`flex items-center justify-center w-16 h-16 rounded-full shadow-lg ${
          isOpen ? "bg-destructive text-white" : "bg-primary dark:bg-black border-4 border-primary/30 text-white"
        }`}
        onClick={toggleChat}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute bottom-20 right-0 sm:bottom-0 sm:right-20"
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="w-[350px] md:w-[400px] shadow-xl border-primary/10 -p-5">
              <CardHeader className="bg-primary/5 p-4 flex flex-row items-center justify-between">
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-5 w-5 text-primary" />
                  <h3 className="font-medium">SoftSell Assistant</h3>
                </div>
                <Button
                  variant="ghost" 
                  size="icon"
                  onClick={toggleChat}
                  className="h-7 w-7 hover:border"
                  aria-label="Close chat"
                >
                  <X className="h-4 w-4" />
                </Button>
              </CardHeader>
              <CardContent className="p-4 h-[300px] overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`${
                        message.role === "assistant"
                          ? "bg-muted rounded-lg rounded-tl-none w-4/5"
                          : "bg-primary/30 text-primary rounded-lg rounded-tr-none w-4/5 ml-auto"
                      } p-3`}
                    >
                      {message.role === "assistant" ? (
                        <div className="prose prose-sm dark:prose-invert max-w-none">
                          <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {message.content}
                          </ReactMarkdown>
                        </div>
                      ) : (
                        <p className="text-sm">{message.content}</p>
                      )}
                      <span className={`text-xs ${
                        message.role === "assistant" 
                          ? "text-muted-foreground" 
                          : "text-foreground/60"
                      } block mt-1`}>
                        {message.role === "assistant" ? "Assistant" : "You"} • {formatTime()}
                      </span>
                    </motion.div>
                  ))}
                  {isLoading && (
                    <div className="bg-muted rounded-lg rounded-tl-none w-4/5 p-3">
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
                        <p className="text-sm text-muted-foreground">Typing...</p>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </CardContent>
              <CardFooter className="p-4 border-t">
                <form className="flex w-full gap-2" onSubmit={onSubmit}>
                  <Input 
                    placeholder="Type your message..." 
                    className="flex-1"
                    value={input}
                    onChange={handleInputChange}
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit" 
                    disabled={!input.trim() || isLoading}
                  >
                    {isLoading ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <Send className="h-4 w-4" />
                    )}
                  </Button>
                </form>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}