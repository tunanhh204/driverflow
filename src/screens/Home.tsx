import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Bell, Eye, EyeOff } from "lucide-react";
import { AreaChart, Area, Tooltip, ResponsiveContainer, XAxis } from "recharts";
import { motion } from "motion/react";
import { Link, useNavigate } from "react-router-dom";

const WEEK_DATA = [
  { day: 'T2', value: 450000 },
  { day: 'T3', value: 520000 },
  { day: 'T4', value: 380000 },
  { day: 'T5', value: 650000 },
  { day: 'T6', value: 850000 },
  { day: 'T7', value: 1100000 },
  { day: 'CN', value: 850000 },
];

export function HomeScreen() {
  const navigate = useNavigate();
  const [showIncome, setShowIncome] = useState(true);

  return (
    <div className="flex flex-col min-h-screen px-6 pt-12 pb-24">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-xl font-bold flex items-center gap-2">
            Xin chào, Tuấn <span className="text-2xl">👋</span>
          </h1>
          <p className="text-sm text-text-gray">Hôm nay bạn đang làm rất tốt!</p>
        </div>
        <div className="flex gap-4 items-center">
          <button className="relative">
            <Bell size={24} />
            <div className="absolute top-0 right-0 w-2.5 h-2.5 bg-danger rounded-full border-2 border-background" />
          </button>
          <Link to="/profile" className="w-10 h-10 rounded-full bg-surface border border-white/10 overflow-hidden block">
            <img src="https://i.pravatar.cc/150?u=a042581f4e29026704d" alt="Profile" className="w-full h-full object-cover" />
          </Link>
        </div>
      </header>

      {/* Hero Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative bg-gradient-to-br from-primary to-[#2C62C8] rounded-[28px] p-6 mb-6 overflow-hidden"
      >
        <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative z-10 flex justify-between items-start mb-6">
          <div>
            <div className="text-white/80 text-sm font-medium mb-1">Thu nhập hôm nay</div>
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-bold">{showIncome ? "850.000đ" : "******"}</span>
            </div>
            <div className="flex items-center gap-1.5 text-white/90 text-sm mt-2">
              <span className="text-success font-semibold">↑ 18%</span> so với hôm qua
            </div>
          </div>
          <button onClick={() => setShowIncome(!showIncome)} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm transition-colors hover:bg-white/30">
            {showIncome ? <Eye size={16} className="text-white" /> : <EyeOff size={16} className="text-white/70" />}
          </button>
        </div>

        <div className="relative z-10 grid grid-cols-3 gap-4 pt-6 border-t border-white/20">
          <div>
            <div className="text-lg font-bold">28</div>
            <div className="text-xs text-white/80">Chuyến</div>
          </div>
          <div>
            <div className="text-lg font-bold">8h 24m</div>
            <div className="text-xs text-white/80">Online</div>
          </div>
          <div>
            <div className="text-lg font-bold">635.000đ</div>
            <div className="text-xs text-white/80">Lãi ước tính</div>
          </div>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <div className="flex justify-between gap-4 mb-8">
        {[
          { icon: "💸", label: "Chi tiêu" },
          { icon: "🔗", label: "Liên kết" },
          { icon: "📄", label: "Báo cáo" }
        ].map((action, i) => (
          <button key={i} className="flex-1 bg-surface border border-white/5 rounded-[20px] py-4 flex flex-col items-center gap-2 active:scale-95 transition-transform">
            <span className="text-2xl">{action.icon}</span>
            <span className="text-xs font-medium">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Driver Apps */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Ứng dụng đang chạy</h2>
          <button onClick={() => navigate('/linked')} className="text-primary text-sm font-medium hover:underline">Xem tất cả</button>
        </div>
        <Card className="p-0 overflow-hidden divide-y divide-white/5 bg-surface border border-white/5">
          <div className="flex items-center justify-between p-4">
             <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#00B14F] rounded-2xl flex items-center justify-center font-bold text-white text-lg shadow-lg">G</div>
                <div>
                   <div className="font-semibold flex items-center gap-2">Grab <span className="w-2 h-2 rounded-full bg-success"></span></div>
                   <div className="text-xs text-text-gray mt-1">18 chuyến</div>
                </div>
             </div>
             <div className="text-right">
                <div className="font-semibold">520.000đ</div>
             </div>
          </div>
          <div className="flex items-center justify-between p-4">
             <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#F3C40F] rounded-2xl flex items-center justify-center font-bold text-black text-lg shadow-lg">Be</div>
                <div>
                   <div className="font-semibold flex items-center gap-2">Be <span className="w-2 h-2 rounded-full bg-success"></span></div>
                   <div className="text-xs text-text-gray mt-1">8 chuyến</div>
                </div>
             </div>
             <div className="text-right">
                <div className="font-semibold">210.000đ</div>
             </div>
          </div>
          <div className="flex items-center justify-between p-4 opacity-50">
             <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-[#EE4D2D] rounded-2xl flex items-center justify-center font-bold text-white text-lg shadow-lg">S</div>
                <div>
                   <div className="font-semibold flex items-center gap-2">ShopeeFood <span className="w-2 h-2 rounded-full bg-text-gray"></span></div>
                   <div className="text-xs text-text-gray mt-1">Offline</div>
                </div>
             </div>
             <div className="text-right">
                <div className="font-semibold">120.000đ</div>
             </div>
          </div>
        </Card>
      </div>

      {/* Income Trend */}
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Thu nhập 7 ngày qua</h2>
          <button onClick={() => navigate('/analytics')} className="text-primary text-sm font-medium hover:underline">Chi tiết</button>
        </div>
        <Card className="bg-surface border border-white/5 p-4 pb-0">
          <div className="h-[140px] -mx-4 -mb-4 mt-2">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={WEEK_DATA}>
                <defs>
                  <linearGradient id="colorHomeValue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="var(--color-primary)" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="var(--color-primary)" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <XAxis dataKey="day" hide />
                <Tooltip 
                  contentStyle={{ backgroundColor: 'var(--color-card)', border: 'none', borderRadius: '12px', fontSize: '12px' }}
                  itemStyle={{ color: 'white' }}
                  labelStyle={{ color: 'var(--color-text-gray)', marginBottom: '4px' }}
                  formatter={(value: number) => [`${value.toLocaleString('vi-VN')}đ`, 'Thu nhập']}
                  labelFormatter={(label: string | number) => {
                    const labelStr = String(label);
                    return labelStr.startsWith('T') ? `Thứ ${labelStr.replace('T', '')}` : (labelStr === 'CN' ? 'Chủ nhật' : labelStr);
                  }}
                />
                <Area type="monotone" dataKey="value" stroke="var(--color-primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorHomeValue)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

       {/* Timeline */}
       <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Hoạt động hôm nay</h2>
        </div>
        <Card className="p-0 bg-surface border border-white/5">
           <div className="p-4 space-y-6 relative before:absolute before:inset-y-6 before:left-[45px] before:w-[2px] before:bg-white/5">
             <div className="flex items-center relative z-10">
               <div className="w-12 text-xs text-text-gray font-medium">10:12</div>
               <div className="mx-3 w-3 h-3 bg-[#F3C40F] shadow-[0_0_10px_#F3C40F] rounded-full border border-background"></div>
               <div className="flex-1 font-medium">Be</div>
               <div className="font-semibold text-success">+28.000đ</div>
             </div>
             <div className="flex items-center relative z-10">
               <div className="w-12 text-xs text-text-gray font-medium">09:10</div>
               <div className="mx-3 w-3 h-3 bg-danger shadow-[0_0_10px_rgba(239,68,68,0.5)] rounded-full border border-background"></div>
               <div className="flex-1 font-medium">Đổ xăng</div>
               <div className="font-semibold text-danger">-70.000đ</div>
             </div>
             <div className="flex items-center relative z-10">
               <div className="w-12 text-xs text-text-gray font-medium">08:25</div>
               <div className="mx-3 w-3 h-3 bg-[#00B14F] shadow-[0_0_10px_#00B14F] rounded-full border border-background"></div>
               <div className="flex-1 font-medium">Grab</div>
               <div className="font-semibold text-success">+45.000đ</div>
             </div>
           </div>
           <div className="p-4 border-t border-white/5 text-center">
             <button onClick={() => navigate('/analytics')} className="text-sm font-medium text-text-gray hover:text-white transition-colors hover:underline">Xem tất cả giao dịch</button>
           </div>
        </Card>
      </div>
    </div>
  );
}
