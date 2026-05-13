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
    <div
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        backgroundColor: '#070B19',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Background phủ toàn bộ màn hình */}
      <img
        src="/background.jpg"
        alt="background"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 40%',
          zIndex: 0,
        }}
      />

      {/* Gradient trên: làm tối phần trên cho logo nổi */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background:
            'linear-gradient(to bottom, #070B19 0%, #070B19 20%, rgba(7,11,25,0.75) 42%, rgba(7,11,25,0.1) 65%, transparent 100%)',
        }}
      />

      {/* Gradient dưới: tránh viền cứng */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '15%',
          zIndex: 1,
          background: 'linear-gradient(to top, #070B19, transparent)',
        }}
      />

      {/* Logo + Subtitle */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: 'easeOut' }}
        style={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '18vh',
        }}
      >
        {/* Logo */}
        <img
          src="/logo.png"
          alt="DriverFlow Logo"
          style={{
            width: '80%',
            maxWidth: '320px',
            objectFit: 'contain',
            mixBlendMode: 'screen',
          }}
        />

        {/* Subtitle — kéo sát lên logo */}
        <p
          style={{
            marginTop: '-80px',
            fontSize: '16px',
            fontWeight: 500,
            color: 'rgba(255,255,255,0.82)',
            textAlign: 'center',
            lineHeight: 1.6,
          }}
        >
          Quản lý tài chính thông minh<br />dành cho tài xế công nghệ
        </p>
      </motion.div>
    </div>
  );
}