import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/onboarding');
    }, 3000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-[#070B19] relative overflow-hidden">

      {/* ── Background image: chiếm 60% phía dưới màn hình ── */}
      <div className="absolute bottom-0 left-0 right-0 h-[62%] z-0">
        <img
          src="/background.jpg"
          alt="background"
          className="w-full h-full object-cover object-top"
        />
        {/* Gradient fade: trên cùng của ảnh → trong suốt */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, #070B19 0%, #070B19 8%, transparent 45%)',
          }}
        />
        {/* Gradient fade: dưới cùng → đen để khỏi bị cắt cứng */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to top, #070B19 0%, transparent 30%)',
          }}
        />
      </div>

      {/* ── Nội dung: logo + subtitle ── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center pt-[28vh] px-6"
      >
        {/*
          Logo image:
          – logo.jpg có nền đen (#0A0F1E), gần giống nền app (#070B19)
          – mix-blend-mode: screen làm nền đen trở nên trong suốt,
            chỉ giữ lại phần trắng/xanh của logo
        */}
        <img
          src="/logo.jpg"
          alt="DriverFlow Logo"
          className="w-56 h-56 object-contain"
          style={{ mixBlendMode: 'screen' }}
        />

        {/* Subtitle */}
        <p className="text-white/75 font-medium text-center text-[15px] leading-relaxed max-w-[260px] -mt-4">
          Quản lý tài chính thông minh<br />dành cho tài xế công nghệ
        </p>
      </motion.div>

    </div>
  );
}