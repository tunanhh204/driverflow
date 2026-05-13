import { useState, useRef, useEffect } from "react";
import { Bot, Send, User, ChevronLeft, Mic } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useNavigate } from "react-router-dom";

export function AIScreen() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
       id: '1',
       type: 'ai',
       text: 'Xin chào Tuấn! Tôi là trợ lý tài chính DriverFlow AI. Bạn cần hỗ trợ gì hôm nay?',
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const endOfMessagesRef = useRef<HTMLDivElement>(null);

  const SUGGESTIONS = [
    "Hôm nay tôi kiếm được bao nhiêu?",
    "Chi phí đổi xăng hôm nay?",
    "Kế hoạch trả nợ của tôi",
  ];

  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const newUserMsg = { id: Date.now().toString(), type: 'user', text: inputValue };
    setMessages(prev => [...prev, newUserMsg]);
    setInputValue("");

    // Simulate AI response
    setTimeout(() => {
      if (newUserMsg.text.toLowerCase().includes("bao nhiêu")) {
         setMessages(prev => [...prev, {
            id: (Date.now() + 1).toString(),
            type: 'ai',
            text: 'Bạn đã kiếm được: **850.000đ** trong ngày hôm nay.',
            component: (
               <div className="mt-3 bg-surface border border-white/5 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-3">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-success"></div>
                        <span className="text-sm font-medium">Grab</span>
                     </div>
                     <span className="font-semibold">520.000đ</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-warning"></div>
                        <span className="text-sm font-medium">Be</span>
                     </div>
                     <span className="font-semibold">210.000đ</span>
                  </div>
                   <div className="flex justify-between items-center">
                     <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-[#ee4d2d]"></div>
                        <span className="text-sm font-medium">ShopeeFood</span>
                     </div>
                     <span className="font-semibold">120.000đ</span>
                  </div>
               </div>
            )
         }]);
      } else {
         setMessages(prev => [...prev, {
            id: (Date.now() + 1).toString(),
            type: 'ai',
            text: 'Đó là một câu hỏi hay. Tôi đang phân tích dữ liệu của bạn để đưa ra câu trả lời tốt nhất...',
         }]);
      }
    }, 1000);
  };

  const handleSuggestionClick = (text: string) => {
     setInputValue(text);
     // Optional: auto-send after slight delay to match React state update
     setTimeout(() => handleSend(), 50);
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Header */}
      <header className="flex items-center justify-between px-4 py-4 pt-12 border-b border-white/5 bg-background z-10 sticky top-0">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full hover:bg-white/5 transition-colors">
            <ChevronLeft size={24} />
          </button>
          <div className="flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center relative">
                <Bot className="text-primary" size={20} />
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-success rounded-full border-2 border-background"></div>
             </div>
             <div>
                <h1 className="font-semibold text-lg leading-tight">AI Assistant</h1>
                <div className="text-xs text-success font-medium">Đang hoạt động</div>
             </div>
          </div>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto px-6 py-6 pb-32">
        <div className="flex flex-col gap-6">
           <AnimatePresence initial={false}>
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3 }}
                className={`flex gap-3 max-w-[85%] ${msg.type === 'user' ? 'self-end flex-row-reverse' : 'self-start'}`}
              >
                <div className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.type === 'user' ? 'bg-surface border border-white/10' : 'bg-primary/20'}`}>
                  {msg.type === 'user' ? <User size={16} className="text-white/70" /> : <Bot size={16} className="text-primary" />}
                </div>
                <div>
                   <div className={`px-4 py-3 rounded-2xl text-[15px] leading-relaxed ${
                     msg.type === 'user' 
                     ? 'bg-primary text-white rounded-tr-sm' 
                     : 'bg-surface border border-white/5 text-white/90 rounded-tl-sm'
                   }`}>
                     {msg.text.split('**').map((part, i) => i % 2 === 1 ? <strong key={i} className={`font-bold ${msg.type === 'ai' ? 'text-success text-2xl tracking-tight block my-2' : ''}`}>{part}</strong> : part)}
                   </div>
                   {msg.component && msg.component}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
          <div ref={endOfMessagesRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="fixed bottom-0 w-full max-w-md bg-background/90 backdrop-blur-md pt-2 pb-8 px-6 border-t border-white/5">
        <div className="overflow-x-auto hide-scrollbar flex gap-2 mb-4 -mx-6 px-6">
           {SUGGESTIONS.map((suggestion, i) => (
              <button 
                key={i}
                onClick={() => handleSuggestionClick(suggestion)}
                className="whitespace-nowrap px-4 py-2 rounded-full bg-surface border border-white/5 text-sm text-text-gray hover:text-white hover:border-white/20 transition-colors flex-shrink-0"
              >
                 {suggestion}
              </button>
           ))}
        </div>
        <div className="flexitems-center gap-3">
          <div className="flex-1 min-h-[56px] bg-surface border border-white/10 rounded-[28px] flex items-center px-4 focus-within:border-primary/50 focus-within:bg-white/[0.03] transition-all">
             <input
               type="text"
               value={inputValue}
               onChange={(e) => setInputValue(e.target.value)}
               onKeyDown={(e) => e.key === 'Enter' && handleSend()}
               placeholder="Hỏi tôi bất cứ điều gì..."
               className="flex-1 bg-transparent border-none outline-none text-white placeholder:text-text-gray/50 h-full py-4 text-[15px]"
             />
             <button className="text-text-gray hover:text-white transition-colors p-2">
                <Mic size={20} />
             </button>
          </div>
          <button 
            onClick={handleSend}
            disabled={!inputValue.trim()}
            className="w-14 h-14 rounded-full bg-primary flex items-center justify-center ml-3 disabled:opacity-50 disabled:bg-surface disabled:text-text-gray transition-colors flex-shrink-0"
          >
            <Send size={20} className={inputValue.trim() ? "text-white ml-1" : ""} />
          </button>
        </div>
      </div>
    </div>
  );
}
