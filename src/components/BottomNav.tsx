import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { Home, BarChart2, Wallet, Link2, Bot } from "lucide-react";
import { motion } from "motion/react";

const NAV_ITEMS = [
  { id: "home", path: "/home", label: "Trang chủ", icon: Home },
  { id: "analytics", path: "/analytics", label: "Thống kê", icon: BarChart2 },
  { id: "debt", path: "/debt", label: "Nợ", icon: Wallet },
  { id: "linked", path: "/linked", label: "Liên kết", icon: Link2 },
  { id: "ai", path: "/ai", label: "AI", icon: Bot },
];

export function BottomNav() {
  const location = useLocation();

  // Don't show nav on splash or onboarding
  if (['/', '/onboarding', '/connect'].includes(location.pathname)) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 px-6 pb-8 pt-4 bg-background/80 backdrop-blur-lg border-t border-white/5">
      <div className="flex items-center justify-between max-w-md mx-auto">
        {NAV_ITEMS.map((item) => {
          const isActive = location.pathname.startsWith(item.path);
          return (
            <Link
              key={item.id}
              to={item.path}
              className="relative flex flex-col items-center justify-center w-14 group"
            >
              <div className={cn(
                "flex items-center justify-center mb-1 transition-colors z-10",
                isActive ? "text-primary" : "text-text-gray group-hover:text-white"
              )}>
                <item.icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              </div>
              <span className={cn(
                "text-[10px] font-medium transition-colors z-10",
                isActive ? "text-primary" : "text-text-gray group-hover:text-white"
              )}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
