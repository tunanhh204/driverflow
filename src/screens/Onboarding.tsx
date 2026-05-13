import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Theo dõi thu nhập từ mọi ứng dụng",
    description: "Kết nối Grab, Be, ShopeeFood và các ứng dụng khác để theo dõi thu nhập chính xác theo thời gian thực.",
    image: (
      <div className="relative w-64 h-64 mx-auto mb-8">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
        <div className="relative w-full h-full bg-surface border border-white/10 rounded-3xl shadow-2xl flex flex-col items-center justify-center Overflow-hidden p-6">
          <div className="absolute top-4 right-4 bg-success/20 text-success text-xs px-2 py-1 rounded-full font-medium">Online</div>
          <div className="text-text-gray text-sm mb-2">Thu nhập hôm nay</div>
          <div className="text-3xl font-bold mb-4">850.000đ</div>
          <div className="flex gap-2">
            <div className="w-12 h-12 bg-[#00B14F] rounded-2xl flex items-center justify-center font-bold text-white shadow-lg">G</div>
            <div className="w-12 h-12 bg-[#F3C40F] rounded-2xl flex items-center justify-center font-bold text-black shadow-lg">Be</div>
            <div className="w-12 h-12 bg-[#EE4D2D] rounded-2xl flex items-center justify-center font-bold text-white shadow-lg">S</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "AI phân tích dòng tiền và gợi ý",
    description: "Nhận thông tin chi tiết về giờ vàng, khu vực hot và quản lý chi phí xăng xe hiệu quả.",
    image: (
      <div className="relative w-64 h-64 mx-auto mb-8">
        <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl" />
        <div className="relative w-full h-full bg-surface border border-white/10 rounded-3xl shadow-2xl p-6 flex flex-col justify-between">
           <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary text-xl">🧠</span>
              </div>
              <div className="text-sm font-semibold">AI Insight</div>
           </div>
           <div className="bg-card p-4 rounded-2xl border border-white/5">
            <p className="text-sm mb-2">"Tối nay từ 18h - 21h nhu cầu tăng cao 32%. Bạn nên online để tăng thu nhập!"</p>
           </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "Lập kế hoạch trả nợ thông minh",
    description: "Quản lý khoản vay, tự động phân bổ thu nhập để trả nợ nhanh hơn.",
    image: (
      <div className="relative w-64 h-64 mx-auto mb-8 flex items-center justify-center">
        <div className="absolute inset-0 bg-warning/20 rounded-full blur-3xl" />
        <div className="relative w-48 h-48 rounded-full border-[12px] border-card flex items-center justify-center">
           <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
             <circle cx="50" cy="50" r="44" fill="none" stroke="#22C55E" strokeWidth="12" strokeDasharray="80 200" strokeLinecap="round" />
           </svg>
           <div className="text-center">
             <div className="text-3xl font-bold">32%</div>
             <div className="text-text-gray text-xs">Hoàn thành</div>
           </div>
        </div>
      </div>
    )
  }
];

export function OnboardingScreen() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    } else {
      navigate('/connect');
    }
  };

  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden px-6 pt-12 pb-10">
      <div className="flex justify-end mb-8">
        <button onClick={() => navigate('/connect')} className="text-text-gray font-medium text-sm">Bỏ qua</button>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="flex-1"
          >
            {slides[currentSlide].image}
            
            <h2 className="text-2xl font-bold mb-4 text-center">{slides[currentSlide].title}</h2>
            <p className="text-text-gray text-center text-base leading-relaxed">
              {slides[currentSlide].description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex flex-col items-center mt-12 gap-8">
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide ? "w-6 bg-primary" : "w-1.5 bg-white/20"
              }`}
            />
          ))}
        </div>
        <Button className="w-full text-lg h-14" onClick={handleNext}>
          {currentSlide === slides.length - 1 ? "Bắt đầu ngay" : "Tiếp theo"}
        </Button>
      </div>
    </div>
  );
}
