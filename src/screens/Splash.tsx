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

      {/* Background image phủ toàn màn hình */}
      <div className="absolute inset-0 z-0">
        <img
          src="/background.jpg"
          alt="background"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 60%' }}
        />
        {/* Gradient trên: che 35% để logo nổi */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, #070B19 0%, #070B19 35%, rgba(7,11,25,0.80) 50%, rgba(7,11,25,0.15) 72%, transparent 100%)',
          }}
        />
        {/* Gradient dưới: tránh viền cứng */}
        <div
          className="absolute bottom-0 left-0 right-0 h-20"
          style={{ background: 'linear-gradient(to top, #070B19, transparent)' }}
        />
      </div>

      {/* Logo + Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
        style={{ paddingTop: '22vh' }}
      >
        {/* Logo: mix-blend-mode screen xóa nền đen của logo.jpg */}
        <img
          src="/logo.jpg"
          alt="DriverFlow Logo"
          style={{
            width: '72%',
            maxWidth: '300px',
            objectFit: 'contain',
            mixBlendMode: 'screen',
          }}
        />

        {/* Subtitle sát ngay dưới logo */}
        <p
          className="text-white/80 font-medium text-center leading-relaxed"
          style={{ fontSize: '15px', marginTop: '-6px' }}
        >
          Quản lý tài chính thông minh<br />dành cho tài xế công nghệ
        </p>
      </motion.div>

    </div>
  );
}