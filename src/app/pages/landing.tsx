import { useState, useRef, useEffect } from "react";
import { Send, Bot, User, Clock } from "lucide-react";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { LoginModal } from "../components/auth/login-modal";

interface Message {
  id: string;
  content: string;
  isBot: boolean;
  timestamp: string;
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Xin chào! Tôi là trợ lý ảo y tế của ClinicPro. Bạn có thể mô tả triệu chứng của mình để tôi hỗ trợ tư vấn sơ bộ, hoặc đăng nhập để đặt lịch khám với các bác sĩ chuyên khoa.",
    isBot: true,
    timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
  },
];

const suggestedQuestions = [
  "Tôi bị đau đầu kéo dài",
  "Tư vấn triệu chứng sốt",
  "Ho và đau họng",
  "Đau dạ dày, ợ chua",
];

export default function LandingPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const generateBotResponse = (text: string) => {
    const lowerMessage = text.toLowerCase();
    if (lowerMessage.includes("đau đầu") || lowerMessage.includes("nhức đầu")) {
      return "Dựa trên dữ liệu, đau đầu có thể do stress, thiếu ngủ, hoặc thay đổi thời tiết. Bạn nên nghỉ ngơi, uống đủ nước. Nếu đau kéo dài, hãy đăng nhập để đặt lịch qua phòng khám để bác sĩ kiểm tra nhé.";
    } else if (lowerMessage.includes("sốt") || lowerMessage.includes("nóng")) {
      return "Nếu sốt > 38.5°C, bạn nên đặt lịch khám ngay. Trong khi chờ, hãy uống nhiều nước và chườm mát. Bạn có thể đăng nhập để sử dụng tính năng đặt lịch khám ngay lập tức.";
    } else if (lowerMessage.includes("ho") || lowerMessage.includes("khò") || lowerMessage.includes("viêm họng")) {
      return "Triệu chứng ho kéo dài thường gặp về viêm đường hô hấp. Bạn nên hạn chế nước đá. Nếu ho có đờm, vui lòng đăng nhập để đặt lịch hẹn để bác sĩ chẩn đoán chính xác.";
    } else if (lowerMessage.includes("đau bụng") || lowerMessage.includes("ợ chua") || lowerMessage.includes("chua") || lowerMessage.includes("dạ dày")) {
      return "Bạn có thể đang gặp vấn đề về trào ngược dạ dày (GERD). Bạn nên kiêng đồ chua cay, không nằm ngay sau khi ăn. Hãy đăng nhập để đặt lịch nội soi tại phòng khám kiểm tra kỹ hơn.";
    }
    return "Cảm ơn bạn đã chia sẻ. Để tôi có thể phân tích chính xác dựa trên lịch sử dữ liệu y tế, bạn có thể đăng ký tài khoản hoặc đăng nhập để đặt lịch khám trực tiếp với bác sĩ của chúng tôi.";
  };

  const handleSend = (text: string = inputMessage) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: text,
      isBot: false,
      timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
    };

    setMessages((prev) => [...prev, userMessage]);
    if (inputMessage === text) setInputMessage("");
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateBotResponse(text),
        isBot: true,
        timestamp: new Date().toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }),
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col relative overflow-hidden">
      {/* Background Ornaments */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-blue-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-300 rounded-full mix-blend-multiply filter blur-[100px] opacity-30 animate-blob animation-delay-2000 pointer-events-none"></div>

      {/* Topbar */}
      <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-xl border-b border-white/60 shadow-sm w-full">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="text-3xl">🏥</div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">ClinicPro</h1>
              <p className="text-xs text-gray-500 font-medium">Hệ thống Y tế Thông minh</p>
            </div>
          </div>
          <div>
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-medium rounded-xl hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 hover:-translate-y-0.5"
            >
              Đăng nhập / Đăng ký
            </button>
          </div>
        </div>
      </header>

      {/* Main Chat Interface */}
      <main className="flex-1 flex flex-col items-center justify-end max-w-4xl mx-auto w-full relative z-10 px-4 pb-2 pt-4 min-h-0">
        
        {messages.length === 1 && (
          <div className="flex flex-col items-center justify-center flex-1 w-full opacity-80 mb-8">
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-2xl shadow-blue-500/20 mb-6 animate-bounce">
              <Bot className="h-10 w-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">
              Chào mừng đến với ClinicPro
            </h2>
            <p className="text-gray-500 text-center max-w-lg mb-8">
              Hệ thống tư vấn sức khỏe ứng dụng AI giúp chẩn đoán sơ bộ dựa trên triệu chứng. Hãy bắt đầu bằng cách mô tả tình trạng của bạn.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-2xl">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="px-5 py-4 bg-white/50 hover:bg-white/80 backdrop-blur-md border border-white/50 rounded-2xl text-sm font-medium text-gray-700 text-left transition-all duration-300 hover:shadow-lg hover:border-blue-200 group"
                >
                  <span className="text-blue-500 group-hover:text-blue-600 mr-2 text-lg leading-none">→</span>
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Chat Messages */}
        <div className="w-full flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] pt-4 mb-4">
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? "justify-start" : "justify-end"} animate-in fade-in slide-in-from-bottom-2 duration-300`}
              >
                <div className={`flex gap-3 max-w-[85%] md:max-w-[75%] ${message.isBot ? "" : "flex-row-reverse"}`}>
                  <Avatar className="h-10 w-10 shrink-0 shadow-md">
                    <AvatarFallback className={message.isBot ? "bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600" : "bg-gradient-to-br from-gray-100 to-gray-200 text-gray-700"}>
                      {message.isBot ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
                    </AvatarFallback>
                  </Avatar>
                  <div className={`flex flex-col ${message.isBot ? "items-start" : "items-end"}`}>
                    <div
                      className={`rounded-2xl px-5 py-3.5 shadow-sm backdrop-blur-md ${
                        message.isBot
                          ? "bg-white/80 border border-white/60 text-gray-800 rounded-tl-sm"
                          : "bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-sm shadow-blue-500/30"
                      }`}
                    >
                      <p className="text-[15px] leading-relaxed">{message.content}</p>
                    </div>
                    <div className="flex items-center gap-1 mt-1 px-1 opacity-60">
                      {message.isBot && <Clock className="h-3 w-3 text-gray-500" />}
                      <span className="text-xs font-medium text-gray-500">{message.timestamp}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start animate-in fade-in duration-300">
                <div className="flex gap-3 max-w-[85%]">
                  <Avatar className="h-10 w-10 shrink-0 shadow-md">
                    <AvatarFallback className="bg-gradient-to-br from-blue-100 to-indigo-100 text-blue-600">
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="rounded-2xl px-5 py-4 bg-white/80 backdrop-blur-md border border-white/60 rounded-tl-sm shadow-sm flex items-center gap-1.5">
                    <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 bg-blue-500 rounded-full animate-bounce"></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} className="h-2" />
          </div>
        </div>

        {/* Input Form */}
        <div className="w-full relative bg-white/50 backdrop-blur-xl p-1.5 rounded-2xl border border-white/60 shadow-lg">
          <input
            type="text"
            placeholder="Mô tả triệu chứng hoặc câu hỏi của bạn..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend(inputMessage)}
            className="w-full pl-4 pr-12 py-3 rounded-xl bg-white/50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-[14px] placeholder:text-gray-500 transition-all border border-transparent"
          />
          <button 
            onClick={() => handleSend(inputMessage)}
            disabled={!inputMessage.trim()}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-all disabled:opacity-50 disabled:hover:bg-blue-600 shadow-md"
          >
            <Send className="h-4 w-4 ml-0.5" />
          </button>
        </div>
      </main>

      {/* Login Modal */}
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </div>
  );
}
